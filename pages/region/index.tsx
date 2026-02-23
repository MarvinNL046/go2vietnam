import { GetStaticProps } from 'next';
import SEOHead from '../../components/SEOHead';
import RegionCard from '../../components/RegionCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getAllRegions } = require('../../lib/regions');

interface RegionsIndexProps {
  regions: any[];
}

export default function RegionsIndex({ regions }: RegionsIndexProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Regions of ${siteConfig.destination} - ${siteConfig.name}`}
        description={`Explore the diverse regions of ${siteConfig.destination}. From the mountains of the north to the Mekong Delta in the south, discover what makes each region unique.`}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.regions'), href: '/region/' },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-display-sm text-warm-900 mb-2">
            Regions of {siteConfig.destination}
          </h1>
          <p className="text-warm-500 text-lg">
            Discover the diverse landscapes, cultures, and experiences across the country
          </p>
        </div>

        {regions.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 mb-6 text-warm-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <p className="text-warm-500 text-lg font-medium mb-2">No regions yet</p>
            <p className="text-warm-400 text-sm">Content coming soon! We are working on adding regions.</p>
          </div>
        ) : (
          <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regions.map((region: any) => (
              <RegionCard
                key={region.slug}
                name={region.name}
                slug={region.slug}
                image={region.image || '/images/placeholder.webp'}
                highlights={region.highlights || []}
                description={region.description}
                cities={region.cities || []}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const regions = getAllRegions();
  return {
    props: { regions },
    revalidate: 86400,
  };
};
