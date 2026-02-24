import Head from 'next/head';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { siteConfig } from '../site.config';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  children?: ReactNode;
}

export default function SEOHead({ title, description, ogImage, path, jsonLd, children }: SEOHeadProps) {
  const router = useRouter();
  const ogLocale = router.locale === 'nl' ? 'nl_NL' : 'en_US';
  const locale = router.locale || 'nl';
  const localePath = locale === 'nl' ? path : `/en${path}`;
  const canonicalUrl = path ? `${siteConfig.seo.siteUrl}${localePath}` : undefined;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={ogLocale} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {siteConfig.seo.twitterHandle && (
        <meta name="twitter:site" content={`@${siteConfig.seo.twitterHandle}`} />
      )}
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:image" content={ogImage} />
        </>
      )}
      {path && (
        <>
          <link rel="alternate" hrefLang="nl" href={`${siteConfig.seo.siteUrl}${path}`} />
          <link rel="alternate" hrefLang="en" href={`${siteConfig.seo.siteUrl}/en${path}`} />
          <link rel="alternate" hrefLang="x-default" href={`${siteConfig.seo.siteUrl}${path}`} />
        </>
      )}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd),
          }}
        />
      )}
      {children}
    </Head>
  );
}
