import { GetStaticProps } from 'next';
import SEOHead from '../../components/SEOHead';
import FoodCard from '../../components/FoodCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getAllDishes } = require('../../lib/food');

interface FoodIndexProps {
  dishes: any[];
}

export default function FoodIndex({ dishes }: FoodIndexProps) {
  const { t, locale } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`${t('foodIndex.title')} - ${siteConfig.name}`}
        description={t('foodIndex.subtitle')}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.food'), href: '/food/' },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-display-sm text-warm-900 mb-2">
            {t('foodIndex.title')}
          </h1>
          <p className="text-warm-500 text-lg">
            {t('foodIndex.subtitle')}
          </p>
        </div>

        {dishes.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 mb-6 text-warm-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
              </svg>
            </div>
            <p className="text-warm-500 text-lg font-medium mb-2">{t('foodIndex.noContent')}</p>
            <p className="text-warm-400 text-sm">{t('foodIndex.comingSoon')}</p>
          </div>
        ) : (
          <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {dishes.map((dish: any) => (
              <FoodCard
                key={dish.slug}
                name={(typeof dish.name === 'object' ? (dish.name as any)[locale] || dish.name.en : dish.name) || dish.slug}
                slug={dish.slug}
                image={dish.image || '/images/placeholder.webp'}
                category={dish.category}
                description={typeof dish.description === 'object' ? (dish.description as any)[locale] || dish.description.en : dish.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dishes = getAllDishes();
  return {
    props: { dishes },
    revalidate: 86400,
  };
};
