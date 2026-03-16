import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function CookiePolicyPage() {
  const { t, locale } = useTranslation('common');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Cookie Policy - ${siteConfig.name}`,
    url: `${siteConfig.seo.siteUrl}/cookie-policy`,
    description: `Cookie policy for ${siteConfig.domain}. Learn how we use cookies and similar technologies.`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={`Cookie Policy - ${siteConfig.name}`}
        description={`Cookie policy for ${siteConfig.domain}. Learn how we use cookies and similar technologies on our ${siteConfig.destination} travel guide.`}
        path="/cookie-policy"
        jsonLd={jsonLd}
      >
        <meta name="robots" content="noindex, follow" />
      </SEOHead>

      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-4">Cookie Policy</h1>
        <p className="text-sm text-warm-400 mb-8">
          Last updated: {new Date().toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose-custom max-w-3xl">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or
            mobile phone) when you visit a website. They are widely used to make websites work
            more efficiently and to provide information to site owners.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            {siteConfig.domain} uses cookies and similar technologies for the following purposes:
          </p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core
            features such as page navigation, language preferences, and access to secure areas.
            You cannot opt out of these cookies as the website would not function without them.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use Google Analytics to understand how visitors interact with our website. These
            cookies collect information such as the number of visitors, which pages are visited,
            and how long users spend on each page. All data is anonymized and used solely to
            improve our content and user experience.
          </p>
          <ul>
            <li><strong>_ga</strong> - Used to distinguish users. Expires after 2 years.</li>
            <li><strong>_ga_*</strong> - Used to maintain session state. Expires after 2 years.</li>
          </ul>

          <h3>Affiliate Cookies</h3>
          <p>
            When you click on an affiliate link on our site, the affiliate partner (such as
            Booking.com, Klook, or GetYourGuide) may set cookies on your device to track that
            your booking or purchase was referred by us. These are third-party cookies set by
            the affiliate partner, not by {siteConfig.domain}.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some third-party services we use may set their own cookies. We have no control over
            these cookies. The main third-party services that may set cookies include:
          </p>
          <ul>
            <li>Google Analytics (analytics)</li>
            <li>Booking.com (affiliate tracking)</li>
            <li>GetYourGuide (affiliate tracking)</li>
            <li>Klook (affiliate tracking)</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow
            you to:
          </p>
          <ul>
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may affect your experience on our
            website and other sites you visit.
          </p>

          <h2>Your Rights Under GDPR</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have the right to:
          </p>
          <ul>
            <li>Be informed about how we use cookies</li>
            <li>Accept or reject non-essential cookies</li>
            <li>Withdraw your consent at any time</li>
            <li>Request information about the data we collect</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on
            this page with an updated revision date.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about our use of cookies, please{' '}
            <Link href="/contact">contact us</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
