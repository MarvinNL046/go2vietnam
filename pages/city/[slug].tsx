import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getCityBySlug, getCitySlugs } = require('../../lib/cities');

interface Neighborhood {
  name: string;
  description: string;
  highlights?: string[];
}

interface DayTrip {
  name: string;
  description: string;
  distance?: string;
  highlights?: string[];
}

interface MustDoItem {
  name: string;
  description: string;
}

interface FoodSpecialty {
  name: string;
  description: string;
  priceRange?: string;
}

interface CityDetail {
  slug: string;
  name: string | { en: string };
  vietnameseName?: string;
  image?: string;
  region?: string;
  highlights?: (string | { en: string; nl?: string })[];
  description?: string | { en: string };
  overview?: string;
  neighborhoods?: Neighborhood[];
  gettingThere?: {
    byAir?: string;
    byTrain?: string;
    byBus?: string;
  };
  gettingAround?: string;
  bestTimeToVisit?: {
    best?: string;
    description?: string;
    seasons?: {
      spring?: string;
      summer?: string;
      autumn?: string;
      winter?: string;
    };
  };
  budget?: {
    backpacker?: string;
    midRange?: string;
    luxury?: string;
    details?: string | {
      accommodation?: string;
      food?: string;
      transport?: string;
      activities?: string;
    };
  };
  mustDo?: (string | MustDoItem)[];
  food?: {
    description?: string;
    specialties?: (string | FoodSpecialty)[];
  };
  safety?: string;
  localTips?: string[];
  dayTrips?: DayTrip[];
  sources?: string[];
}

interface CityPageProps {
  city: CityDetail;
}

/* ------------------------------------------------------------------ */
/*  SVG Icon helpers                                                   */
/* ------------------------------------------------------------------ */

function IconPlane() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function IconTrain() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l-2 4m10-4l2 4M12 2v4m-6 6h12M6 12V8a6 6 0 0112 0v4M6 12a2 2 0 002 2h8a2 2 0 002-2" />
    </svg>
  );
}

function IconBus() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m-8 4h8m-4 8v-4m-6 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
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

