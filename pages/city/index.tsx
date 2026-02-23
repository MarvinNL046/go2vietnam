import { GetStaticProps } from 'next';
import SEOHead from '../../components/SEOHead';
import CityCard from '../../components/CityCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getAllCities } = require('../../lib/cities');

interface CityIndexProps {
  cities: any[];
}

export default function CityIndex({ cities }: CityIndexProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Cities in ${siteConfig.destination} - ${siteConfig.name}`}
        description={`Explore the best cities in ${siteConfig.destination}. Travel guides, attractions, food, hotels, and more.`}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.cities'), href: '/city/' },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-display-sm text-warm-900 mb-2">
            {t('nav.cities')} in {siteConfig.destination}
          </h1>
          <p className="text-warm-500 text-lg">
            Explore vibrant cities and hidden gems across the country
          </p>
        </div>

        {cities.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 mb-6 text-warm-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
              </svg>
            </div>
            <p className="text-warm-500 text-lg font-medium mb-2">No cities yet</p>
            <p className="text-warm-400 text-sm">Content coming soon! We are working on adding cities.</p>
          </div>
        ) : (
          <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cities.map((city: any) => (
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
        )}
      </div>
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
