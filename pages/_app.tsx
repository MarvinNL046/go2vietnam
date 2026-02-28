import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { ToastProvider } from '../components/Toast';
import { siteConfig } from '../site.config';

const localeToLanguage: Record<string, string> = {
  nl: 'nl-NL',
  en: 'en-US',
};

const siteDescriptions: Record<string, string> = {
  nl: `Jouw Ultieme ${siteConfig.destination} Reisgids`,
  en: `Your Ultimate ${siteConfig.destination} Travel Guide`,
};

function getGlobalJsonLd(locale: string) {
  const inLanguage = localeToLanguage[locale] || 'nl-NL';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.seo.siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.seo.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.seo.siteUrl}/images/logo.png`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.seo.siteUrl}/#website`,
        url: siteConfig.seo.siteUrl,
        name: siteConfig.name,
        description: siteDescriptions[locale] || siteDescriptions.en,
        publisher: {
          '@id': `${siteConfig.seo.siteUrl}/#organization`,
        },
        inLanguage,
      },
    ],
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale || 'nl';
  const globalJsonLd = getGlobalJsonLd(locale);

  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
          />
        </Head>
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ToastProvider>
  );
}
