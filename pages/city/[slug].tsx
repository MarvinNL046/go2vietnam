import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getCityBySlug, getCitySlugs } = require('../../lib/cities');

interface CityPageProps {
  city: any;
}

export default function CityPage({ city }: CityPageProps) {
  const { t } = useTranslation('common');
  const cityName = city.name?.en || city.name || city.slug;

  return (
    <>
      <SEOHead
        title={`${cityName} Travel Guide - ${siteConfig.name}`}
        description={city.description?.en || city.description || `Complete travel guide for ${cityName} in ${siteConfig.destination}.`}
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
            <Image src={city.image} alt={cityName} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="font-display text-display-sm md:text-display-md text-white mb-3">{cityName}</h1>
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
            {city.region && (
              <span className="badge-primary bg-brand-secondary-50 text-brand-secondary-700">
                {city.region}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="prose-custom mb-12">
          <p className="text-warm-700 text-lg leading-relaxed">
            {city.description?.en || city.description || `Welcome to ${cityName}. More content coming soon.`}
          </p>
        </div>

        {/* Highlights */}
        {city.highlights && city.highlights.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-2xl text-warm-900 mb-5">{t('common.highlights')}</h2>
            <div className="flex flex-wrap gap-3">
              {city.highlights.map((h: string, i: number) => (
                <span
                  key={i}
                  className="bg-brand-secondary-50 text-brand-secondary-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-brand-secondary-100"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}
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
