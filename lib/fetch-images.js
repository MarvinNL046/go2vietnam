#!/usr/bin/env node

/**
 * Image Pipeline Script for Go2Vietnam
 *
 * Fetches license-free images from Unsplash and converts them to optimized
 * webp format using sharp. Reads all content data files to build a manifest
 * of needed images, then downloads and processes only missing ones.
 *
 * Usage:
 *   UNSPLASH_ACCESS_KEY=your_key node lib/fetch-images.js
 *
 * Or set UNSPLASH_ACCESS_KEY in .env.local and run:
 *   npm run images:fetch
 *
 * Rate limits: Unsplash free tier allows 50 requests/hour. The script adds
 * a 1.5-second delay between requests and warns when approaching the limit.
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const DATA_DIR = path.join(PROJECT_ROOT, "data");
const CONTENT_DIR = path.join(PROJECT_ROOT, "content");

const UNSPLASH_API = "https://api.unsplash.com";
const REQUEST_DELAY_MS = 1500; // 1.5 seconds between Unsplash requests
const RATE_LIMIT_WARN = 45; // warn when this many requests have been made
const RATE_LIMIT_MAX = 50; // hard stop at Unsplash free-tier limit

const IMAGE_MAX_WIDTH = 1920;
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 85;

// ---------------------------------------------------------------------------
// Load Unsplash access key
// ---------------------------------------------------------------------------

/**
 * Attempts to load the Unsplash access key from the environment or .env.local.
 * Returns the key string or null if not found.
 */
function loadAccessKey() {
  // Check environment first
  if (process.env.UNSPLASH_ACCESS_KEY) {
    return process.env.UNSPLASH_ACCESS_KEY;
  }

  // Try .env.local
  const envPath = path.join(PROJECT_ROOT, ".env.local");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    const match = envContent.match(
      /^UNSPLASH_ACCESS_KEY\s*=\s*["']?([^"'\r\n]+)["']?/m
    );
    if (match) {
      return match[1].trim();
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Search query builders
// ---------------------------------------------------------------------------

/**
 * Builds an Unsplash search query based on category and item name.
 */
function buildSearchQuery(category, name) {
  switch (category) {
    case "city":
      return `${name} Vietnam cityscape`;
    case "food":
      return `${name} Vietnamese food dish`;
    case "drink":
      return `${name} Vietnamese drink`;
    case "island":
      return `${name} Vietnam island beach`;
    case "blog":
      return `${name} Vietnam travel`;
    case "logo":
      return "Vietnam travel landscape scenic";
    case "placeholder":
      return "Vietnam landscape scenic nature";
    case "og":
      return "Vietnam travel landscape panoramic";
    default:
      return `${name} Vietnam`;
  }
}

// ---------------------------------------------------------------------------
// Data scanning: build image manifest
// ---------------------------------------------------------------------------

/**
 * Reads a JSON file and returns parsed content, or an empty array on failure.
 */
function readJsonSafe(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`  [warn] Could not read ${filePath}: ${err.message}`);
    return [];
  }
}

/**
 * Extracts frontmatter from a markdown file (simple parser for the image field).
 * Returns an object with title and image, or null.
 */
function extractBlogFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) return null;

    const fm = fmMatch[1];
    const titleMatch = fm.match(/^title:\s*["'](.+?)["']\s*$/m);
    const imageMatch = fm.match(/^image:\s*["'](.+?)["']\s*$/m);

    return {
      title: titleMatch ? titleMatch[1] : null,
      image: imageMatch ? imageMatch[1] : null,
    };
  } catch (err) {
    console.warn(`  [warn] Could not parse ${filePath}: ${err.message}`);
    return null;
  }
}

/**
 * Scans all data sources and returns an array of image entries:
 *   { outputPath, searchQuery, format }
 *
 * - outputPath: absolute path where the image should be saved (inside public/)
 * - searchQuery: the Unsplash search string
 * - format: "webp" or "jpeg"
 */
function buildImageManifest() {
  const manifest = [];

  // --- Cities ---
  const cities = readJsonSafe(path.join(DATA_DIR, "cities", "index.json"));
  for (const city of cities) {
    if (city.image) {
      const name =
        typeof city.name === "object" ? city.name.en : city.name || city.slug;
      manifest.push({
        outputPath: path.join(PUBLIC_DIR, city.image),
        searchQuery: buildSearchQuery("city", name),
        format: "webp",
        label: `city: ${name}`,
      });
    }
  }

  // --- Food ---
  const food = readJsonSafe(path.join(DATA_DIR, "food", "index.json"));
  for (const dish of food) {
    if (dish.image) {
      const name =
        typeof dish.name === "object" ? dish.name.en : dish.name || dish.slug;
      manifest.push({
        outputPath: path.join(PUBLIC_DIR, dish.image),
        searchQuery: buildSearchQuery("food", name),
        format: "webp",
        label: `food: ${name}`,
      });
    }
  }

  // --- Drinks ---
  const drinks = readJsonSafe(path.join(DATA_DIR, "drinks", "index.json"));
  for (const drink of drinks) {
    if (drink.image) {
      const name =
        typeof drink.name === "object"
          ? drink.name.en
          : drink.name || drink.slug;
      manifest.push({
        outputPath: path.join(PUBLIC_DIR, drink.image),
        searchQuery: buildSearchQuery("drink", name),
        format: "webp",
        label: `drink: ${name}`,
      });
    }
  }

  // --- Islands ---
  const islands = readJsonSafe(path.join(DATA_DIR, "islands", "index.json"));
  for (const island of islands) {
    if (island.image) {
      const name =
        typeof island.name === "object"
          ? island.name.en
          : island.name || island.slug;
      manifest.push({
        outputPath: path.join(PUBLIC_DIR, island.image),
        searchQuery: buildSearchQuery("island", name),
        format: "webp",
        label: `island: ${name}`,
      });
    }
  }

  // --- Blog posts ---
  const blogDir = path.join(CONTENT_DIR, "blog");
  if (fs.existsSync(blogDir)) {
    const blogFiles = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"));

    for (const file of blogFiles) {
      const fm = extractBlogFrontmatter(path.join(blogDir, file));
      if (fm && fm.image) {
        const title = fm.title || file.replace(/\.md$/, "").replace(/-/g, " ");
        manifest.push({
          outputPath: path.join(PUBLIC_DIR, fm.image),
          searchQuery: buildSearchQuery("blog", title),
          format: "webp",
          label: `blog: ${title}`,
        });
      }
    }
  }

  // --- Static assets: logo, og-default, placeholder ---
  manifest.push({
    outputPath: path.join(PUBLIC_DIR, "images", "logo.webp"),
    searchQuery: buildSearchQuery("logo"),
    format: "webp",
    label: "logo placeholder",
  });

  manifest.push({
    outputPath: path.join(PUBLIC_DIR, "images", "og-default.jpg"),
    searchQuery: buildSearchQuery("og"),
    format: "jpeg",
    label: "OG default image",
  });

  manifest.push({
    outputPath: path.join(PUBLIC_DIR, "images", "placeholder.webp"),
    searchQuery: buildSearchQuery("placeholder"),
    format: "webp",
    label: "placeholder image",
  });

  return manifest;
}

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

/**
 * Makes an HTTPS GET request and returns the response body as a string.
 */
function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      headers: {
        "User-Agent": "Go2Vietnam-ImagePipeline/1.0",
        ...headers,
      },
    };

    https
      .get(options, (res) => {
        // Follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return httpsGet(res.headers.location, headers).then(resolve, reject);
        }

        if (res.statusCode !== 200) {
          // Drain the response
          res.resume();
          return reject(
            new Error(`HTTP ${res.statusCode} for ${url}`)
          );
        }

        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

/**
 * Downloads an image from a URL and returns it as a Buffer.
 */
function downloadImage(url) {
  return httpsGet(url);
}

/**
 * Searches Unsplash for a photo matching the query.
 * Returns the `urls.regular` URL or null if no results.
 */
async function searchUnsplash(query, accessKey) {
  const params = new URLSearchParams({
    query,
    per_page: "1",
    orientation: "landscape",
  });

  const url = `${UNSPLASH_API}/search/photos?${params.toString()}`;
  const headers = {
    Authorization: `Client-ID ${accessKey}`,
    "Accept-Version": "v1",
  };

  const body = await httpsGet(url, headers);
  const data = JSON.parse(body.toString("utf-8"));

  if (!data.results || data.results.length === 0) {
    return null;
  }

  return {
    url: data.results[0].urls.regular,
    photographer: data.results[0].user.name,
    unsplashUrl: data.results[0].links.html,
  };
}

// ---------------------------------------------------------------------------
// Image processing with sharp
// ---------------------------------------------------------------------------

/**
 * Processes a raw image buffer and saves it to outputPath in the given format.
 * - Resizes to max IMAGE_MAX_WIDTH wide (maintaining aspect ratio)
 * - Converts to webp (quality 80) or jpeg (quality 85)
 */
async function processAndSave(imageBuffer, outputPath, format) {
  // Ensure the target directory exists
  const dir = path.dirname(outputPath);
  fs.mkdirSync(dir, { recursive: true });

  let pipeline = sharp(imageBuffer).resize({
    width: IMAGE_MAX_WIDTH,
    withoutEnlargement: true,
  });

  if (format === "jpeg" || format === "jpg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  }

  await pipeline.toFile(outputPath);
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Returns a human-readable file size string.
 */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ---------------------------------------------------------------------------
// Main pipeline
// ---------------------------------------------------------------------------

async function main() {
  console.log("==============================================");
  console.log("  Go2Vietnam Image Pipeline");
  console.log("==============================================\n");

  // 1. Load access key
  const accessKey = loadAccessKey();
  if (!accessKey) {
    console.error(
      "ERROR: UNSPLASH_ACCESS_KEY not found.\n\n" +
        "Set it as an environment variable:\n" +
        "  UNSPLASH_ACCESS_KEY=your_key node lib/fetch-images.js\n\n" +
        "Or add it to .env.local:\n" +
        "  UNSPLASH_ACCESS_KEY=your_key\n\n" +
        "Get a free key at: https://unsplash.com/developers\n"
    );
    process.exit(1);
  }
  console.log("[ok] Unsplash access key loaded\n");

  // 2. Build image manifest from data files
  console.log("Scanning data files for image references...\n");
  const manifest = buildImageManifest();
  console.log(`Found ${manifest.length} images referenced in content.\n`);

  // 3. Filter out images that already exist
  const needed = [];
  const skipped = [];

  for (const entry of manifest) {
    if (fs.existsSync(entry.outputPath)) {
      skipped.push(entry);
    } else {
      needed.push(entry);
    }
  }

  if (skipped.length > 0) {
    console.log(`Skipping ${skipped.length} images that already exist.`);
  }

  if (needed.length === 0) {
    console.log("\nAll images are already present. Nothing to download.");
    printSummary(0, skipped.length, 0, []);
    return;
  }

  console.log(`Need to download ${needed.length} images.\n`);

  // Check rate limit feasibility
  if (needed.length > RATE_LIMIT_MAX) {
    console.warn(
      `[warn] ${needed.length} images needed but Unsplash free tier allows ` +
        `only ${RATE_LIMIT_MAX} requests/hour.\n` +
        `       The script will process the first ${RATE_LIMIT_MAX} images ` +
        `and skip the rest. Run again after the rate limit resets.\n`
    );
  }

  // 4. Download and process images
  let downloaded = 0;
  let requestCount = 0;
  const failed = [];

  for (let i = 0; i < needed.length; i++) {
    const entry = needed[i];
    const progress = `[${i + 1}/${needed.length}]`;

    // Rate limit check
    if (requestCount >= RATE_LIMIT_MAX) {
      console.warn(
        `\n[warn] Reached Unsplash rate limit (${RATE_LIMIT_MAX} requests).` +
          "\n       Run the script again after the limit resets (1 hour)." +
          `\n       Remaining: ${needed.length - i} images.\n`
      );
      // Mark remaining as failed
      for (let j = i; j < needed.length; j++) {
        failed.push({
          entry: needed[j],
          reason: "Rate limit reached",
        });
      }
      break;
    }

    if (requestCount >= RATE_LIMIT_WARN && requestCount < RATE_LIMIT_MAX) {
      console.warn(
        `  [warn] Approaching rate limit: ${requestCount}/${RATE_LIMIT_MAX} requests used`
      );
    }

    console.log(`${progress} ${entry.label}`);
    console.log(`         query: "${entry.searchQuery}"`);

    try {
      // Search Unsplash
      const result = await searchUnsplash(entry.searchQuery, accessKey);
      requestCount++;

      if (!result) {
        console.log("         [skip] No results found on Unsplash\n");
        failed.push({ entry, reason: "No Unsplash results" });
        await sleep(REQUEST_DELAY_MS);
        continue;
      }

      console.log(`         photo by: ${result.photographer}`);

      // Download the image
      const imageBuffer = await downloadImage(result.url);
      console.log(`         downloaded: ${formatSize(imageBuffer.length)}`);

      // Process and save
      await processAndSave(imageBuffer, entry.outputPath, entry.format);

      const savedStats = fs.statSync(entry.outputPath);
      console.log(
        `         saved: ${entry.outputPath.replace(PROJECT_ROOT, ".")} ` +
          `(${formatSize(savedStats.size)}, ${entry.format})\n`
      );

      downloaded++;
    } catch (err) {
      console.error(`         [error] ${err.message}\n`);
      failed.push({ entry, reason: err.message });
    }

    // Rate limiting delay between requests
    if (i < needed.length - 1) {
      await sleep(REQUEST_DELAY_MS);
    }
  }

  // 5. Print summary
  printSummary(downloaded, skipped.length, failed.length, failed);
}

/**
 * Prints a final summary of the pipeline run.
 */
function printSummary(downloaded, skippedCount, failedCount, failedEntries) {
  console.log("\n==============================================");
  console.log("  Summary");
  console.log("==============================================");
  console.log(`  Downloaded:  ${downloaded}`);
  console.log(`  Skipped:     ${skippedCount} (already existed)`);
  console.log(`  Failed:      ${failedCount}`);
  console.log(
    `  Total:       ${downloaded + skippedCount + failedCount}`
  );

  if (failedEntries.length > 0) {
    console.log("\n  Failed images:");
    for (const f of failedEntries) {
      console.log(`    - ${f.entry.label}: ${f.reason}`);
    }
  }

  console.log("\n==============================================\n");

  if (downloaded > 0) {
    console.log(
      "NOTE: Images from Unsplash are free to use under the Unsplash License.\n" +
        "      Attribution is appreciated but not required.\n" +
        "      See: https://unsplash.com/license\n"
    );
  }
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

main().catch((err) => {
  console.error("\nFatal error:", err);
  process.exit(1);
});
