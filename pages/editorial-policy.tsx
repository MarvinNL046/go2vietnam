import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function EditorialPolicyPage() {
  const { t, locale } = useTranslation('common');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Editorial Policy - ${siteConfig.name}`,
    url: `${siteConfig.seo.siteUrl}/editorial-policy`,
    description: `Editorial policy for ${siteConfig.name}. Learn about our content standards and research process.`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={`Editorial Policy - ${siteConfig.name}`}
        description={`Learn about the editorial standards and research process behind ${siteConfig.name}. How we create accurate, helpful ${siteConfig.destination} travel guides.`}
        path="/editorial-policy"
        jsonLd={jsonLd}
      >
        <meta name="robots" content="noindex, follow" />
      </SEOHead>

      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-4">Editorial Policy</h1>
        <p className="text-sm text-warm-400 mb-8">
          Last updated: {new Date().toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose-custom max-w-3xl">
          <h2>Our Mission</h2>
          <p>
            {siteConfig.name} is an independent travel guide dedicated to helping travelers plan
            their trip to {siteConfig.destination}. Our goal is to provide accurate, practical,
            and up-to-date information that genuinely helps our readers.
          </p>

          <h2>Content Standards</h2>
          <p>
            Every piece of content published on {siteConfig.domain} is held to the following standards:
          </p>
          <ul>
            <li><strong>Accuracy:</strong> We verify facts using official sources, government websites, and established travel resources. When information cannot be independently verified, we clearly state this.</li>
            <li><strong>Timeliness:</strong> Travel information changes frequently. We review and update our guides regularly to reflect current conditions, prices, and regulations.</li>
            <li><strong>Usefulness:</strong> Every article aims to answer real questions travelers have. We focus on practical, actionable advice rather than generic filler content.</li>
            <li><strong>Honesty:</strong> We present information truthfully, including potential downsides or challenges travelers may face.</li>
          </ul>

          <h2>Research Process</h2>
          <p>Our content is created through a combination of:</p>
          <ul>
            <li><strong>Primary research:</strong> Firsthand travel experience in {siteConfig.destination}, including visiting locations, using transport, and trying recommended services.</li>
            <li><strong>Official sources:</strong> Government websites, embassy information, and official tourism boards for visa requirements, regulations, and safety information.</li>
            <li><strong>Local knowledge:</strong> Information gathered from local residents, business owners, and the expat community in {siteConfig.destination}.</li>
            <li><strong>Traveler feedback:</strong> Insights shared by our readers who have recently visited {siteConfig.destination}.</li>
          </ul>

          <h2>Affiliate Relationships</h2>
          <p>
            {siteConfig.name} earns revenue through affiliate partnerships with travel companies.
            This is how we fund the creation and maintenance of our free content. However, our
            affiliate relationships never influence our editorial decisions.
          </p>
          <p>
            We will never recommend a service solely because it offers a commission. Our
            recommendations are based on quality, value, and usefulness to travelers. For full
            details, see our{' '}
            <Link href="/affiliate-disclosure">
              Affiliate Disclosure
            </Link>.
          </p>

          <h2>Corrections and Updates</h2>
          <p>
            We strive for accuracy, but errors can occur. If you find incorrect or outdated
            information on our site, we encourage you to{' '}
            <Link href="/contact">
              contact us
            </Link>
            . We take corrections seriously and will update content promptly.
          </p>

          <h2>AI-Assisted Content</h2>
          <p>
            Some of our content may be created or enhanced with the assistance of AI tools.
            All AI-assisted content is reviewed and edited by our editorial team to ensure
            accuracy, quality, and alignment with our content standards.
          </p>

          <h2>User-Generated Content</h2>
          <p>
            We may feature tips or insights from travelers in our content. Any user-contributed
            information is verified before publication where possible and clearly attributed
            to its source.
          </p>
        </div>
      </div>
    </>
  );
}
