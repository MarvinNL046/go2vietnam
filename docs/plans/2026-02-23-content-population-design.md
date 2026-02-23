# Content Population Design

## Data Architecture

### Cities (`data/cities/`)
- `index.json` - Array of `{slug, name, image, region, highlights[], description}`
- `<slug>.json` - Extended: overview, neighborhoods, gettingThere, bestTime, budget, safety, dayTrips, localTips, sources[]

### Food (`data/food/`)
- `index.json` - Array of `{slug, name, image, category, spiceLevel, description}`
- `<slug>.json` - Extended: origin, ingredients[], whereToEat[], howToOrder, variations[], priceRange, sources[]

### Drinks (`data/drinks/`)
- `index.json` - Array of `{slug, name, image, category, description}`
- `<slug>.json` - Extended: origin, howItsMade, whereToTry[], variations[], sources[]

### Islands (`data/islands/`)
- `index.json` - Array of `{slug, name, image, bestFor[], description}`
- `<slug>.json` - Extended: overview, gettingThere, bestTime, activities[], accommodation, sources[]

### Blog (`content/blog/`)
- Markdown with gray-matter frontmatter: title, date, excerpt, category, image, tags[]

### Travel Needs (new pages)
- Visa, Transport, Weather, Practical Info - dedicated page content

## Content Items

### Cities (13)
Hanoi, Ho Chi Minh City, Da Nang, Hoi An, Hue, Nha Trang, Da Lat, Sapa, Ha Long, Phu Quoc, Can Tho, Ninh Binh, Mui Ne

### Food (18)
Pho, Banh Mi, Bun Cha, Goi Cuon, Banh Xeo, Bun Bo Hue, Com Tam, Cao Lau, Mi Quang, Banh Cuon, Bun Rieu, Hu Tieu, Nem Ran, Bo La Lot, Ca Kho To, Banh Khot, Xoi, Che

### Drinks (9)
Ca Phe Sua Da, Ca Phe Trung, Ca Phe Muoi, Bia Hoi, Sinh To, Nuoc Mia, Tra Da, Tra Sen, Ruou Can

### Islands (7)
Phu Quoc, Con Dao, Cat Ba, Ly Son, Cham Islands, Co To, Hon Mun

### Blog (5)
First Timer's Guide, Vietnam on a Budget, Street Food Guide, 2-Week Itinerary, North vs South

## Quality Standards (EEAT)
- Specific Vietnamese names with diacritics where appropriate
- Real neighborhood names and landmarks
- Realistic prices in VND and USD
- Seasonal/weather information per region
- Cultural context and etiquette tips
- Safety and practical travel advice
- Sources cited for factual claims
- Images: placeholder paths `/images/<type>/<slug>.webp` (Unsplash pipeline later)
