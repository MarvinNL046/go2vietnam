import { GetStaticProps } from 'next';
import SEOHead from '../../components/SEOHead';
import IslandCard from '../../components/IslandCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getAllIslands } = require('../../lib/islands');

interface IslandsIndexProps {
  islands: any[];
}

export default function IslandsIndex({ islands }: IslandsIndexProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Islands of ${siteConfig.destination} - ${siteConfig.name}`}
        description={`Discover pristine beaches and tropical paradises across ${siteConfig.destination}'s most beautiful islands.`}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.islands'), href: '/islands/' },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-display-sm text-warm-900 mb-2">
            Islands of {siteConfig.destination}
          </h1>
          <p className="text-warm-500 text-lg">
            Discover pristine beaches and tropical paradises
          </p>
        </div>

        {islands.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 mb-6 text-warm-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <p className="text-warm-500 text-lg font-medium mb-2">No islands yet</p>
            <p className="text-warm-400 text-sm">Content coming soon! We are working on adding islands.</p>
          </div>
        ) : (
          <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {islands.map((island: any) => (
              <IslandCard
                key={island.slug}
                name={island.name?.en || island.name || island.slug}
                slug={island.slug}
                image={island.image || '/images/placeholder.webp'}
                bestFor={island.bestFor || []}
                description={island.description?.en || island.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const islands = getAllIslands();
  return {
    props: { islands },
    revalidate: 86400,
  };
};
