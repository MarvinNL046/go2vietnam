/**
 * Generate a logo for Go2Vietnam using the Gemini API (image generation).
 *
 * Usage:
 *   node lib/generate-logo.js
 *
 * Requires:
 *   - .env.local with GEMINI_API_KEY=...
 *   - sharp (npm package, already in dependencies)
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// ---------------------------------------------------------------------------
// 1. Load GEMINI_API_KEY from .env.local
// ---------------------------------------------------------------------------

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const raw = fs.readFileSync(envPath, 'utf-8');
  const vars = {};
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    // Strip surrounding quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }
  return vars;
}

const env = loadEnv();
const API_KEY = env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('ERROR: GEMINI_API_KEY not found in .env.local');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 2. Call Gemini API to generate logo image
// ---------------------------------------------------------------------------

const LOGO_PROMPT = `Design a clean, modern, minimalist logo for 'Go2Vietnam', a travel guide website about Vietnam. The logo should be: a simple icon mark that evokes travel and Vietnam (could incorporate elements like a compass, airplane, or Vietnamese conical hat 'non la'), using colors Vietnamese Red (#DA251D) and Dark Green (#1A3C34) with Golden Yellow (#FFD700) accent. Clean white or transparent background. Professional, scalable, suitable for web header at 40x40px. No text in the logo - icon only.`;

const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

async function generateImage(prompt) {
  console.log('Calling Gemini API to generate logo...');

  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE'],
    },
  };

  const res = await fetch(GEMINI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API error (${res.status}): ${errText}`);
  }

  const data = await res.json();

  // Extract image data from response
  const candidates = data.candidates || [];
  if (candidates.length === 0) {
    throw new Error('No candidates returned from Gemini API');
  }

  const parts = candidates[0].content?.parts || [];
  let imageData = null;
  let textResponse = null;

  for (const part of parts) {
    if (part.inlineData) {
      imageData = part.inlineData; // { mimeType, data (base64) }
    }
    if (part.text) {
      textResponse = part.text;
    }
  }

  if (textResponse) {
    console.log('Gemini text response:', textResponse.slice(0, 200));
  }

  if (!imageData) {
    console.error('Full API response:', JSON.stringify(data, null, 2).slice(0, 2000));
    throw new Error('No image data found in Gemini response');
  }

  console.log(`Received image: mimeType=${imageData.mimeType}, base64 length=${imageData.data.length}`);
  return Buffer.from(imageData.data, 'base64');
}

// ---------------------------------------------------------------------------
// 3. Process and save images
// ---------------------------------------------------------------------------

async function processAndSave(imageBuffer) {
  const outDir = path.join(__dirname, '..', 'public', 'images');
  fs.mkdirSync(outDir, { recursive: true });

  // --- Remove white background for transparency ---
  const srcWithAlpha = await sharp(imageBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: srcPixels, info: srcInfo } = srcWithAlpha;
  const { width: srcW, height: srcH, channels: srcCh } = srcInfo;

  for (let i = 0; i < srcPixels.length; i += srcCh) {
    const r = srcPixels[i];
    const g = srcPixels[i + 1];
    const b = srcPixels[i + 2];
    if (r > 240 && g > 240 && b > 240) {
      srcPixels[i + 3] = 0;
    }
  }

  const transparentSrc = await sharp(srcPixels, { raw: { width: srcW, height: srcH, channels: srcCh } })
    .png()
    .toBuffer();

  // --- Logo: 200x200 webp ---
  const logoPath = path.join(outDir, 'logo.webp');
  await sharp(transparentSrc)
    .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(logoPath);
  console.log(`Saved logo: ${logoPath}`);

  // --- OG image: 1200x630 with logo centered on dark green background ---
  const ogPath = path.join(outDir, 'og-default.jpg');

  // Reuse the transparent source for the OG logo
  const logoForOG = await sharp(transparentSrc)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create the "Go2Vietnam" text as an SVG overlay
  const textSVG = `
    <svg width="1200" height="630">
      <style>
        .title {
          fill: #FFFFFF;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 64px;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .subtitle {
          fill: #FFD700;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 28px;
          letter-spacing: 4px;
        }
      </style>
      <text x="600" y="420" text-anchor="middle" class="title">Go2Vietnam</text>
      <text x="600" y="470" text-anchor="middle" class="subtitle">YOUR VIETNAM TRAVEL GUIDE</text>
    </svg>
  `;

  // Build OG image: dark green bg -> composite logo in center top -> text below
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 26, g: 60, b: 52 }, // #1A3C34
    },
  })
    .jpeg()
    .toBuffer()
    .then((bg) =>
      sharp(bg)
        .composite([
          {
            input: logoForOG,
            top: 120, // vertically centered-ish above text
            left: Math.round((1200 - 180) / 2),
          },
          {
            input: Buffer.from(textSVG),
            top: 0,
            left: 0,
          },
        ])
        .jpeg({ quality: 90 })
        .toFile(ogPath)
    );

  console.log(`Saved OG image: ${ogPath}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  try {
    const rawPath = path.join(__dirname, '..', 'public', 'images', 'logo-raw.png');
    fs.mkdirSync(path.dirname(rawPath), { recursive: true });

    let imageBuffer;

    // If --reprocess flag is passed and raw image exists, skip API call
    if (process.argv.includes('--reprocess') && fs.existsSync(rawPath)) {
      console.log('Reprocessing from existing raw image (skipping API call)...');
      imageBuffer = fs.readFileSync(rawPath);
    } else {
      imageBuffer = await generateImage(LOGO_PROMPT);
      fs.writeFileSync(rawPath, imageBuffer);
      console.log(`Saved raw image: ${rawPath}`);
    }

    await processAndSave(imageBuffer);

    console.log('\nDone! Generated files:');
    console.log('  - public/images/logo.webp       (200x200 logo)');
    console.log('  - public/images/og-default.jpg   (1200x630 OG image)');
    console.log('  - public/images/logo-raw.png     (raw Gemini output)');
  } catch (err) {
    console.error('Failed to generate logo:', err.message);
    process.exit(1);
  }
}

main();
