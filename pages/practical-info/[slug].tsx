import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getPracticalInfoBySlug, getPracticalInfoSlugs } = require('../../lib/practical-info');

interface LocalizedString {
  en: string;
  nl?: string;
}

interface Section {
  title: LocalizedString;
  content: LocalizedString;
}

interface FAQ {
  question: LocalizedString;
  answer: LocalizedString;
}

interface PracticalInfoGuide {
  slug: string;
  name: LocalizedString;
  icon: string;
  lastUpdated: string;
  seo: {
    title: LocalizedString;
    description: LocalizedString;
  };
  description: LocalizedString;
  sections: Section[];
  tips: LocalizedString[];
  faqs: FAQ[];
}

interface PracticalInfoPageProps {
  guide: PracticalInfoGuide;
}

export default function PracticalInfoPage({ guide }: PracticalInfoPageProps) {
  const { t: tCommon, locale } = useTranslation('common');

  const l = (obj: LocalizedString): string => {
    if (!obj) return '';
    return obj[locale as keyof LocalizedString] || obj.en || '';
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: l(faq.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: l(faq.answer),
      },
    })),
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: l(guide.seo.title),
    description: l(guide.seo.description),
    dateModified: guide.lastUpdated,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={`${l(guide.seo.title)} | ${siteConfig.name}`}
        description={l(guide.seo.description)}
        path={`/practical-info/${guide.slug}/`}
        jsonLd={[faqJsonLd, articleJsonLd]}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { name: tCommon('nav.home'), href: '/' },
            { name: tCommon('nav.practicalInfo'), href: '/practical-info/' },
            { name: l(guide.name), href: `/practical-info/${guide.slug}/` },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <div className="text-5xl mb-4">{guide.icon}</div>
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {l(guide.name)}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {l(guide.description)}
          </p>
          {guide.lastUpdated && (
            <p className="text-warm-400 text-sm mt-3">
              Last updated: {new Date(guide.lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-10 mb-16">
          {guide.sections.map((section, index) => (
            <section key={index}>
              <h2 className="font-display text-2xl text-warm-900 mb-4">
                {l(section.title)}
              </h2>
              <div className="card-flat p-6 lg:p-8">
                <p className="text-warm-600 leading-relaxed">
                  {l(section.content)}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Tips */}
        {guide.tips && guide.tips.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-2xl text-warm-900 mb-6">
              Practical Tips
            </h2>
            <div className="card-flat p-6 lg:p-8">
              <ul className="space-y-3">
                {guide.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-warm-600">{l(tip)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-2xl text-warm-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {guide.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="card-flat group"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-warm-900 font-display text-base hover:text-brand-primary transition-colors">
                    <span>{l(faq.question)}</span>
                    <svg
                      className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-warm-600 leading-relaxed">
                    {l(faq.answer)}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/practical-info/"
            className="inline-flex items-center gap-2 text-warm-500 hover:text-brand-primary transition-colors font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Practical Info
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPracticalInfoSlugs();
  const paths = slugs.map((slug: string) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const guide = getPracticalInfoBySlug(slug);

  if (!guide) {
    return { notFound: true };
  }

  return {
    props: {
      guide,
    },
    revalidate: 604800,
  };
};
