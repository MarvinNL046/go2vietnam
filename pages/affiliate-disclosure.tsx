import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function AffiliateDisclosurePage() {
  const { t, locale } = useTranslation('common');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Affiliate Disclosure - ${siteConfig.name}`,
    url: `${siteConfig.seo.siteUrl}/affiliate-disclosure`,
    description: `Affiliate disclosure for ${siteConfig.name}. Learn how we fund our ${siteConfig.destination} travel guides.`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={`Affiliate Disclosure - ${siteConfig.name}`}
        description={`Learn how ${siteConfig.name} earns revenue through affiliate partnerships. We are transparent about how we fund our ${siteConfig.destination} travel guides.`}
        path="/affiliate-disclosure"
        jsonLd={jsonLd}
      >
        <meta name="robots" content="noindex, follow" />
      </SEOHead>

      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-4">Affiliate Disclosure</h1>
        <p className="text-sm text-warm-400 mb-8">
          Last updated: {new Date().toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose-custom max-w-3xl">
          <h2>How We Fund This Site</h2>
          <p>
            {siteConfig.name} is an independent travel guide that provides free content to help
            travelers plan their trip to {siteConfig.destination}. To keep this site running and
            our content free, we participate in affiliate programs with trusted travel companies.
          </p>

          <h2>What Are Affiliate Links?</h2>
          <p>
            Some links on {siteConfig.domain} are affiliate links. This means that if you click
            on a link and make a purchase or booking, we may receive a small commission at no
            additional cost to you. The price you pay remains exactly the same whether you use
            our affiliate link or go directly to the provider.
          </p>

          <h2>Our Affiliate Partners</h2>
          <p>We work with the following types of affiliate partners:</p>
          <ul>
            <li><strong>Accommodation:</strong> Booking.com, Trip.com</li>
            <li><strong>Tours &amp; Activities:</strong> GetYourGuide, Klook</li>
            <li><strong>Transport:</strong> 12Go Asia</li>
            <li><strong>eSIM &amp; Connectivity:</strong> Saily, Airalo</li>
            <li><strong>Travel Insurance:</strong> Various providers</li>
          </ul>

          <h2>Our Editorial Independence</h2>
          <p>
            Affiliate partnerships never influence our editorial content. Our recommendations
            are based on research, personal experience, and what we believe will genuinely
            help our readers. We will never recommend a product or service solely because it
            offers a higher commission.
          </p>
          <p>
            If we recommend something, it is because we believe it provides real value to
            travelers visiting {siteConfig.destination}. When multiple options exist, we present
            them fairly and let you make your own choice.
          </p>

          <h2>Why We Use Affiliate Links</h2>
          <p>
            Running a comprehensive travel guide requires significant time and resources.
            Affiliate commissions help us:
          </p>
          <ul>
            <li>Keep all our content free and accessible</li>
            <li>Regularly update guides with current information</li>
            <li>Research and create new content</li>
            <li>Cover hosting and operational costs</li>
          </ul>

          <h2>Your Trust Matters</h2>
          <p>
            We value your trust and are committed to being transparent about how we earn
            revenue. If you have any questions about our affiliate relationships, please
            don&apos;t hesitate to <Link href="/contact">contact us</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
