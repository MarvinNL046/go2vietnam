const path = require('path');
const fs = require('fs');

const dataDir = path.join(process.cwd(), 'data', 'transport');

const ROUTE_SLUGS = [
  'hanoi-to-halong-bay',
  'hanoi-to-sapa',
  'hanoi-to-ninh-binh',
  'hcmc-to-phu-quoc',
  'hcmc-to-mui-ne',
  'da-nang-to-hoi-an',
  'hue-to-hoi-an',
  'nha-trang-to-da-lat',
];

function getRouteBySlug(slug) {
  try {
    const routePath = path.join(dataDir, `${slug}.json`);
    if (fs.existsSync(routePath)) {
      return JSON.parse(fs.readFileSync(routePath, 'utf8'));
    }
  } catch (error) {
    console.error(`Error loading transport route data for ${slug}:`, error.message);
  }
  return null;
}

function getRouteSlugs() {
  return ROUTE_SLUGS;
}

module.exports = { getRouteBySlug, getRouteSlugs };
