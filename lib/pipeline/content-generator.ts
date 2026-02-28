import { generateContent, type AiModel } from "./ai-provider";
import { generateBlogImage } from "./image-generator";
import { scrapeTopicContext } from "./scraper";
import fs from "fs";
import path from "path";

// -------------------------------------------------------------------
// Types
// -------------------------------------------------------------------

export type PostCategory =
  | "city-guide"
  | "food"
  | "activities"
  | "practical"
  | "budget"
  | "seasonal"
  | "islands";

export interface BlogPostOptions {
  topic?: string;
  category?: PostCategory;
  model?: AiModel;
  generateImage?: boolean;
  scrapeContext?: boolean;
  scrapeUrls?: string[];
}

interface QueuedTopic {
  topic: string;
  category: PostCategory;
  targetKeyword: string;
  searchVolume: number;
  scrapeUrls: string[];
  priority: number;
}

export interface GeneratedPost {
  title: string;
  slug: string;
  date: string;
  author: { name: string };
  category: PostCategory;
  tags: string[];
  image: string;
  imageBase64?: string;
  description: string;
  featured: boolean;
  readingTime: number;
  lastUpdated: string;
  sources: Array<{ name: string; url: string }>;
  content: string;
  scrapeData?: string;
}

export interface TranslatedPost {
  locale: string;
  content: string;
}

// -------------------------------------------------------------------
// Topic bank — Vietnam travel topics rotating across categories
// -------------------------------------------------------------------

const TOPIC_BANK: Record<PostCategory, string[]> = {
  "city-guide": [
    "Hidden Gems in Hanoi That Most Tourists Miss",
    "Ho Chi Minh City Beyond War Museums: A Local's Guide",
    "Da Nang Day Trip: Marble Mountains and My Khe Beach",
    "Hoi An Walking Tour: Lanterns, Food & Ancient Architecture",
    "Sa Pa Vietnam: The Mountain Town Worth the Journey",
    "Hue Day Trip from Da Nang: Imperial Citadel Guide",
    "Da Lat Travel Guide: Vietnam's Misty Mountain Retreat",
    "Nha Trang Beach Resort Guide: Sun, Sea & Seafood",
    "Ninh Binh: Vietnam's Hidden Gem of Karst Mountains",
    "Can Tho and the Mekong Delta: Floating Market Guide",
  ],
  food: [
    "Best Street Food Markets in Hanoi You Must Visit",
    "Vietnamese Cooking Classes Worth Taking: Hanoi vs Hoi An",
    "Guide to Vietnamese Regional Cuisines: North vs Central vs South",
    "Must-Try Vietnamese Dishes for First-Time Visitors",
    "Vegan and Vegetarian Food Guide to Vietnam",
    "Vietnam's Best Night Markets for Food Lovers",
    "Pho Bo vs Pho Ga: Understanding Vietnam's Iconic Soup",
    "Banh Mi: The World's Best Sandwich — A Complete Guide",
    "Bun Cha Hanoi: Where Obama Ate and Other Top Spots",
    "Vietnamese Coffee Culture: From Ca Phe Sua Da to Egg Coffee",
  ],
  activities: [
    "Best Snorkeling and Diving Spots in Vietnam",
    "Motorbike Loop in Ha Giang: Vietnam's Most Epic Road Trip",
    "Kayaking in Ha Long Bay: Day Trip vs Overnight Cruise",
    "Trekking in Sa Pa: Which Route Is Best for You?",
    "Cu Chi Tunnels: History, Tours & What to Expect",
    "Vietnamese Cooking Classes: Where to Learn Authentic Recipes",
    "Sand Dunes of Mui Ne: Quad Bikes, Surfing & Sunrise",
    "Phong Nha Caves: The World's Largest Cave System Guide",
    "Water Puppets in Hanoi: Where to Watch This Ancient Art",
    "Mekong Delta Boat Tours: Best Routes and Operators",
  ],
  practical: [
    "Vietnam Visa Guide 2026: E-Visa, Visa on Arrival & Exemptions",
    "Getting Around Vietnam by Train: Reunification Express Guide",
    "Vietnam Travel SIM Card vs eSIM: Which Is Better in 2026?",
    "Vietnam Scams to Watch Out For (And How to Avoid Them)",
    "Vietnam Travel Insurance: What You Actually Need",
    "Money in Vietnam: ATMs, Exchange Rates & Tipping Guide",
    "Vietnam Health and Vaccinations: What Doctors Recommend",
    "Airport to City: Best Transfer Options for Hanoi, HCMC & Da Nang",
  ],
  budget: [
    "Vietnam on $25 Per Day: A Realistic Budget Travel Guide",
    "Free Things to Do in Hanoi (No Entry Fee Needed)",
    "Cheapest Way to Travel Between Vietnamese Cities",
    "Budget Hostels vs Guesthouses in Vietnam: Honest Comparison",
    "How to Eat Like a Local in Vietnam for Under $5 a Day",
    "Free Things to Do in Ho Chi Minh City",
    "Vietnam Budget vs Comfort Travel: What's Worth Splurging On",
  ],
  seasonal: [
    "Tet Festival Guide 2026: Vietnam's Lunar New Year Celebration",
    "Best Vietnamese Destinations to Visit During Rainy Season",
    "Vietnam in December: The Best Month to Visit?",
    "Mid-Autumn Festival in Vietnam: Lanterns and Mooncakes",
    "Vietnam Dry Season vs Wet Season: Month by Month Guide",
    "Christmas and New Year in Vietnam: Where to Celebrate",
    "Vietnam's Typhoon Season: What Travelers Need to Know",
  ],
  islands: [
    "Phu Quoc vs Con Dao: Which Island Is Right for You?",
    "Island Hopping Guide: Vietnam's Best Islands in 2 Weeks",
    "Phu Quoc Complete Guide: Beaches, Food & Nightlife",
    "Con Dao Islands: Vietnam's Untouched Paradise",
    "Cat Ba Island: Ha Long Bay's Best-Kept Secret",
    "Ly Son Island: Vietnam's Off-the-Beaten-Path Garlic Island",
    "Best Islands for Families in Vietnam: Kid-Friendly Guide",
    "Nam Du Archipelago: The Islands That Feel Like Vietnam Used To",
  ],
};

