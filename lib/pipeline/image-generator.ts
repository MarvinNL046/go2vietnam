const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_IMAGE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent";

export interface GeneratedImage {
  base64: string;
  mimeType: string;
  prompt: string;
  filePath?: string;
}

const VIETNAM_STYLE_MAP: Record<string, string> = {
  "city-guide":
    "vibrant Vietnamese cityscape, motorbikes, French colonial architecture, lanterns, street vendors, warm golden hour lighting",
  food: "colorful Vietnamese street food, pho steaming bowls, banh mi, fresh herbs, bustling market atmosphere",
  activities:
    "adventurous Vietnam activities, lush jungle, emerald waters, karst mountains, sunny day",
  practical:
    "traveler in Vietnam, motorbike, local markets, friendly locals, authentic Vietnamese details",
  budget:
    "backpacker in Vietnam, affordable guesthouses, local markets, simple but beautiful Vietnamese scenery",
  seasonal:
    "Vietnamese festival or seasonal celebration, Tet decorations, lanterns, ao dai, joyful atmosphere",
  islands:
    "pristine Vietnamese island, turquoise waters, limestone karsts, white sand beach, tropical paradise",
  temples:
    "Vietnamese Buddhist pagoda, incense smoke, ornate decorations, monks, serene atmosphere",
  default:
    "beautiful Vietnam landscape, rice terraces, karst mountains, rich culture, vibrant colors",
};

export async function generateImage(prompt: string): Promise<GeneratedImage> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const response = await fetch(`${GEMINI_IMAGE_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["IMAGE"] },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini image API error ${response.status}: ${errorBody}`);
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts) throw new Error("No content in Gemini response");

  const imagePart = parts.find(
    (p: { inline_data?: { mime_type: string; data: string }; inlineData?: { mimeType: string; data: string } }) =>
      p.inline_data || p.inlineData
  );

  if (imagePart?.inlineData) {
    return { base64: imagePart.inlineData.data, mimeType: imagePart.inlineData.mimeType || "image/png", prompt };
  }
  if (imagePart?.inline_data) {
    return { base64: imagePart.inline_data.data, mimeType: imagePart.inline_data.mime_type || "image/png", prompt };
  }

  throw new Error("No image generated in Gemini response");
}

export async function generateBlogImage(
  title: string,
  category: string,
  slug: string
): Promise<GeneratedImage & { publicPath: string }> {
  const style = VIETNAM_STYLE_MAP[category] || VIETNAM_STYLE_MAP["default"];

  const prompt = `Create a professional, photorealistic travel photography blog header image for an article titled "${title}".
Visual style: ${style}.
Composition: Wide landscape format (16:9 aspect ratio), high resolution, magazine quality.
Must be evocative of Vietnam travel — rice terraces, Ha Long Bay, motorbikes, street food, lanterns, ao dai, or tropical nature depending on context.
Lighting: Natural, golden hour, or vibrant tropical daylight.
CRITICAL RULE: The image must contain ZERO text, ZERO letters, ZERO numbers, ZERO words, ZERO labels, ZERO watermarks, ZERO captions, ZERO UI elements. No characters of any language or alphabet whatsoever. Only use photographic visual elements, scenery, people (from behind or distance), architecture, food, and nature.`;

  const image = await generateImage(prompt);
  const publicPath = `/images/blog/${slug}.webp`;

  console.log(`[image-generator] Image generated for: ${slug} (not saved to disk — will be committed via GitHub API)`);

  return { ...image, publicPath };
}

export function toDataUrl(image: GeneratedImage): string {
  return `data:${image.mimeType};base64,${image.base64}`;
}
