import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog/' },
    ],
  },
  {
    title: 'Travel Guides',
    links: [
      { name: 'Cities', href: '/city/' },
      { name: 'Islands', href: '/islands/' },
      { name: 'Regions', href: '/region/' },
    ],
  },
  {
    title: 'Food & Drinks',
    links: [
      { name: 'Food Guide', href: '/food/' },
      { name: 'Drinks Guide', href: '/drinks/' },
    ],
  },
  {
    title: 'Practical Information',
    links: [
      { name: 'Transport', href: '/transport/' },
      { name: 'Visa Information', href: '/visa/' },
      { name: 'Weather', href: '/weather/' },
      { name: 'Practical Info', href: '/practical-info/' },
      { name: 'eSIM', href: '/esim/' },
      { name: 'Travel Insurance', href: '/travel-insurance/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
      { name: 'Editorial Policy', href: '/editorial-policy' },
    ],
  },
];

export default function SitemapPage() {
  const { t, locale } = useTranslation('common');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Sitemap - ${siteConfig.name}`,
    url: `${siteConfig.seo.siteUrl}/sitemap`,
    description: `Complete sitemap for ${siteConfig.name}. Find all pages and sections of our ${siteConfig.destination} travel guide.`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={`Sitemap - ${siteConfig.name}`}
        description={`Browse all pages on ${siteConfig.name}. Find guides about cities, food, transport, visa, and more for ${siteConfig.destination}.`}
        path="/sitemap"
        jsonLd={jsonLd}
      >
        <meta name="robots" content="noindex, follow" />
      </SEOHead>

      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-8">Sitemap</h1>

        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sitemapSections.map((section) => (
              <div key={section.title} className="bg-warm-50 rounded-xl p-6">
                <h2 className="text-lg font-bold text-warm-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-brand-primary hover:text-brand-primary-600 hover:underline transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
