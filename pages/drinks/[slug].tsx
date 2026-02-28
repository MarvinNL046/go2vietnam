import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getDrinkBySlug, getDrinkSlugs } = require('../../lib/drinks');

interface WhereToTry {
  name: string;
  location: string;
  note?: string;
}

interface Variation {
  name: string;
  description: string;
}

interface DrinkDetail {
  slug: string;
  name: string | { en: string };
  vietnameseName?: string;
  image: string;
  category?: string;
  description?: string | { en: string };
  overview?: string;
  origin?: {
    region?: string;
    history?: string;
  };
  howItsMade?: string;
  whereToTry?: WhereToTry[];
  variations?: Variation[];
  priceRange?: string;
  tips?: string[];
  culturalNotes?: string;
  sources?: string[];
}

interface DrinkPageProps {
  drink: DrinkDetail;
}

export default function DrinkPage({ drink }: DrinkPageProps) {
  const { t, locale } = useTranslation('common');

  const name = typeof drink.name === 'object' ? ((drink.name as any)[locale] || drink.name.en) : drink.name || drink.slug;
  const description = typeof drink.description === 'object' ? ((drink.description as any)[locale] || drink.description.en) : drink.description;

  return (
    <>
      <SEOHead
        title={`${name} - ${t('drinkDetail.drinksGuide')} | ${siteConfig.name}`}
        description={description || t('seo.drinkFallbackDesc').replace('{0}', name)}
        ogImage={drink.image}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.drinks'), href: '/drinks/' },
          { name: name, href: `/drinks/${drink.slug}/` },
        ]} />

        {/* Hero Section */}
        <div className="mb-10">
          <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden rounded-2xl mb-8">
            <Image
              src={drink.image || '/images/placeholder.webp'}
              alt={name}
              fill
              priority
              className="object-cover"
            />
            {drink.category && (
              <span className="badge-accent absolute top-4 left-4">
                {drink.category}
              </span>
            )}
          </div>

          <h1 className="font-display text-display-sm text-warm-900 mb-2">
            {name}
          </h1>
          {drink.vietnameseName && (
            <p className="text-warm-500 text-xl italic mb-4">
              {drink.vietnameseName}
            </p>
          )}
          {description && (
            <p className="text-warm-600 text-lg leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>

        <div className="max-w-4xl">
          {/* Overview */}
          {drink.overview && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('cityDetail.overview')}</h2>
              <div className="prose-custom">
                <p>{drink.overview}</p>
              </div>
            </section>
          )}

          {/* Origin & History */}
          {drink.origin && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.originHistory')}</h2>
              <div className="prose-custom">
                {drink.origin.region && (
                  <p className="text-warm-600 mb-2">
                    <span className="font-semibold text-warm-800">{t('drinkDetail.region')}</span> {drink.origin.region}
                  </p>
                )}
                {drink.origin.history && (
                  <p>{drink.origin.history}</p>
                )}
              </div>
            </section>
          )}

          {/* How It's Made */}
          {drink.howItsMade && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.howItsMade')}</h2>
              <div className="prose-custom">
                <p>{drink.howItsMade}</p>
              </div>
            </section>
          )}

          {/* Variations */}
          {drink.variations && drink.variations.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.variations')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drink.variations.map((variation, index) => (
                  <div key={index} className="card p-5">
                    <h3 className="font-display font-bold text-warm-900 mb-2">{variation.name}</h3>
                    <p className="text-warm-500 text-sm">{variation.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Where to Try */}
          {drink.whereToTry && drink.whereToTry.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.whereToTry')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drink.whereToTry.map((place, index) => (
                  <div key={index} className="card p-5">
                    <h3 className="font-display font-bold text-warm-900 mb-1">{place.name}</h3>
                    <p className="text-warm-500 text-sm mb-2">
                      <svg className="inline-block w-4 h-4 mr-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {place.location}
                    </p>
                    {place.note && (
                      <p className="text-warm-400 text-sm italic">{place.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Price Range */}
          {drink.priceRange && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.priceRange')}</h2>
              <div className="card p-5 inline-flex items-center gap-3">
                <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-display font-bold text-warm-900 text-lg">{drink.priceRange}</span>
              </div>
            </section>
          )}

          {/* Tips */}
          {drink.tips && drink.tips.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.tips')}</h2>
              <ul className="space-y-3">
                {drink.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-warm-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Cultural Notes */}
          {drink.culturalNotes && (
            <section className="mb-12">
              <h2 className="section-title font-display text-2xl text-warm-900 mb-4">{t('drinkDetail.culturalNotes')}</h2>
              <div className="prose-custom">
                <p>{drink.culturalNotes}</p>
              </div>
            </section>
          )}

          {/* Sources */}
          {drink.sources && drink.sources.length > 0 && (
            <section className="mb-12">
              <h2 className="section-title font-display text-warm-700 text-lg mb-3">{t('drinkDetail.sources')}</h2>
              <ul className="text-warm-400 text-sm space-y-1">
                {drink.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Back Link */}
          <div className="pt-6 border-t border-warm-100">
            <Link
              href="/drinks/"
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              {t('drinkDetail.backToAll')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getDrinkSlugs();
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const drink = getDrinkBySlug(params?.slug as string);
  if (!drink) {
    return { notFound: true };
  }
  return {
    props: { drink },
    revalidate: 86400,
  };
};
