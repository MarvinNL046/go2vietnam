import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getIslandBySlug, getIslandSlugs } = require('../../lib/islands');

interface IslandPageProps {
  island: any;
}

export default function IslandPage({ island }: IslandPageProps) {
  const { t } = useTranslation('common');
  const islandName = island.name?.en || island.name || island.slug;

  return (
    <>
      <SEOHead
        title={`${islandName} Travel Guide - ${siteConfig.name}`}
        description={island.description?.en || island.description || `Complete travel guide for ${islandName} in ${siteConfig.destination}.`}
        ogImage={island.image}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.islands'), href: '/islands/' },
          { name: islandName, href: `/islands/${island.slug}/` },
        ]} />

        {/* Hero Image */}
        {island.image && (
          <div className="relative h-72 md:h-[28rem] rounded-2xl overflow-hidden mb-10 shadow-soft-xl">
            <Image src={island.image} alt={islandName} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="font-display text-display-sm md:text-display-md text-white mb-2">{islandName}</h1>
              {island.vietnameseName && (
                <p className="text-white/80 text-lg mb-3">{island.vietnameseName}</p>
              )}
              {island.bestFor && island.bestFor.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {island.bestFor.map((tag: string, i: number) => (
                    <span key={i} className="badge-secondary bg-white/20 text-white backdrop-blur-sm text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {!island.image && (
          <div className="mb-10">
            <h1 className="font-display text-display-sm md:text-display-md text-warm-900 mb-2">{islandName}</h1>
            {island.vietnameseName && (
              <p className="text-warm-500 text-lg mb-3">{island.vietnameseName}</p>
            )}
            {island.bestFor && island.bestFor.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {island.bestFor.map((tag: string, i: number) => (
                  <span key={i} className="badge-secondary text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Overview */}
        {island.overview && (
          <div className="prose-custom mb-12">
            <p className="text-warm-700 text-lg leading-relaxed">
              {island.overview}
            </p>
          </div>
        )}

        {/* Getting There */}
        {island.gettingThere && (
          <section className="mb-12">
            <h2 className="font-display text-2xl text-warm-900 mb-5">Getting There</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {island.gettingThere.byAir && (
                <div className="card-flat p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary-50 flex items-center justify-center text-brand-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-lg text-warm-900">By Air</h3>
                  </div>
                  <p className="text-warm-600 text-sm leading-relaxed">{island.gettingThere.byAir}</p>
                </div>
              )}
              {island.gettingThere.byFerry && (
                <div className="card-flat p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-secondary-50 flex items-center justify-center text-brand-secondary-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17h1l1-2h14l1 2h1m-18 0v2h18v-2M5 15V8a2 2 0 012-2h10a2 2 0 012 2v7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-lg text-warm-900">By Ferry</h3>
                  </div>
                  <p className="text-warm-600 text-sm leading-relaxed">{island.gettingThere.byFerry}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Best Time to Visit */}
        {island.bestTimeToVisit && (
          <section className="mb-12">
            <h2 className="font-display text-2xl text-warm-900 mb-5">Best Time to Visit</h2>
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-50 flex items-center justify-center text-brand-accent-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="font-display font-bold text-lg text-brand-primary">{island.bestTimeToVisit.best}</span>
              </div>
              <p className="text-warm-600 text-sm leading-relaxed mb-4">{island.bestTimeToVisit.description}</p>
              {island.bestTimeToVisit.avoid && (
                <div className="bg-warm-50 rounded-xl p-4 border border-warm-100">
                  <p className="text-warm-500 text-sm leading-relaxed">
                    <span className="font-semibold text-warm-700">Avoid: </span>
                    {island.bestTimeToVisit.avoid}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Top Beaches */}
        {island.topBeaches && island.topBeaches.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl text-warm-900 mb-5">Top Beaches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {island.topBeaches.map((beach: any, i: number) => (
                <div key={i} className="card-flat p-6">
                  <h3 className="font-display font-bold text-lg text-warm-900 mb-2">{beach.name}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed">{beach.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Activities */}
        {island.activities && island.activities.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl text-warm-900 mb-5">Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {island.activities.map((activity: any, i: number) => (
                <div key={i} className="card-flat p-6">
                  <h3 className="font-display font-bold text-lg text-warm-900 mb-2">{activity.name}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed mb-3">{activity.description}</p>
                  {activity.price && (
                    <p className="text-brand-primary font-semibold text-sm">{activity.price}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Accommodation */}
        {island.accommodation && (
          <section className="mb-12">
            <h2 className="font-display text-2xl text-warm-900 mb-5">Accommodation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {island.accommodation.budget && (
                <div className="card-flat p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-sm font-bold">$</span>
                    <h3 className="font-display font-bold text-lg text-warm-900">Budget</h3>
                  </div>
                  <p className="text-warm-600 text-sm leading-relaxed">{island.accommodation.budget}</p>
                </div>
              )}
              {island.accommodation.midRange && (
                <div className="card-flat p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-bold">$$</span>
                    <h3 className="font-display font-bold text-lg text-warm-900">Mid-Range</h3>
                  </div>
                  <p className="text-warm-600 text-sm leading-relaxed">{island.accommodation.midRange}</p>
                </div>
              )}
              {island.accommodation.luxury && (
                <div className="card-flat p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-sm font-bold">$$$</span>
                    <h3 className="font-display font-bold text-lg text-warm-900">Luxury</h3>
                  </div>
                  <p className="text-warm-600 text-sm leading-relaxed">{island.accommodation.luxury}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Local Tips */}
        {island.localTips && island.localTips.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl text-warm-900 mb-5">Local Tips</h2>
            <div className="card-flat p-6">
              <ul className="space-y-4">
                {island.localTips.map((tip: string, i: number) => (
                  <li key={i} className="flex gap-3 text-warm-600 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent-50 flex items-center justify-center text-brand-accent-600 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Sources */}
        {island.sources && island.sources.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-lg text-warm-400 mb-3">Sources</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {island.sources.map((source: string, i: number) => (
                <li key={i} className="text-warm-400 text-xs">{source}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getIslandSlugs();
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const island = getIslandBySlug(params?.slug as string);
  if (!island) return { notFound: true };
  return {
    props: { island },
    revalidate: 86400,
  };
};
