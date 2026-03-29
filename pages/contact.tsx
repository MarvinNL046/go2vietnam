import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function ContactPage() {
  const { t, locale } = useTranslation('common');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${siteConfig.name}`,
    url: `${siteConfig.seo.siteUrl}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
      email: `hello@${siteConfig.domain}`,
    },
  };

  return (
    <>
      <SEOHead
        title={`Contact Us - ${siteConfig.name}`}
        description={`Get in touch with ${siteConfig.name}. Questions about traveling to ${siteConfig.destination}? Reach out via email at hello@${siteConfig.domain}.`}
        path="/contact"
        jsonLd={jsonLd}
      >
        <meta name="robots" content="noindex, follow" />
      </SEOHead>

      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-8">Contact {siteConfig.name}</h1>

        <div className="prose-custom max-w-3xl">
          <p>
            Have a question about traveling to {siteConfig.destination}? Found an error in one of our guides?
            Want to suggest a topic we should cover? We welcome all feedback and inquiries.
          </p>

          <h2>Email Us</h2>
          <p>
            The best way to reach us is by email. We aim to respond within 48 hours.
          </p>
          <p>
            <a
              href={`mailto:hello@${siteConfig.domain}`}
              className="text-brand-primary hover:text-brand-primary-600 font-semibold"
            >
              hello@{siteConfig.domain}
            </a>
          </p>

          <h2>What We Can Help With</h2>
          <ul>
            <li>Questions about our travel guides and content</li>
            <li>Reporting errors or outdated information</li>
            <li>Suggestions for new topics or destinations to cover</li>
            <li>Business and partnership inquiries</li>
          </ul>

          <h2>Please Note</h2>
          <p>
            {siteConfig.name} is an independent travel guide website. We are not a travel agency
            and cannot book trips, hotels, or tours on your behalf. For booking inquiries,
            please use the links provided in our guides to contact service providers directly.
          </p>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => ({ props: {}, revalidate: 604800 });
