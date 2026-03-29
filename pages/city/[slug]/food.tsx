import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import SEOHead from '../../../components/SEOHead';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { useTranslation } from '../../../hooks/useTranslation';
import { siteConfig } from '../../../site.config';

const { getCitySlugs, getCityBySlug } = require('../../../lib/cities');

interface SignatureDish {
  name: string;
  vietnameseName: string;
  description: string;
  priceRange: string;
  whereToTry: string;
  tip: string;
}

interface Restaurant {
  name: string;
  address: string;
  cuisine: string;
  priceRange: string;
  description: string;
  highlight: string;
}

interface StreetFoodArea {
  name: string;
  description: string;
  bestFor: string;
  openingHours: string;
}

interface FoodSource {
  name: string;
  url: string;
}

interface CityFoodData {
  introduction: string;
  signatureDishes: SignatureDish[];
  bestRestaurants: Restaurant[];
  streetFoodAreas: StreetFoodArea[];
  foodTips: string[];
  sources: FoodSource[];
}

interface CityFoodPageProps {
  citySlug: string;
  cityName: string;
  cityImage?: string;
  cityRegion?: string;
  food: CityFoodData;
}

function IconUtensils() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconLightbulb() {
  return (
    <svg className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-4 h-4 text-warm-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function CityFoodPage({ citySlug, cityName, cityImage, cityRegion, food }: CityFoodPageProps) {
  const { t } = useTranslation('common');

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('nav.home'), item: siteConfig.seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: t('nav.cities'), item: `${siteConfig.seo.siteUrl}/city/` },
      { '@type': 'ListItem', position: 3, name: cityName, item: `${siteConfig.seo.siteUrl}/city/${citySlug}/` },
      { '@type': 'ListItem', position: 4, name: 'Food Guide', item: `${siteConfig.seo.siteUrl}/city/${citySlug}/food/` },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${cityName} Food Guide: Best Restaurants & Street Food`,
    description: food.introduction,
    image: cityImage,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  return (
    <>
      <SEOHead
        title={`${cityName} Food Guide: Best Restaurants & Street Food - ${siteConfig.name}`}
        description={food.introduction.substring(0, 160)}
        ogImage={cityImage}
        path={`/city/${citySlug}/food/`}
        jsonLd={[breadcrumbJsonLd, articleJsonLd]}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.cities'), href: '/city/' },
          { name: cityName, href: `/city/${citySlug}/` },
          { name: 'Food Guide', href: `/city/${citySlug}/food/` },
        ]} />

        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent-100 text-brand-accent-800 flex items-center justify-center">
              <IconUtensils />
            </div>
            {cityRegion && (
              <span className="badge-primary bg-brand-secondary-50 text-brand-secondary-700">{cityRegion}</span>
            )}
          </div>
          <h1 className="font-display text-display-sm md:text-display-md text-warm-900 mb-3">
            {cityName} Food Guide
          </h1>
          <p className="text-warm-500 text-lg">Best restaurants, street food &amp; local specialties</p>
        </div>

        <div className="max-w-4xl">
          {/* Introduction */}
          <section className="mb-14">
            <div className="prose-custom">
              <p className="text-warm-700 leading-relaxed text-lg">{food.introduction}</p>
            </div>
          </section>

          {/* Signature Dishes */}
          {food.signatureDishes && food.signatureDishes.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">Signature Dishes</h2>
              <p className="text-warm-500 mb-6">Must-try local specialties in {cityName}</p>
              <div className="space-y-6">
                {food.signatureDishes.map((dish, index) => (
                  <div key={index} className="card-flat p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-warm-900 text-lg">{dish.name}</h3>
                        <p className="text-brand-primary italic text-sm">{dish.vietnameseName}</p>
                      </div>
                      {dish.priceRange && (
                        <span className="flex-shrink-0 bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full border border-green-200">
                          {dish.priceRange}
                        </span>
                      )}
                    </div>
                    <p className="text-warm-600 text-sm leading-relaxed mb-4">{dish.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {dish.whereToTry && (
                        <div className="flex items-start gap-2">
                          <IconMapPin />
                          <div>
                            <p className="text-warm-400 text-xs font-medium uppercase tracking-wide mb-0.5">Where to try</p>
                            <p className="text-warm-700 text-sm">{dish.whereToTry}</p>
                          </div>
                        </div>
                      )}
                      {dish.tip && (
                        <div className="flex items-start gap-2">
                          <IconLightbulb />
                          <div>
                            <p className="text-warm-400 text-xs font-medium uppercase tracking-wide mb-0.5">Local tip</p>
                            <p className="text-warm-700 text-sm">{dish.tip}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Best Restaurants */}
          {food.bestRestaurants && food.bestRestaurants.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">Best Restaurants</h2>
              <p className="text-warm-500 mb-6">Top-rated dining in {cityName}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {food.bestRestaurants.map((restaurant, index) => (
                  <div key={index} className="card-flat p-6">
                    <div className="mb-3">
                      <h3 className="font-display font-bold text-warm-900">{restaurant.name}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="badge-secondary text-xs">{restaurant.cuisine}</span>
                        {restaurant.priceRange && (
                          <span className="text-green-700 text-xs font-semibold">{restaurant.priceRange}</span>
                        )}
                      </div>
                    </div>
                    {restaurant.address && (
                      <p className="text-warm-400 text-xs flex items-start gap-1.5 mb-3">
                        <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {restaurant.address}
                      </p>
                    )}
                    <p className="text-warm-600 text-sm leading-relaxed mb-3">{restaurant.description}</p>
                    {restaurant.highlight && (
                      <div className="bg-brand-accent-50 border border-brand-accent-100 rounded-xl px-4 py-2">
                        <p className="text-brand-accent-800 text-xs font-medium">{restaurant.highlight}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Street Food Areas */}
          {food.streetFoodAreas && food.streetFoodAreas.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">Street Food Areas</h2>
              <p className="text-warm-500 mb-6">Where to eat like a local in {cityName}</p>
              <div className="space-y-4">
                {food.streetFoodAreas.map((area, index) => (
                  <div key={index} className="card-flat p-6">
                    <h3 className="font-display font-bold text-warm-900 mb-2">{area.name}</h3>
                    <p className="text-warm-600 text-sm leading-relaxed mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {area.bestFor && (
                        <div className="flex items-center gap-2">
                          <span className="text-warm-400 font-medium">Best for:</span>
                          <span className="text-warm-700">{area.bestFor}</span>
                        </div>
                      )}
                      {area.openingHours && (
                        <div className="flex items-center gap-1.5">
                          <IconClock />
                          <span className="text-warm-500">{area.openingHours}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Food Tips */}
          {food.foodTips && food.foodTips.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">Food Tips</h2>
              <p className="text-warm-500 mb-6">Insider eating advice for {cityName}</p>
              <ul className="space-y-4">
                {food.foodTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-accent-100 text-brand-accent-800 flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-warm-600 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Sources */}
          {food.sources && food.sources.length > 0 && (
            <section className="mb-12">
              <h2 className="font-display text-warm-500 text-lg mb-3">Sources</h2>
              <ul className="text-warm-400 text-sm space-y-1">
                {food.sources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-primary transition-colors"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Navigation */}
          <div className="pt-6 border-t border-warm-100 flex flex-wrap gap-4">
            <Link
              href={`/city/${citySlug}/`}
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to {cityName} guide
            </Link>
            <Link
              href="/city/"
              className="inline-flex items-center gap-2 text-warm-400 hover:text-brand-primary font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              All cities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getCitySlugs();
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Load city meta for name/image
  const city = getCityBySlug(slug);
  if (!city) return { notFound: true };

  // Load food data
  const foodDataPath = path.join(process.cwd(), 'data', 'cities', `${slug}-food.json`);
  if (!fs.existsSync(foodDataPath)) return { notFound: true };

  const food: CityFoodData = JSON.parse(fs.readFileSync(foodDataPath, 'utf8'));

  const cityName = typeof city.name === 'object' ? (city.name.en || city.slug) : (city.name || city.slug);

  return {
    props: {
      citySlug: slug,
      cityName,
      cityImage: city.image || null,
      cityRegion: city.region || null,
      food,
    },
    revalidate: 86400,
  };
};