const TRANSLATION_LOCALES = ["nl"] as const;
export type TranslationLocale = (typeof TRANSLATION_LOCALES)[number];

// -------------------------------------------------------------------
// Topic queue
// -------------------------------------------------------------------

async function getExistingSlugsFromGitHub(): Promise<Set<string>> {
  const slugs = new Set<string>();
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) throw new Error("No GITHUB_TOKEN");

    const res = await fetch(
      "https://api.github.com/repos/MarvinNL046/go2vietnam/contents/content/blog/en",
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
        signal: AbortSignal.timeout(8000),
      }
    );
    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);

    const files = (await res.json()) as Array<{ name: string }>;
    for (const f of files) {
      if (f.name.endsWith(".md")) {
        slugs.add(f.name.replace(".md", ""));
      }
    }
    console.log(`[content-generator] Found ${slugs.size} existing slugs from GitHub`);
  } catch (err) {
    console.warn("[content-generator] GitHub slug check failed, falling back to filesystem:", err);
    const enDir = path.join(process.cwd(), "content", "blog", "en");
    if (fs.existsSync(enDir)) {
      for (const f of fs.readdirSync(enDir)) {
        if (f.endsWith(".md")) slugs.add(f.replace(".md", ""));
      }
    }
  }
  return slugs;
}

async function getNextQueuedTopic(): Promise<(QueuedTopic & { category: PostCategory }) | null> {
  try {
    const queuePath = path.join(process.cwd(), "content", "topic-queue.json");
    if (!fs.existsSync(queuePath)) return null;

    const queue = JSON.parse(fs.readFileSync(queuePath, "utf-8")) as { topics: QueuedTopic[] };
    const existingSlugs = await getExistingSlugsFromGitHub();

    const sorted = [...queue.topics].sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return b.searchVolume - a.searchVolume;
    });

    const STOP_WORDS = new Set(["in", "the", "a", "an", "of", "for", "to", "and", "or", "is", "vs", "at", "on", "per", "your", "you", "best", "top", "guide", "complete", "ultimate", "2026", "2025"]);
    const existingSlugList = [...existingSlugs];

    for (const item of sorted) {
      const keywordWords = item.targetKeyword
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => !STOP_WORDS.has(w) && w.length > 1);

      const topicWords = item.topic
        .toLowerCase()
        .split(/[\s:—\-,]+/)
        .filter((w) => !STOP_WORDS.has(w) && w.length > 2);

      const alreadyPublished = existingSlugList.some((slug) => {
        const allKeywordsMatch = keywordWords.length > 0 && keywordWords.every((word) => slug.includes(word));
        const topicMatchCount = topicWords.filter((word) => slug.includes(word)).length;
        const topicMatchRatio = topicWords.length > 0 ? topicMatchCount / topicWords.length : 0;
        return allKeywordsMatch || (topicMatchCount >= 3 && topicMatchRatio >= 0.5);
      });

      if (!alreadyPublished) {
        console.log(`[content-generator] Queue: "${item.topic}" not yet published (keywords: ${keywordWords.join(",")})`);
        return item;
      } else {
        console.log(`[content-generator] Queue: "${item.topic}" already published (keywords: ${keywordWords.join(",")})`);
      }
    }

    return null;
  } catch (err) {
    console.warn("[content-generator] Failed to read topic queue:", err);
    return null;
  }
}

