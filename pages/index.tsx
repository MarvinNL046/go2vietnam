import { GetStaticProps } from 'next';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import CityCard from '../components/CityCard';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

const { getAllCities } = require('../lib/cities');

interface HomeProps {
  cities: any[];
}

export default function Home({ cities }: HomeProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`${siteConfig.name} - ${siteConfig.tagline}`}
        description={`Your complete ${siteConfig.destination} travel guide with city guides, local food, practical tips, and more.`}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-brand-secondary-900 via-brand-secondary to-brand-secondary-800 bg-hero-pattern overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 py-20 text-center">
          <h1 className="font-display text-display-lg md:text-display-xl text-white mb-6 animate-fade-in-up">
            Discover <span className="text-brand-accent">{siteConfig.destination}</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-300 max-w-2xl mx-auto mb-10 animate-fade-in-up">
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
              className="inline-flex items-center justify-center text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300"
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
                Explore our handpicked destinations across {siteConfig.destination}
              </p>
            </div>
            <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cities.slice(0, 6).map((city: any) => (
                <CityCard
                  key={city.slug}
                  name={city.name?.en || city.name || city.slug}
                  slug={city.slug}
                  image={city.image || '/images/placeholder.webp'}
                  region={city.region}
                  highlights={city.highlights || []}
                  description={city.description?.en || city.description}
                />
              ))}
            </div>
            {cities.length > 6 && (
              <div className="text-center mt-12">
                <Link href="/city/" className="btn-secondary inline-block">
                  {t('sections.viewAll')}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative bg-brand-secondary-900 bg-hero-pattern py-20 lg:py-28 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-brand-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 text-center max-w-3xl">
          <h2 className="font-display text-display-sm md:text-display-md text-white mb-5">
            Ready to explore {siteConfig.destination}?
          </h2>
          <p className="text-warm-400 text-lg mb-10 max-w-xl mx-auto">
            Start planning your trip with our comprehensive guides, local tips, and travel resources.
          </p>
          <Link
            href="/city/"
            className="inline-block bg-brand-accent hover:bg-brand-accent-400 text-brand-secondary-900 px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl"
          >
            {t('sections.viewAll')} {t('nav.cities')}
          </Link>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const cities = getAllCities();
  return {
    props: { cities },
    revalidate: 86400,
  };
};
