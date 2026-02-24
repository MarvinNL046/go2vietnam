import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '../components/SEOHead';
import CityCard from '../components/CityCard';
import FoodCard from '../components/FoodCard';
import IslandCard from '../components/IslandCard';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

const { getAllCities } = require('../lib/cities');
const { getAllDishes } = require('../lib/food');
const { getAllDrinks } = require('../lib/drinks');
const { getAllIslands } = require('../lib/islands');

interface HomeProps {
  cities: any[];
  dishes: any[];
  drinks: any[];
  islands: any[];
}

export default function Home({ cities, dishes, drinks, islands }: HomeProps) {
  const { t, locale } = useTranslation('common');

  const travelEssentials = [
    {
      href: '/visa/',
      title: t('home.visaGuide'),
      description: t('home.visaDesc'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>
      ),
    },
    {
      href: '/transport/',
      title: t('home.transport'),
      description: t('home.transportDesc'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
    },
    {
      href: '/weather/',
      title: t('home.weatherSeasons'),
      description: t('home.weatherDesc'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      href: '/practical-info/',
      title: t('home.practicalInfo'),
      description: t('home.practicalDesc'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      ),
    },
    {
      href: '/esim/',
      title: t('home.esimInternet'),
      description: t('home.esimDesc'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      ),
    },
    {
      href: '/travel-insurance/',
      title: t('home.travelInsurance'),
      description: t('home.insuranceDesc'),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  const seoTitle = `${siteConfig.name} - ${siteConfig.tagline}`;
  const seoDescription = t('home.everythingYouNeed');

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.seo.siteUrl,
    description: seoDescription,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        path="/"
        jsonLd={homeJsonLd}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-vietnam.webp"
          alt="Ha Long Bay, Vietnam — limestone karsts rising from emerald waters"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="container-custom relative z-10 py-20 text-center">
          <h1 className="font-display text-display-lg md:text-display-xl text-white mb-6 animate-fade-in-up drop-shadow-lg">
            {t('home.discover')} <span className="text-brand-accent">{siteConfig.destination}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up drop-shadow-md">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              href="/city/"
              className="btn-primary text-lg px-8 py-3.5"
            >
              {t('nav.exploreNow')}
            </Link>
            <Link
              href="/blog/"
              className="inline-flex items-center justify-center text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              {t('sections.readMore')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Popular Cities */}
      {cities.length > 0 && (
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <div className="section-header">
              <h2 className="section-title">
                {t('sections.popularCities')}
              </h2>
              <p className="section-subtitle">
                {t('home.exploreHandpicked')}
              </p>
            </div>
            <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.slice(0, 6).map((city: any) => (
                <CityCard
                  key={city.slug}
                  name={(typeof city.name === 'object' ? (city.name as any)[locale] || city.name.en : city.name) || city.slug}
                  slug={city.slug}
                  image={city.image || '/images/placeholder.webp'}
                  region={city.region}
                  highlights={city.highlights || []}
                  description={typeof city.description === 'object' ? (city.description as any)[locale] || city.description.en : city.description}
                />
              ))}
            </div>
            {cities.length > 6 && (
              <div className="text-center mt-12">
                <Link href="/city/" className="btn-secondary inline-block">
                  {t('sections.viewAll')} {t('nav.cities')}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Local Food */}
      {dishes.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="section-header">
              <h2 className="section-title">
                {t('sections.localFood')}
              </h2>
              <p className="section-subtitle">
                {t('home.savorFlavors')}
              </p>
            </div>
            <div className="animate-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {dishes.slice(0, 6).map((dish: any) => (
                <FoodCard
                  key={dish.slug}
                  name={(typeof dish.name === 'object' ? (dish.name as any)[locale] || dish.name.en : dish.name) || dish.slug}
                  slug={dish.slug}
                  image={dish.image || '/images/placeholder.webp'}
                  category={dish.category}
                  spiceLevel={dish.spiceLevel}
                  description={typeof dish.description === 'object' ? (dish.description as any)[locale] || dish.description.en : dish.description}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/food/" className="btn-secondary inline-block">
                {t('sections.viewAll')} {t('nav.food')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Drinks */}
      {drinks.length > 0 && (
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <div className="section-header">
              <h2 className="section-title">
                {t('home.mustTryDrinks')}
              </h2>
              <p className="section-subtitle">
                {t('home.fromCoffee')}
              </p>
            </div>
            <div className="animate-stagger grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {drinks.slice(0, 4).map((drink: any) => (
                <div key={drink.slug} className="card group">
                  <Link href={`/drinks/${drink.slug}/`}>
                    <div className="flex items-center gap-4 p-5">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                        <img
                          src={drink.image || '/images/placeholder.webp'}
                          alt={(typeof drink.name === 'object' ? (drink.name as any)[locale] || drink.name.en : drink.name) || drink.slug}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-lg text-warm-900 truncate">
                            {(typeof drink.name === 'object' ? (drink.name as any)[locale] || drink.name.en : drink.name) || drink.slug}
                          </h3>
                          {drink.category && (
                            <span className="badge-accent text-xs flex-shrink-0">
                              {drink.category}
                            </span>
                          )}
                        </div>
                        {(typeof drink.description === 'object' ? (drink.description as any)[locale] || drink.description.en : drink.description) && (
                          <p className="text-warm-500 text-sm line-clamp-2">
                            {typeof drink.description === 'object' ? (drink.description as any)[locale] || drink.description.en : drink.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/drinks/" className="btn-secondary inline-block">
                {t('sections.viewAll')} {t('nav.drinks')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Islands */}
      {islands.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="section-header">
              <h2 className="section-title">
                {t('home.beautifulIslands')}
              </h2>
              <p className="section-subtitle">
                {t('home.pristineBeaches')}
              </p>
            </div>
            <div className="animate-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {islands.slice(0, 4).map((island: any) => (
                <IslandCard
                  key={island.slug}
                  name={(typeof island.name === 'object' ? (island.name as any)[locale] || island.name.en : island.name) || island.slug}
                  slug={island.slug}
                  image={island.image || '/images/placeholder.webp'}
                  bestFor={island.bestFor || []}
                  description={typeof island.description === 'object' ? (island.description as any)[locale] || island.description.en : island.description}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/islands/" className="btn-secondary inline-block">
                {t('sections.viewAll')} {t('nav.islands')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Travel Essentials */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">
              {t('home.travelEssentials')}
            </h2>
            <p className="section-subtitle">
              {t('home.everythingYouNeed')}
            </p>
          </div>
          <div className="animate-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {travelEssentials.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-flat group p-6 flex items-start gap-4 hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary-50 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-warm-900 mb-1 group-hover:text-brand-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-warm-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-brand-secondary-900 bg-hero-pattern py-20 lg:py-28 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-brand-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center max-w-3xl">
          <h2 className="font-display text-display-sm md:text-display-md text-white mb-5">
            {t('home.readyToExplore')}
          </h2>
          <p className="text-warm-400 text-lg mb-10 max-w-xl mx-auto">
            {t('home.readyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/city/"
              className="inline-block bg-brand-accent hover:bg-brand-accent-400 text-brand-secondary-900 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl"
            >
              {t('home.exploreCities')}
            </Link>
            <Link
              href="/food/"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              {t('home.discoverFood')}
            </Link>
            <Link
              href="/islands/"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              {t('home.visitIslands')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const cities = getAllCities();
  const dishes = getAllDishes();
  const drinks = getAllDrinks();
  const islands = getAllIslands();

  return {
    props: { cities, dishes, drinks, islands },
    revalidate: 86400,
  };
};