// -------------------------------------------------------------------
// Topic selection
// -------------------------------------------------------------------

export async function selectTopic(
  existingTitles: string[] = [],
  preferredCategory?: PostCategory
): Promise<{ topic: string; category: PostCategory; scrapeUrls?: string[] }> {
  const queued = await getNextQueuedTopic();
  if (queued) {
    console.log(`[content-generator] Using queued topic: "${queued.topic}" (priority ${queued.priority}, volume: ${queued.searchVolume})`);
    return { topic: queued.topic, category: queued.category, scrapeUrls: queued.scrapeUrls };
  }

  const category = preferredCategory || randomFrom(Object.keys(TOPIC_BANK) as PostCategory[]);

  const candidates = TOPIC_BANK[category].filter(
    (t) => !existingTitles.some((existing) => existing.toLowerCase() === t.toLowerCase())
  );

  if (candidates.length === 0) {
    const otherCategory = randomFrom(
      (Object.keys(TOPIC_BANK) as PostCategory[]).filter((c) => c !== category)
    );
    const otherCandidates = TOPIC_BANK[otherCategory].filter(
      (t) => !existingTitles.some((existing) => existing.toLowerCase() === t.toLowerCase())
    );
    const topic = randomFrom(otherCandidates.length > 0 ? otherCandidates : TOPIC_BANK[otherCategory]);
    return { topic, category: otherCategory };
  }

  return { topic: randomFrom(candidates), category };
}

// -------------------------------------------------------------------
// Main blog post generation
// -------------------------------------------------------------------

export async function generateBlogPost(
  options: BlogPostOptions = {}
): Promise<GeneratedPost> {
  const model = options.model || "claude-haiku";
  const doScrape = options.scrapeContext !== false;
  const doImage = options.generateImage !== false;

  let topic = options.topic;
  let category = options.category;
  let scrapeUrls = options.scrapeUrls;

  if (!topic) {
    const selected = await selectTopic([], category);
    topic = selected.topic;
    category = selected.category;
    if (selected.scrapeUrls) scrapeUrls = selected.scrapeUrls;
  } else if (!category) {
    category = detectCategory(topic);
  }

  console.log(`[content-generator] Topic: "${topic}" | Category: ${category}`);

  let scrapeData: string | null = null;
  if (doScrape) {
    try {
      scrapeData = await scrapeTopicContext(topic, scrapeUrls);
      console.log(`[content-generator] Scraped ${scrapeData.length} chars of context`);
    } catch (err) {
      console.warn("[content-generator] Context scrape failed:", err);
    }
  }

  const sitemapLinks = await loadSitemapLinks();

  const prompt = buildPrompt(topic, category!, sitemapLinks, scrapeData);
  const rawResponse = await generateContent(prompt, {
    model,
    maxTokens: 16384,
    temperature: 0.5,
  });

  const post = parseGeneratedPost(rawResponse, topic, category!);

  if (scrapeData) {
    post.scrapeData = scrapeData;
  }

  if (doImage) {
    try {
      const imageResult = await generateBlogImage(post.title, post.category, post.slug);
      post.image = imageResult.publicPath;
      post.imageBase64 = imageResult.base64;
      console.log(`[content-generator] Image generated: ${imageResult.publicPath}`);
    } catch (err) {
      console.warn("[content-generator] Image generation failed:", err);
      post.image = `/images/blog/${post.slug}.webp`;
    }
  }

  return post;
}

// -------------------------------------------------------------------
// Translation
// -------------------------------------------------------------------

