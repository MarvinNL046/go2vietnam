# Go2Vietnam - Design Spec (2026 Redesign)

## Design Tokens

### Typography
| Token | Font | Weights | Usage |
|-------|------|---------|-------|
| `font-display` | Plus Jakarta Sans | 500, 600, 700, 800 | Headings, display text |
| `font-sans` | Inter | 300, 400, 500, 600, 700 | Body text, UI elements |

### Typography Scale
| Class | Size | Usage |
|-------|------|-------|
| `text-display-xl` | 4.5rem | Hero headings (desktop) |
| `text-display-lg` | 3.75rem | Hero headings (mobile) |
| `text-display-md` | 3rem | Section headings |
| `text-display-sm` | 2.25rem | Page titles |

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | #DA251D (Vietnamese Red) | CTAs, active states, links |
| `brand-secondary` | #1A3C34 (Dark Green) | Text, dark backgrounds, footer |
| `brand-accent` | #FFD700 (Golden Yellow) | Highlights, badges, special CTAs |
| `warm-50` to `warm-900` | Warm neutral palette | Backgrounds, text, borders |

### Shadows
| Token | Usage |
|-------|-------|
| `shadow-soft` | Cards resting state |
| `shadow-soft-lg` | Cards hover state |
| `shadow-soft-xl` | Dropdowns, modals |
| `shadow-glow-primary` | Primary CTA emphasis |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `rounded-xl` | 0.75rem | Buttons, badges |
| `rounded-2xl` | 1rem | Cards, images |
| `rounded-3xl` | 1.5rem | Large containers |
| `rounded-full` | 9999px | Badges, pills |

### Animations
| Class | Duration | Usage |
|-------|----------|-------|
| `animate-fade-in` | 0.6s | General fade in |
| `animate-fade-in-up` | 0.6s | Content reveal |
| `animate-fade-in-down` | 0.4s | Dropdown menus |
| `animate-scale-in` | 0.3s | Modal/popup entry |
| `.animate-stagger` | 100ms intervals | Stagger children on grids |

---

## Component List

### Layout Components
| Component | File | Description |
|-----------|------|-------------|
| Header | `components/Header.tsx` | Sticky glassmorphism nav, scroll-aware shadow, full-screen mobile overlay |
| Footer | `components/Footer.tsx` | Dark green gradient, golden accent headers, sister site badges |

### Card Components
| Component | File | Description |
|-----------|------|-------------|
| CityCard | `components/CityCard.tsx` | Rounded-2xl card with gradient image overlay, arrow CTA link |
| FoodCard | `components/FoodCard.tsx` | Rounded-2xl card with accent category badge, spice indicator |
| IslandCard | `components/IslandCard.tsx` | Rounded-2xl card with secondary-colored tags, arrow CTA |

### Utility Components
| Component | File | Description |
|-----------|------|-------------|
| SEOHead | `components/SEOHead.tsx` | Meta tags, OG, Twitter cards |
| Breadcrumbs | `components/Breadcrumbs.tsx` | Compact breadcrumb nav with Schema.org LD+JSON |
| GallerySlider | `components/GallerySlider.tsx` | Image carousel with glass-morphism controls |
| CookieConsent | `components/CookieConsent.tsx` | Floating card (not full-width bar), fade-in-up entry |
| LanguageSwitcher | `components/LanguageSwitcher.tsx` | Language selector dropdown |

### Composite Classes (globals.css)
| Class | Description |
|-------|-------------|
| `.btn-primary` | Red primary button with shadow and ring focus |
| `.btn-secondary` | Outlined button with fill-on-hover |
| `.btn-ghost` | Transparent text button |
| `.card` | White rounded-2xl with soft shadow and hover lift |
| `.card-flat` | White rounded-2xl with border only |
| `.badge-primary` | Red tinted badge |
| `.badge-accent` | Gold tinted badge |
| `.badge-secondary` | Green tinted badge |
| `.glass` | White glassmorphism effect |
| `.glass-dark` | Dark glassmorphism effect |
| `.gradient-text` | Red-to-gold gradient text |
| `.prose-custom` | Styled prose with warm colors and display headings |
| `.section-padding` | Standard section vertical padding |
| `.section-header` | Centered section header block |
| `.section-title` | Display font section heading |
| `.section-subtitle` | Muted subtitle text |

---

## Updated Routes Checklist

| Route | File | Status |
|-------|------|--------|
| `/` (Homepage) | `pages/index.tsx` | Updated |
| `/city/` (Cities index) | `pages/city/index.tsx` | Updated |
| `/city/[slug]/` (City detail) | `pages/city/[slug].tsx` | Updated |
| `/food/` (Food index) | `pages/food/index.tsx` | Updated |
| `/blog/` (Blog index) | `pages/blog/index.tsx` | Updated |
| `/privacy/` (Privacy policy) | `pages/privacy.tsx` | Updated |
| `/terms/` (Terms of service) | `pages/terms.tsx` | Updated |
| `/404` (Not found) | `pages/404.tsx` | Updated |

### Global files updated
| File | Changes |
|------|---------|
| `tailwind.config.js` | New design tokens: warm colors, display fonts, custom shadows, animations, spacing |
| `styles/globals.css` | New component classes, base styles, animations, stagger utility |
| `pages/_document.tsx` | Font preconnect, theme-color meta, lang attribute |
| `pages/_app.tsx` | Flex column layout for sticky footer |

### SEO preserved
- All `<SEOHead>` components and meta tags unchanged
- All `<Breadcrumbs>` with Schema.org LD+JSON structured data preserved
- All page titles and descriptions unchanged
- All internal link structure preserved
- All `getStaticProps`/`getStaticPaths` data fetching unchanged
