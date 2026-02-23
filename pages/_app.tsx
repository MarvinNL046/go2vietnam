import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { siteConfig } from '../site.config';

const globalJsonLd = {
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
      description: `Your Ultimate ${siteConfig.destination} Travel Guide`,
      publisher: {
        '@id': `${siteConfig.seo.siteUrl}/#organization`,
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