export async function translatePost(
  post: GeneratedPost,
  targetLocale: TranslationLocale,
  model: AiModel = "claude-haiku"
): Promise<TranslatedPost> {
  const localeNames: Record<TranslationLocale, string> = {
    nl: "Dutch",
  };

  const localeName = localeNames[targetLocale];

  const prompt = `You are a professional travel content translator specializing in Vietnamese tourism content.

Translate the following blog post from English to ${localeName}.

STRICT RULES:
1. Translate ALL body text naturally and idiomatically — do NOT be literal
2. Translate: title, description, tags (in the YAML frontmatter), and all Markdown body content
3. Keep UNCHANGED: slug, date, author, category, image path, all URLs (both internal go2-vietnam.com links and external affiliate links), lastUpdated, sources (names and URLs)
4. Preserve ALL Markdown formatting: headers, bold, italic, tables, blockquotes, code blocks, links
5. Keep affiliate link text in ${localeName} but keep the URL exactly as-is
6. Do NOT add or remove any content — translate only, do not summarize
7. Respond ONLY with the complete translated Markdown — no explanation, no preamble

DUTCH TRANSLATION QUALITY:
- Write natural, native-level Dutch — NOT literal translations from English
- Use informal "je/jouw" tone (not formal "u")
- Common travel terms: strand, duiken, snorkelen, nachtleven, backpacken, budgetreiziger

BLOG POST TO TRANSLATE:
${post.content}`;

  const translatedContent = await generateContent(prompt, {
    model,
    maxTokens: 16384,
    temperature: 0.3,
  });

  return {
    locale: targetLocale,
    content: translatedContent.trim(),
  };
}

// -------------------------------------------------------------------
// Sitemap internal link loader
// -------------------------------------------------------------------

