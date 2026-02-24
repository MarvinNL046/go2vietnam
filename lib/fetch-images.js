#!/usr/bin/env node
/**
 * Image Pipeline for Go2Vietnam
 *
 * Downloads curated Unsplash images and converts to optimized webp using sharp.
 * Uses direct Unsplash CDN URLs (no API key required).
 * Idempotent — skips images that already exist on disk.
 *
 * Usage:
 *   node lib/fetch-images.js          # download missing images only
 *   node lib/fetch-images.js --force   # re-download all images
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const WIDTH = 800;
const HEIGHT = 600;
const QUALITY = 80;
const BATCH_SIZE = 5;
const BATCH_DELAY_MS = 1500;

// =============================================================================
// Curated Unsplash photo URLs per category
// =============================================================================

const IMAGES = {
  cities: {
    'hanoi': 'https://images.unsplash.com/photo-1616424649579-4d280a3680e2',
    'ho-chi-minh-city': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    'hoi-an': 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b',
    'da-nang': 'https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8',
    'hue': 'https://images.unsplash.com/photo-1754078228816-b5203ef6f6d0',
    'nha-trang': 'https://images.unsplash.com/photo-1570366290364-5e76a15ae408',
    'da-lat': 'https://images.unsplash.com/photo-1688952397229-d4260e2630ba',
    'sapa': 'https://plus.unsplash.com/premium_photo-1691960158736-b32ef710a27d',
    'ha-long': 'https://plus.unsplash.com/premium_photo-1692731797429-29f36ab2bd68',
    'phu-quoc': 'https://images.unsplash.com/photo-1698809807960-758cf416e96e',
    'ninh-binh': 'https://images.unsplash.com/photo-1529271230144-e8c648ef570d',
    'can-tho': 'https://images.unsplash.com/photo-1529271230144-e8c648ef570d',
    'mui-ne': 'https://plus.unsplash.com/premium_photo-1666323395339-6ab7598938a2',
  },

  food: {
    'pho': 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1',
    'banh-mi': 'https://plus.unsplash.com/premium_photo-1701026196068-5f470c6b41b0',
    'bun-cha': 'https://plus.unsplash.com/premium_photo-1694383411835-a6e8d1b39858',
    'goi-cuon': 'https://plus.unsplash.com/premium_photo-1726805088989-0b0eedcb32f7',
    'banh-xeo': 'https://images.unsplash.com/photo-1606998619117-36786087ea4e',
    'com-tam': 'https://plus.unsplash.com/premium_photo-1712758600801-461f567f7941',
    'bun-bo-hue': 'https://plus.unsplash.com/premium_photo-1694699355505-8dc227936868',
    'cao-lau': 'https://plus.unsplash.com/premium_photo-1674654419438-3720f0b71087',
    'mi-quang': 'https://plus.unsplash.com/premium_photo-1664472709914-79d53c2b823e',
    'banh-cuon': 'https://plus.unsplash.com/premium_photo-1692731798118-2880236d32a6',
    'hu-tieu': 'https://plus.unsplash.com/premium_photo-1669150849084-a8bdc4ca3aa8',
    'bun-rieu': 'https://images.unsplash.com/photo-1745817078506-bfc70df458b5',
    'nem-ran': 'https://plus.unsplash.com/premium_photo-1681210060793-723e559893c7',
    'bo-la-lot': 'https://plus.unsplash.com/premium_photo-1748864080569-dd208970df9e',
    'banh-khot': 'https://plus.unsplash.com/premium_photo-1695028377773-e3673040f2cc',
    'ca-kho-to': 'https://plus.unsplash.com/premium_photo-1676996177250-7480b5eb7f80',
    'xoi': 'https://plus.unsplash.com/premium_photo-1675814316651-3ce3c6409922',
    'che': 'https://plus.unsplash.com/premium_photo-1680035238547-bfe1c1fe81a4',
  },

  drinks: {
    'ca-phe-sua-da': 'https://plus.unsplash.com/premium_photo-1754254846189-0fe8c3ba01bd',
    'ca-phe-trung': 'https://images.unsplash.com/photo-1751569543716-70c5fb9a8298',
    'tra-da': 'https://plus.unsplash.com/premium_photo-1663853293652-d99ebba231cf',
    'bia-hoi': 'https://images.unsplash.com/photo-1758298597330-d5c7cf4805ca',
    'nuoc-mia': 'https://images.unsplash.com/photo-1644758857314-96db5c43cbb4',
    'sinh-to': 'https://plus.unsplash.com/premium_photo-1678483002143-451f10e031e4',
    'tra-sen': 'https://plus.unsplash.com/premium_photo-1664303754150-7a776a1f28bd',
    'ca-phe-muoi': 'https://images.unsplash.com/photo-1664515725366-e8328e9dc834',
    'ruou-can': 'https://plus.unsplash.com/premium_photo-1680035412984-15e64a61239a',
  },

  islands: {
    'phu-quoc': 'https://images.unsplash.com/photo-1698809807960-758cf416e96e',
    'con-dao': 'https://images.unsplash.com/photo-1694748678433-251bff9628b4',
    'cat-ba': 'https://images.unsplash.com/photo-1722471467241-5327b98a4976',
    'cham-islands': 'https://plus.unsplash.com/premium_photo-1719955781545-c60219441bfc',
    'ly-son': 'https://images.unsplash.com/photo-1694682903614-2170f6206d89',
    'co-to': 'https://plus.unsplash.com/premium_photo-1692731797429-29f36ab2bd68',
    'hon-mun': 'https://plus.unsplash.com/premium_photo-1664365805332-abd4bd4bf295',
  },

  regions: {
    'north-vietnam': 'https://images.unsplash.com/photo-1528127269322-539801943592',
    'central-vietnam': 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b',
    'south-vietnam': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
    'central-highlands': 'https://images.unsplash.com/photo-1688952397229-d4260e2630ba',
    'northwest-vietnam': 'https://plus.unsplash.com/premium_photo-1691960158736-b32ef710a27d',
    'mekong-delta': 'https://images.unsplash.com/photo-1560472355-536de3962603',
  },

  blog: {
    'first-time-vietnam-guide': 'https://plus.unsplash.com/premium_photo-1690960644830-487c569ca6fa',
    'best-street-food-vietnam': 'https://images.unsplash.com/photo-1748596161714-4049199ae770',
    'two-week-vietnam-itinerary': 'https://plus.unsplash.com/premium_photo-1691961828542-08cbb13c215b',
    'vietnam-on-a-budget': 'https://images.unsplash.com/photo-1765659020292-b73f9d42717f',
    'north-vs-south-vietnam': 'https://plus.unsplash.com/premium_photo-1691960158736-b32ef710a27d',
  },

  hero: {
    'hero-vietnam': 'https://images.unsplash.com/photo-1573790387438-4da905039392',
  },

  other: {
    'placeholder': 'https://plus.unsplash.com/premium_photo-1691961828337-26c27528d5a7',
  },
};

// =============================================================================
// Helpers
// =============================================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function downloadAndConvert(slug, baseUrl, outDir, dimensions) {
  const outPath = path.join(outDir, `${slug}.webp`);

  if (!force && fs.existsSync(outPath)) {
    return { slug, status: 'skipped' };
  }

  const { w, h } = dimensions;
  const url = `${baseUrl}?w=${w * 2}&h=${h * 2}&fit=crop&crop=entropy&auto=format&q=${QUALITY}`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Go2Vietnam-ImagePipeline/1.0' },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${slug}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());

  fs.mkdirSync(outDir, { recursive: true });

  await sharp(buffer)
    .resize(w, h, { fit: 'cover', position: 'entropy' })
    .webp({ quality: QUALITY })
    .toFile(outPath);

  const { size } = fs.statSync(outPath);
  return { slug, status: 'ok', size };
}

// =============================================================================
// Main
// =============================================================================

const force = process.argv.includes('--force');

async function main() {
  console.log('==============================================');
  console.log('  Go2Vietnam Image Pipeline');
  console.log('==============================================\n');

  // Build download queue
  const queue = [];

  // Cities: 800x600
  for (const [slug, url] of Object.entries(IMAGES.cities)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images', 'cities'), w: WIDTH, h: HEIGHT, label: `city: ${slug}` });
  }

  // Food: 800x600
  for (const [slug, url] of Object.entries(IMAGES.food)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images', 'food'), w: WIDTH, h: HEIGHT, label: `food: ${slug}` });
  }

  // Drinks: 800x600
  for (const [slug, url] of Object.entries(IMAGES.drinks)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images', 'drinks'), w: WIDTH, h: HEIGHT, label: `drink: ${slug}` });
  }

  // Islands: 800x600
  for (const [slug, url] of Object.entries(IMAGES.islands)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images', 'islands'), w: WIDTH, h: HEIGHT, label: `island: ${slug}` });
  }

  // Regions: 800x600
  for (const [slug, url] of Object.entries(IMAGES.regions)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images', 'regions'), w: WIDTH, h: HEIGHT, label: `region: ${slug}` });
  }

  // Blog: 1200x630 (OG size)
  for (const [slug, url] of Object.entries(IMAGES.blog)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images', 'blog'), w: 1200, h: 630, label: `blog: ${slug}` });
  }

  // Hero: 1920x1080 (full-width hero)
  for (const [slug, url] of Object.entries(IMAGES.hero)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images'), w: 1920, h: 1080, label: `hero: ${slug}` });
  }

  // Placeholder: 800x600
  for (const [slug, url] of Object.entries(IMAGES.other)) {
    queue.push({ slug, url, outDir: path.join(PUBLIC_DIR, 'images'), w: WIDTH, h: HEIGHT, label: slug });
  }

  // Filter already-existing
  const needed = force ? queue : queue.filter(q => !fs.existsSync(path.join(q.outDir, `${q.slug}.webp`)));
  const skipped = queue.length - needed.length;

  console.log(`Total images: ${queue.length}`);
  if (skipped > 0) console.log(`Skipping: ${skipped} (already exist)`);
  console.log(`Downloading: ${needed.length}\n`);

  if (needed.length === 0) {
    console.log('All images already present. Nothing to download.');
    return;
  }

  // Process in batches
  let ok = 0;
  let failed = 0;

  for (let i = 0; i < needed.length; i += BATCH_SIZE) {
    const batch = needed.slice(i, i + BATCH_SIZE);
    const results = await Promise.allSettled(
      batch.map(q => downloadAndConvert(q.slug, q.url, q.outDir, { w: q.w, h: q.h }))
    );

    for (let j = 0; j < results.length; j++) {
      const r = results[j];
      const q = batch[j];
      if (r.status === 'fulfilled' && r.value.status === 'ok') {
        ok++;
        console.log(`  [${ok + failed}/${needed.length}] ${q.label} - ${formatSize(r.value.size)}`);
      } else if (r.status === 'rejected') {
        failed++;
        console.error(`  [${ok + failed}/${needed.length}] ${q.label} - FAILED: ${r.reason.message}`);
      }
    }

    // Rate limit between batches
    if (i + BATCH_SIZE < needed.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  console.log(`\n==============================================`);
  console.log(`  Done! ${ok} downloaded, ${skipped} skipped, ${failed} failed`);
  console.log(`==============================================\n`);

  console.log('Images from Unsplash are free under the Unsplash License.');
  console.log('See: https://unsplash.com/license\n');

  if (failed > 0) process.exit(1);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