function IconShield() {
  return (
    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Season icon / color lookup                                        */
/* ------------------------------------------------------------------ */

const seasonIcons: Record<string, { icon: string; color: string }> = {
  spring: { icon: '🌸', color: 'bg-pink-50 border-pink-200 text-pink-800' },
  summer: { icon: '☀️', color: 'bg-amber-50 border-amber-200 text-amber-800' },
  autumn: { icon: '🍂', color: 'bg-orange-50 border-orange-200 text-orange-800' },
  winter: { icon: '❄️', color: 'bg-sky-50 border-sky-200 text-sky-800' },
};

const seasonTranslationKeys: Record<string, string> = {
  spring: 'cityDetail.spring',
  summer: 'cityDetail.summer',
  autumn: 'cityDetail.autumn',
  winter: 'cityDetail.winter',
};

/* ------------------------------------------------------------------ */
/*  Main page component                                                */
/* ------------------------------------------------------------------ */

export default function CityPage({ city }: CityPageProps) {
  const { t, locale } = useTranslation('common');
  const cityName = typeof city.name === 'object' ? ((city.name as any)[locale] || city.name.en) : city.name || city.slug;
  const description = typeof city.description === 'object' ? ((city.description as any)[locale] || city.description.en) : city.description;

  const placeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: cityName,
    description: description || t('seo.cityFallbackDesc').replace('{0}', cityName).replace('{1}', siteConfig.destination),
    image: city.image || undefined,
    address: {
      '@type': 'PostalAddress',
      addressCountry: siteConfig.destination,
      ...(city.region ? { addressRegion: city.region } : {}),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('nav.home'), item: siteConfig.seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: t('nav.cities'), item: `${siteConfig.seo.siteUrl}/city/` },
      { '@type': 'ListItem', position: 3, name: cityName, item: `${siteConfig.seo.siteUrl}/city/${city.slug}/` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${cityName} Travel Guide - ${siteConfig.name}`}
        description={description || t('seo.cityFallbackDesc').replace('{0}', cityName).replace('{1}', siteConfig.destination)}
        ogImage={city.image}
        path={`/city/${city.slug}/`}
        jsonLd={[placeJsonLd, breadcrumbJsonLd]}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.cities'), href: '/city/' },
          { name: cityName, href: `/city/${city.slug}/` },
        ]} />

        {/* Hero Image */}
        {city.image && (
          <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden mb-10 shadow-soft-xl">
            <Image src={city.image} alt={cityName} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="font-display text-display-sm md:text-display-md text-white mb-3">{cityName}</h1>
              {city.vietnameseName && (
                <p className="text-white/80 text-xl italic mb-3">{city.vietnameseName}</p>
              )}
              {city.region && (
                <span className="badge-primary bg-white text-brand-secondary-700 shadow-soft">
                  {city.region}
                </span>
              )}
            </div>
          </div>
        )}

        {!city.image && (
          <div className="mb-10">
            <h1 className="font-display text-display-sm md:text-display-md text-warm-900 mb-3">{cityName}</h1>
            {city.vietnameseName && (
              <p className="text-warm-500 text-xl italic mb-3">{city.vietnameseName}</p>
            )}
            {city.region && (
              <span className="badge-primary bg-brand-secondary-50 text-brand-secondary-700">
                {city.region}
              </span>
            )}
          </div>
        )}

        {/* Highlights Pills */}
        {city.highlights && city.highlights.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {city.highlights.map((h: any, i: number) => (
              <span
                key={i}
                className="bg-brand-secondary-50 text-brand-secondary-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-brand-secondary-100"
              >
                {typeof h === 'object' ? (h[locale] || h.en) : h}
              </span>
            ))}
          </div>
        )}

        <div className="max-w-4xl">
          {/* Overview */}
          {(city.overview || description) && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-4">{t('cityDetail.overview')}</h2>
              <div className="prose-custom">
                <p>{city.overview || description || `Welcome to ${cityName}. More content coming soon.`}</p>
              </div>
            </section>
          )}

          {/* Must-Do Experiences */}
          {city.mustDo && city.mustDo.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.mustDo')}</h2>
              <p className="text-warm-500 mb-6">{t('cityDetail.topThingsToDo')} {cityName}</p>
              <div className="space-y-4">
                {city.mustDo.map((item, index) => {
                  const isObject = typeof item === 'object' && item !== null;
                  const name = isObject ? (item as MustDoItem).name : (item as string);
                  const desc = isObject ? (item as MustDoItem).description : undefined;
                  return (
                    <div key={index} className="card-flat p-5 flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent-100 text-brand-accent-800 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-warm-900 mb-1">{name}</h3>
                        {desc && <p className="text-warm-600 text-sm leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Neighborhoods */}
          {city.neighborhoods && city.neighborhoods.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.neighborhoods')}</h2>
              <p className="text-warm-500 mb-6">{t('cityDetail.whereToExplore')} {cityName}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {city.neighborhoods.map((n, index) => (
                  <div key={index} className="card-flat p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <IconMapPin />
                      <h3 className="font-display font-bold text-warm-900">{n.name}</h3>
                    </div>
                    <p className="text-warm-600 text-sm leading-relaxed mb-4">{n.description}</p>
                    {n.highlights && n.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {n.highlights.map((h, hi) => (
                          <span key={hi} className="badge-secondary">{h}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Food & Specialties */}
          {city.food && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.foodSpecialties')}</h2>
              {city.food.description && (
                <div className="prose-custom mb-6">
                  <p>{city.food.description}</p>
                </div>
              )}
              {city.food.specialties && city.food.specialties.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.food.specialties.map((item, index) => {
                    const isObject = typeof item === 'object' && item !== null;
                    const name = isObject ? (item as FoodSpecialty).name : undefined;
                    const desc = isObject ? (item as FoodSpecialty).description : (item as string);
                    const price = isObject ? (item as FoodSpecialty).priceRange : undefined;

                    // For string specialties, try to split on " — " for a nicer display
                    let displayName = name;
                    let displayDesc = desc;
                    if (!isObject && typeof desc === 'string' && desc.includes(' — ')) {
                      const dashIndex = desc.indexOf(' — ');
                      displayName = desc.substring(0, dashIndex);
                      displayDesc = desc.substring(dashIndex + 3);
                    }

                    return (
                      <div key={index} className="card-flat p-5">
                        {displayName && (
                          <h3 className="font-display font-bold text-warm-900 mb-1">{displayName}</h3>
                        )}
                        {displayDesc && (
                          <p className="text-warm-600 text-sm leading-relaxed">{displayDesc}</p>
                        )}
                        {price && (
                          <p className="text-brand-accent-800 text-sm font-medium mt-2">{price}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {/* Best Time to Visit */}
          {city.bestTimeToVisit && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-4">{t('cityDetail.bestTimeToVisit')}</h2>

              {/* Best period callout */}
              {city.bestTimeToVisit.best && (
                <div className="card p-6 mb-6 flex items-center gap-4 bg-brand-accent-50 border-brand-accent-200">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent-100 flex items-center justify-center">
                    <IconStar />
                  </div>
                  <div>
                    <p className="text-warm-500 text-sm font-medium uppercase tracking-wide">{t('cityDetail.bestPeriod')}</p>
                    <p className="font-display font-bold text-warm-900 text-xl">{city.bestTimeToVisit.best}</p>
                  </div>
                </div>
              )}

              {city.bestTimeToVisit.description && (
                <div className="prose-custom mb-6">
                  <p>{city.bestTimeToVisit.description}</p>
                </div>
              )}

              {/* Seasons grid */}
              {city.bestTimeToVisit.seasons && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(city.bestTimeToVisit.seasons).map(([key, value]) => {
                    const icons = seasonIcons[key] || { icon: '', color: 'bg-warm-50 border-warm-200 text-warm-800' };
                    const seasonLabel = seasonTranslationKeys[key] ? t(seasonTranslationKeys[key]) : key;
                    return (
                      <div key={key} className={`rounded-2xl border p-5 ${icons.color}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg" role="img" aria-label={seasonLabel}>{icons.icon}</span>
                          <h3 className="font-display font-bold">{seasonLabel}</h3>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">{value}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {/* Budget */}
          {city.budget && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.budgetGuide')}</h2>
              <p className="text-warm-500 mb-6">{t('cityDetail.estimatedDailyCosts')} {cityName}</p>

              {/* Three tier cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {city.budget.backpacker && (
                  <div className="card-flat p-5 text-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-warm-500 text-sm font-medium mb-1">{t('cityDetail.backpacker')}</p>
                    <p className="font-display font-bold text-warm-900 text-lg">{city.budget.backpacker}</p>
                  </div>
                )}
                {city.budget.midRange && (
                  <div className="card-flat p-5 text-center border-brand-primary/30 bg-brand-primary/5">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-warm-500 text-sm font-medium mb-1">{t('cityDetail.midRange')}</p>
                    <p className="font-display font-bold text-warm-900 text-lg">{city.budget.midRange}</p>
                  </div>
                )}
                {city.budget.luxury && (
                  <div className="card-flat p-5 text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <p className="text-warm-500 text-sm font-medium mb-1">{t('cityDetail.luxury')}</p>
                    <p className="font-display font-bold text-warm-900 text-lg">{city.budget.luxury}</p>
                  </div>
                )}
              </div>

              {/* Budget details */}
              {city.budget.details && (
                <div className="card-flat p-6">
                  <h3 className="font-display font-bold text-warm-900 mb-3">{t('cityDetail.priceBreakdown')}</h3>
                  {typeof city.budget.details === 'string' ? (
                    <p className="text-warm-600 text-sm leading-relaxed">{city.budget.details}</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {city.budget.details.accommodation && (
                        <div>
                          <p className="font-semibold text-warm-800 text-sm mb-1">{t('cityDetail.accommodation')}</p>
                          <p className="text-warm-600 text-sm">{city.budget.details.accommodation}</p>
                        </div>
                      )}
                      {city.budget.details.food && (
                        <div>
                          <p className="font-semibold text-warm-800 text-sm mb-1">{t('cityDetail.foodBudget')}</p>
                          <p className="text-warm-600 text-sm">{city.budget.details.food}</p>
                        </div>
                      )}
                      {city.budget.details.transport && (
                        <div>
                          <p className="font-semibold text-warm-800 text-sm mb-1">{t('cityDetail.transportBudget')}</p>
                          <p className="text-warm-600 text-sm">{city.budget.details.transport}</p>
                        </div>
                      )}
                      {city.budget.details.activities && (
                        <div>
                          <p className="font-semibold text-warm-800 text-sm mb-1">{t('cityDetail.activities')}</p>
                          <p className="text-warm-600 text-sm">{city.budget.details.activities}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </section>
          )}

          {/* Getting There */}
          {city.gettingThere && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.gettingThere')}</h2>
              <p className="text-warm-500 mb-6">{t('cityDetail.howToReach')} {cityName}</p>
              <div className="grid grid-cols-1 gap-4">
                {city.gettingThere.byAir && (
                  <div className="card-flat p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                        <IconPlane />
                      </div>
                      <h3 className="font-display font-bold text-warm-900">{t('cityDetail.byAir')}</h3>
                    </div>
                    <p className="text-warm-600 text-sm leading-relaxed">{city.gettingThere.byAir}</p>
                  </div>
                )}
                {city.gettingThere.byTrain && (
                  <div className="card-flat p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <IconTrain />
                      </div>
                      <h3 className="font-display font-bold text-warm-900">{t('cityDetail.byTrain')}</h3>
                    </div>
                    <p className="text-warm-600 text-sm leading-relaxed">{city.gettingThere.byTrain}</p>
                  </div>
                )}
                {city.gettingThere.byBus && (
                  <div className="card-flat p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                        <IconBus />
                      </div>
                      <h3 className="font-display font-bold text-warm-900">{t('cityDetail.byBus')}</h3>
                    </div>
                    <p className="text-warm-600 text-sm leading-relaxed">{city.gettingThere.byBus}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Getting Around */}
          {city.gettingAround && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-4">{t('cityDetail.gettingAround')}</h2>
              <div className="prose-custom">
                <p>{city.gettingAround}</p>
              </div>
            </section>
          )}

          {/* Day Trips */}
          {city.dayTrips && city.dayTrips.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.dayTrips')}</h2>
              <p className="text-warm-500 mb-6">{t('cityDetail.excursionsFrom')} {cityName}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {city.dayTrips.map((trip, index) => (
                  <div key={index} className="card-flat p-6">
                    <h3 className="font-display font-bold text-warm-900 mb-1">{trip.name}</h3>
                    {trip.distance && (
                      <p className="text-brand-primary text-sm font-medium mb-3 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {trip.distance}
                      </p>
                    )}
                    <p className="text-warm-600 text-sm leading-relaxed">{trip.description}</p>
                    {trip.highlights && trip.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {trip.highlights.map((h, hi) => (
                          <span key={hi} className="badge-secondary">{h}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Safety */}
          {city.safety && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-4">{t('cityDetail.safety')}</h2>
              <div className="card-flat p-6 flex gap-4">
                <IconShield />
                <div className="prose-custom">
                  <p>{city.safety}</p>
                </div>
              </div>
            </section>
          )}

          {/* Local Tips */}
          {city.localTips && city.localTips.length > 0 && (
            <section className="mb-14">
              <h2 className="font-display text-2xl text-warm-900 mb-2">{t('cityDetail.localTips')}</h2>
              <p className="text-warm-500 mb-6">{t('cityDetail.insiderAdvice')} {cityName}</p>
              <ul className="space-y-4">
                {city.localTips.map((tip, index) => (
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
          {city.sources && city.sources.length > 0 && (
            <section className="mb-12">
              <h2 className="font-display text-warm-500 text-lg mb-3">{t('cityDetail.sources')}</h2>
              <ul className="text-warm-400 text-sm space-y-1">
                {city.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Back Link */}
          <div className="pt-6 border-t border-warm-100">
            <Link
              href="/city/"
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              {t('cityDetail.backToAll')}
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
  const city = getCityBySlug(params?.slug as string);
  if (!city) return { notFound: true };
  return {
    props: { city },
    revalidate: 86400,
  };
};