async function loadSitemapLinks(): Promise<string> {
  const siteUrl = "https://go2-vietnam.com";

  try {
    const localSitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    let xml: string;

    if (fs.existsSync(localSitemapPath)) {
      xml = fs.readFileSync(localSitemapPath, "utf-8");
    } else {
      const response = await fetch(`${siteUrl}/sitemap.xml`, {
        signal: AbortSignal.timeout(10000),
      });
      if (!response.ok) return FALLBACK_INTERNAL_LINKS;
      xml = await response.text();
    }

    const urlMatches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
    const allUrls = urlMatches
      .map((m) => m.replace(/<\/?loc>/g, ""))
      .filter((url) => url.startsWith(siteUrl))
      .filter((url) => {
        const p = url.replace(siteUrl, "");
        return !p.match(/^\/(nl|en)\//);
      });

    const groups: Record<string, string[]> = {};
    for (const url of allUrls) {
      const p = url.replace(siteUrl, "");
      if (!p || p === "/") continue;
      const section = p.split("/")[1] || "other";
      if (!groups[section]) groups[section] = [];
      if (groups[section].length < 12) {
        groups[section].push(url);
      }
    }

    let result = "";
    for (const [section, urls] of Object.entries(groups)) {
      if (urls.length === 0) continue;
      result += `${section}:\n`;
      for (const url of urls) {
        const parts = url.split("/").filter(Boolean);
        const lastPart = parts[parts.length - 1] || section;
        const anchor = lastPart.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        result += `- [${anchor}](${url})\n`;
      }
      result += "\n";
    }
    return result || FALLBACK_INTERNAL_LINKS;
  } catch {
    return FALLBACK_INTERNAL_LINKS;
  }
}

const FALLBACK_INTERNAL_LINKS = `
city:
- [Hanoi](https://go2-vietnam.com/city/hanoi/)
- [Ho Chi Minh City](https://go2-vietnam.com/city/ho-chi-minh-city/)
- [Da Nang](https://go2-vietnam.com/city/da-nang/)
- [Hoi An](https://go2-vietnam.com/city/hoi-an/)
- [Hue](https://go2-vietnam.com/city/hue/)
- [Nha Trang](https://go2-vietnam.com/city/nha-trang/)
- [Da Lat](https://go2-vietnam.com/city/da-lat/)
- [Sa Pa](https://go2-vietnam.com/city/sa-pa/)

islands:
- [Islands Overview](https://go2-vietnam.com/islands/)
- [Phu Quoc](https://go2-vietnam.com/islands/phu-quoc/)
- [Con Dao](https://go2-vietnam.com/islands/con-dao/)
- [Cat Ba](https://go2-vietnam.com/islands/cat-ba/)

food:
- [Vietnamese Food Guide](https://go2-vietnam.com/food/)
- [Pho](https://go2-vietnam.com/food/pho/)
- [Banh Mi](https://go2-vietnam.com/food/banh-mi/)
- [Bun Cha](https://go2-vietnam.com/food/bun-cha/)
- [Cao Lau](https://go2-vietnam.com/food/cao-lau/)
- [Com Tam](https://go2-vietnam.com/food/com-tam/)
- [Banh Xeo](https://go2-vietnam.com/food/banh-xeo/)
- [Spring Rolls](https://go2-vietnam.com/food/spring-rolls/)

drinks:
- [Vietnamese Drinks](https://go2-vietnam.com/drinks/)
- [Vietnamese Coffee](https://go2-vietnam.com/drinks/vietnamese-coffee/)
- [Bia Hoi](https://go2-vietnam.com/drinks/bia-hoi/)

practical-info:
- [Practical Info](https://go2-vietnam.com/practical-info/)
- [Vietnam Weather](https://go2-vietnam.com/weather/)

region:
- [Regions Overview](https://go2-vietnam.com/region/)

blog:
- [Blog](https://go2-vietnam.com/blog/)
`;

// -------------------------------------------------------------------
// Prompt builder
// -------------------------------------------------------------------

function buildPrompt(
  topic: string,
  category: PostCategory,
  sitemapLinks: string,
  scrapeData: string | null
): string {
  const siteUrl = "https://go2-vietnam.com";
  const today = new Date().toISOString().split("T")[0];
  const year = new Date().getFullYear();

  let widgetReference: string = '';
  try {
    const refPath = path.join(process.cwd(), 'content', 'writer-reference.md');
    if (fs.existsSync(refPath)) {
      widgetReference = fs.readFileSync(refPath, 'utf-8');
    }
    const affRefPath = path.join(process.cwd(), 'content', 'affiliate-reference.txt');
    if (fs.existsSync(affRefPath)) {
      widgetReference += '\n\n---\nFULL AFFILIATE & WIDGET REFERENCE:\n' + fs.readFileSync(affRefPath, 'utf-8');
    }
  } catch { /* ignore */ }

  const categoryInstructions: Record<PostCategory, string> = {
    "city-guide":
      "Write an in-depth city/destination guide. Cover neighborhoods, top sights, where to eat, where to stay, and practical tips. Structure chronologically or by area. Include a 1-day and 3-day itinerary suggestion.",
    food: "Write a comprehensive Vietnamese food guide. Explain the dish/cuisine with cultural context, regional variations, where to find the best versions, and how to order like a local. Include a comparison table of similar dishes.",
    activities:
      "Write a detailed activities/experiences guide. Compare options (operators, prices, locations), give honest pros/cons, and include a practical booking guide at the end.",
    practical:
      "Write a thorough practical travel guide. Cover all scenarios, give exact prices and steps, and anticipate common questions. Accuracy is critical — cite official sources where possible.",
    budget:
      "Write a realistic budget travel guide with exact costs in Vietnamese Dong (VND) and USD. Include sample day budgets, money-saving tips, and where to splurge vs. save.",
    seasonal:
      "Write a seasonal/festival travel guide. Cover what happens, when, where the best locations are, and how to plan. Include practical tips for crowds and booking.",
    islands:
      "Write a comprehensive island guide or comparison. Cover beaches, activities, accommodation options, how to get there, and who each island suits best.",
  };

  const contextSection: string = scrapeData
    ? `\nREFERENCE DATA — THIS IS YOUR PRIMARY SOURCE OF TRUTH:
Use ONLY the facts, prices, statistics, and details from the data below. If a fact is NOT in this reference data, do NOT include it — leave it out rather than guess.
Every price, statistic, and specific claim MUST come from this data or a cited external source. When in doubt, say "prices vary" rather than inventing a number.

${scrapeData.slice(0, 6000)}\n`
    : "";

  return `You are a senior Vietnam travel writer for go2-vietnam.com, a comprehensive Vietnam travel resource.
You and your team have lived in and traveled Vietnam extensively — Hanoi for 2 years, explored the central coast, motorbike'd the north, and navigated Ho Chi Minh City as locals. You write from genuine first-hand experience.

Write a comprehensive, SEO-optimized blog post about: "${topic}"

${categoryInstructions[category]}

---

CONTENT REQUIREMENTS:

1. FRONTMATTER (YAML):
Generate valid YAML frontmatter with these exact fields:
\`\`\`yaml
---
title: "The Full Post Title"
slug: "url-friendly-slug"
date: "${today}"
author:
  name: "Go2Vietnam Team"
category: "${category}"
tags: ["tag1", "tag2", "tag3", "tag4"]
image: "/images/blog/SLUG.webp"
description: "Compelling meta description under 155 characters"
featured: false
readingTime: 8
lastUpdated: "${today}"
sources:
  - name: "Vietnam National Administration of Tourism"
    url: "https://vietnamtourism.gov.vn/en"
  - name: "Lonely Planet Vietnam"
    url: "https://www.lonelyplanet.com/vietnam"
  - name: "VnExpress International"
    url: "https://e.vnexpress.net/"
---
\`\`\`
Replace SLUG in the image path with the actual slug value.
Add 2-3 more relevant sources. Include 4-6 specific, relevant tags.

2. OPENING PARAGRAPH:
Hook the reader immediately. Start with a compelling fact, scene-setting description, or provocative question. **Bold the primary keyword** on first mention. 2-3 sentences max before the Key Takeaways table.

3. KEY TAKEAWAYS TABLE (immediately after intro):
\`\`\`markdown
## Key Takeaways

| Question | Answer |
|----------|--------|
| **What is the best time to visit?** | Answer with **bold keyword** |
| **How much does it cost?** | Average costs in VND and USD |
| **How do I get there?** | Best transport option |
| **Is it safe?** | Honest safety assessment |
| **What should I book in advance?** | Specific recommendations |
\`\`\`
5-7 rows covering the key questions readers have.

4. BODY SECTIONS (8-10 numbered H2 sections):
Each section must have:
- Numbered H2: ## 1. Section Title
- 2 opening paragraphs with **bold keywords** on first mention
- 2 H3 subheadings (### Subheading) with 1-2 paragraphs each
- At least half the sections: a bullet list with 3-5 items. Start each item with a bold descriptive label like: **Best Spot:** or **Pro Tip:** or **Budget Option:** (use a REAL descriptive label, NEVER write the literal words "Bold Label")
- First-person experience signals ("When we visited...", "In our experience...", "During our time in...")

5. DID YOU KNOW CALLOUTS (2-3 throughout the article):
\`\`\`markdown
> **Did You Know?** The actual interesting fact with a specific statistic here.
>
> *Source: [Source Name](https://source-url.com)*
\`\`\`

6. COMPARISON TABLE (at least one):
\`\`\`markdown
| Option | Best For | Cost | Rating |
|--------|----------|------|--------|
| **Option A** | Description | VND X | ⭐⭐⭐⭐⭐ |
| **Option B** | Description | VND X | ⭐⭐⭐⭐ |
\`\`\`

7. WIDGET PLACEMENT (MANDATORY — place 3-5 widgets throughout the article):
Place these HTML comment placeholders in your output where you want a styled widget box to appear.
They will be automatically replaced with beautiful styled components.

CRITICAL FORMAT RULE: ALWAYS use EXACTLY the HTML comment syntax shown below.
NEVER write WIDGET as plain text, a list item, or markdown. NEVER write "- WIDGET:booking" or "WIDGET:booking" on its own.
The ONLY correct format is:

<!-- WIDGET:booking -->

Place the widget on its own line, with a blank line above and below it. Example of correct placement:

...end of a paragraph about hotels in Da Nang.

<!-- WIDGET:booking -->

## 3. Next Section Title

Available widgets (copy EXACTLY as shown, including the comment syntax):
- <!-- WIDGET:booking --> — after mentioning hotels, accommodation, where to stay
- <!-- WIDGET:klook --> — after mentioning tours, activities, cooking classes, day trips
- <!-- WIDGET:getyourguide --> — after mentioning guided tours, food tours, walking tours
- <!-- WIDGET:12go --> — after mentioning buses, trains, ferries, transport between cities
- <!-- WIDGET:saily --> — after mentioning SIM cards, eSIM, internet, staying connected
- <!-- WIDGET:trip --> — after mentioning flights, airports, flying
- <!-- WIDGET:tip:Your practical tip text here --> — for non-commercial travel advice

RULES:
- Place widgets AFTER a relevant paragraph, before the next section
- Never place two widgets back-to-back — always have text between them
- Minimum: 1x booking + 1x activity (klook or getyourguide) + 1 other
- Maximum: 5 widgets total
- The tip widget text should be a short, practical piece of advice (1-2 sentences max)
- ALWAYS use HTML comment syntax <!-- WIDGET:type --> — NEVER write WIDGET as plain text, list item, or markdown

8. FAQ SECTION (end of article):
\`\`\`markdown
## Frequently Asked Questions

### Question one here?
Answer here.

### Question two here?
Answer here.
\`\`\`
3-5 questions matching common Google search queries.

9. CONCLUSION:
Summarize key points, include a clear CTA linking to a relevant go2-vietnam.com page, and a trust statement.

---

INTERNAL LINKING (critical for SEO — MANDATORY: include 5-8 internal links naturally woven throughout the body):
- Spread links across the article — do NOT put all links in the conclusion
- Use natural anchor text (e.g., "Hanoi" not "click here")
- EVERY internal link MUST have a full URL. NEVER write [Link Text] without (https://go2-vietnam.com/...). If you're unsure of the URL, use the closest match from the sitemap above or omit the link entirely.
- Link city mentions to city guide pages: e.g., [Hanoi](https://go2-vietnam.com/city/hanoi/)
- Link food mentions to food pages: e.g., [Vietnamese street food guide](https://go2-vietnam.com/food/)
- Link island mentions to island pages: e.g., [Phu Quoc](https://go2-vietnam.com/islands/phu-quoc/)
- Link practical mentions to practical info: [Getting around Vietnam](https://go2-vietnam.com/practical-info/)
- Pick additional RELEVANT links from the sitemap below

Available internal links (use the most relevant ones):
${sitemapLinks}
${widgetReference ? `\nWRITER REFERENCE (additional context):\n${widgetReference}\n` : ''}
---

E-E-A-T SIGNALS (critical for Google trust):
- EXPERIENCE: Reference hands-on visits ("When we explored...", "Our team spent a week...")
- EXPERTISE: Use precise, accurate details — prices in VND, distances in km, specific venue names
- AUTHORITATIVENESS: Cite credible sources (VNAT, Lonely Planet, VnExpress) in Did You Know callouts
- TRUSTWORTHINESS: Be honest about negatives and tourist traps. Say "avoid" when necessary.
- Every statistic MUST have a source cited.

EXTERNAL LINKING:
Include 3-5 credible external links (VNAT, Lonely Planet, VnExpress, official venue websites).

---

ANTI-HALLUCINATION RULES (CRITICAL — FOLLOW EXACTLY):
1. NEVER invent prices, statistics, percentages, or specific numbers. Use ONLY data from the REFERENCE DATA section below or well-known public facts.
2. If you don't have a specific price from the reference data, write "prices vary" or "check the latest prices" with a link. Do NOT guess.
3. NEVER fabricate quotes, testimonials, or specific venue details you're unsure about.
4. Specific venue names, addresses, and operating hours MUST come from the reference data. If unsure, describe the area/neighborhood instead of naming a specific place.
5. For historical facts and cultural context, use only widely known, verifiable information.
6. If the reference data contradicts common assumptions, ALWAYS prefer the reference data.
7. Every "Did You Know" callout MUST have a real, verifiable source link — not a made-up one.
8. Be honest: "Based on our research..." is better than fabricating a firsthand experience you don't have data for.
9. NEVER output meta-instructions, content strategy notes, or behind-the-scenes commentary. Your output must be ONLY the blog post that a reader would see.
10. NEVER mention "Booking.com", "Klook", "GetYourGuide", "12Go Asia", "Saily", or "Trip.com" by brand name. Just describe the travel action naturally — the brand names and links are added automatically after your writing.

---

TARGET LENGTH: 1800-2500 words of body content (excluding frontmatter).
TONE: Knowledgeable, warm, practical — like advice from a well-traveled friend who knows Vietnam deeply.
${contextSection}

RESPOND WITH THE COMPLETE BLOG POST — frontmatter + Markdown body only. No preamble, no explanation.`;
}

// -------------------------------------------------------------------
// Response parser
// -------------------------------------------------------------------

function parseGeneratedPost(
  rawResponse: string,
  topic: string,
  category: PostCategory
): GeneratedPost {
  const today = new Date().toISOString().split("T")[0];

  let content = rawResponse.trim();

  content = content.replace(/^```yaml\s*\n?/, "");
  content = content.replace(/^```(?:markdown|md)?\s*\n?/, "");
  content = content.replace(/^yaml\s*\n/, "");
  content = content.replace(/\n?\s*```\s*$/, "");
  content = content.replace(/^(---\s*\n[\s\S]*?\n---)\s*\n```\s*\n/, "$1\n");
  content = content.replace(/```(?:markdown|md|)?\s*\n((?:[^\n]*\|[^\n]*\n)+)```/g, "$1");

  const instructionPatterns = [
    /^#+\s*Affiliate Integration Points.*$/gim,
    /^#+\s*Internal [Ll]inking.*$/gim,
    /\((?:in-text reference|link[s]? injected|links? will be injected|naturally woven)[^)]*\)/gi,
    /\([^)]*will be injected[^)]*\)/gi,
    /\([^)]*injected on publish[^)]*\)/gi,
    /^[-*]\s*(?:Hotel\/accommodation|Tour\/activity|Transport tips|eSIM\/SIM|City:|Food:|Hotels:|Attractions:|Weather:|Islands:)\s*:.*(?:injected|woven|links?).*$/gim,
    /^[-*]\s*(?:City|Food|Hotels|Attractions|Weather|Islands):\s*.+$/gim,
    /^Internal linking woven through the article:?\s*$/gim,
    /^Examples? in context:?\s*$/gim,
    /^#+\s*Opening paragraph\s*$/gim,
    /^Opening paragraph\s*$/gim,
    /^#+?\s*External links?:?\s*$/gim,
    /^Note:\s+Prices and opening hours.*$/gim,
    /^#+?\s*External links?\s*(?:for further reading)?\s*$/gim,
    /^[-*]?\s*Internal links?(?:\s+to\b|\s*:).*$/gim,
    /^Bold the primary keyword.*$/gim,
    /^Respond with the complete.*$/gim,
    /^Practical Info:\s*https?:\/\/.*$/gim,
    /^(?:Pho|Banh Mi|Bun Cha|Cao Lau|Com Tam).*https?:\/\/go2-vietnam\.com.*$/gim,
  ];

  for (const pattern of instructionPatterns) {
    content = content.replace(pattern, '');
  }

  content = content.replace(/\*?\*?Bold Label:\s*/g, '**');
  content = content.replace(/^([-*]\s*)Bold Label:\s*(.+?):\s*/gm, '$1**$2:** ');
  content = content.replace(/^(---[\s\S]*?---)\s*\n+```(?:markdown|md)?\s*\n/m, '$1\n\n');
  content = content.replace(/\n{4,}/g, '\n\n\n');

  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

  let title = topic;
  let slug = slugify(topic);
  let description = "";
  let postCategory: PostCategory = category;
  let tags: string[] = [];
  let image = `/images/blog/${slug}.webp`;
  let readingTime = 8;
  let sources: Array<{ name: string; url: string }> = [];

  if (fmMatch) {
    const fm = fmMatch[1];

    const titleMatch = fm.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    const slugMatch = fm.match(/^slug:\s*["']?(.+?)["']?\s*$/m);
    const descMatch = fm.match(/^description:\s*["']?(.+?)["']?\s*$/m);
    const catMatch = fm.match(/^category:\s*["']?(.+?)["']?\s*$/m);
    const imageMatch = fm.match(/^image:\s*["']?(.+?)["']?\s*$/m);
    const rtMatch = fm.match(/^readingTime:\s*(\d+)/m);

    if (titleMatch) title = titleMatch[1].trim();
    if (slugMatch) slug = slugMatch[1].trim();
    if (descMatch) description = descMatch[1].trim().slice(0, 155);
    if (catMatch) postCategory = (catMatch[1].trim() as PostCategory) || category;
    if (imageMatch) image = imageMatch[1].trim();
    if (rtMatch) readingTime = parseInt(rtMatch[1], 10);

    const tagsMatch = fm.match(/^tags:\s*\[([^\]]+)\]/m);
    if (tagsMatch) {
      tags = tagsMatch[1].split(",").map((t) => t.trim().replace(/^["']|["']$/g, ""));
    }

    const sourceMatches = [...fm.matchAll(/- name:\s*["']?(.+?)["']?\s*\n\s*url:\s*["']?(.+?)["']?\s*$/gm)];
    sources = sourceMatches.map((m) => ({ name: m[1].trim(), url: m[2].trim() }));
  }

  if (!image || image === "/images/blog/SLUG.webp") {
    image = `/images/blog/${slug}.webp`;
  } else {
    image = image.replace("/SLUG.webp", `/${slug}.webp`);
  }

  return {
    title,
    slug,
    date: today,
    author: { name: "Go2Vietnam Team" },
    category: postCategory,
    tags,
    image,
    description,
    featured: false,
    readingTime,
    lastUpdated: today,
    sources,
    content,
  };
}

// -------------------------------------------------------------------
// Utilities
// -------------------------------------------------------------------

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function detectCategory(topic: string): PostCategory {
  const lower = topic.toLowerCase();
  if (lower.includes("island") || lower.includes("phu quoc") || lower.includes("con dao") || lower.includes("cat ba") || lower.includes("beach")) return "islands";
  if (lower.includes("food") || lower.includes("eat") || lower.includes("restaurant") || lower.includes("street food") || lower.includes("pho") || lower.includes("banh mi")) return "food";
  if (lower.includes("visa") || lower.includes("money") || lower.includes("scam") || lower.includes("sim") || lower.includes("esim") || lower.includes("insurance") || lower.includes("transport")) return "practical";
  if (lower.includes("budget") || lower.includes("cheap") || lower.includes("free") || lower.includes("$")) return "budget";
  if (lower.includes("festival") || lower.includes("tet") || lower.includes("season") || lower.includes("rainy") || lower.includes("month") || lower.includes("typhoon")) return "seasonal";
  if (lower.includes("snorkeling") || lower.includes("diving") || lower.includes("motorbike") || lower.includes("ha giang") || lower.includes("trekking") || lower.includes("cooking class") || lower.includes("cave") || lower.includes("kayak")) return "activities";
  return "city-guide";
}
