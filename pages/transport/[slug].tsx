import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { siteConfig } from '../../site.config';

const { getRouteBySlug, getRouteSlugs } = require('../../lib/transport');

interface TransportOption {
  mode: string;
  duration: string;
  priceRange: string;
  frequency: string;
  comfort: string;
  description: string;
  bookingTip: string;
}

interface Source {
  name: string;
  url: string;
}

interface TransportRoute {
  slug: string;
  from: string;
  to: string;
  distance: string;
  description: string;
  options: TransportOption[];
  tips: string[];
  sources: Source[];
}

interface TransportRoutePageProps {
  route: TransportRoute;
}

/* ------------------------------------------------------------------ */
/*  Comfort badge helper                                                */
/* ------------------------------------------------------------------ */

function comfortBadge(comfort: string) {
  const lower = comfort.toLowerCase();
  if (lower.includes('very high')) return <span className="badge-primary">{comfort}</span>;
  if (lower.includes('high')) return <span className="badge-primary">{comfort}</span>;
  if (lower.includes('medium')) return <span className="badge-accent">{comfort}</span>;
  return <span className="badge-secondary">{comfort}</span>;
}

/* ------------------------------------------------------------------ */
/*  Mode icon helper                                                    */
/* ------------------------------------------------------------------ */

function ModeIcon({ mode }: { mode: string }) {
  const m = mode.toLowerCase();
  if (m.includes('flight') || m.includes('plane') || m.includes('seaplane')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    );
  }
  if (m.includes('train')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l-2 4m10-4l2 4M12 2v4m-6 6h12M6 12V8a6 6 0 0112 0v4M6 12a2 2 0 002 2h8a2 2 0 002-2" />
      </svg>
    );
  }
  if (m.includes('motorbike') || m.includes('grab') || m.includes('taxi') || m.includes('car')) {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l9 1z" />
      </svg>
    );
  }
  // Bus / ferry / default
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m0 10H8m2-5h4M3 7h18v10H3V7z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                      */
/* ------------------------------------------------------------------ */

export default function TransportRoutePage({ route }: TransportRoutePageProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `How to Get from ${route.from} to ${route.to}: Transport Guide`,
    description: route.description.slice(0, 200),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
  };

  return (
    <>
      <SEOHead
        title={`How to Get from ${route.from} to ${route.to} | Transport Guide | ${siteConfig.name}`}
        description={`Best ways to travel from ${route.from} to ${route.to}. Compare bus, taxi, train and more. Real prices in VND and USD, travel times, and booking tips.`}
        path={`/transport/${route.slug}/`}
        jsonLd={jsonLd}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: 'Home', href: '/' },
          { name: 'Transport', href: '/transport/' },
          { name: `${route.from} to ${route.to}`, href: `/transport/${route.slug}/` },
        ]} />

        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-brand-primary-600 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wide">{route.distance}</span>
          </div>
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            How to Get from {route.from} to {route.to}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {route.description}
          </p>
        </div>

        {/* Quick Comparison Table */}
        <div className="card-flat p-6 lg:p-8 mb-12">
          <h2 className="font-display text-xl text-warm-900 mb-4">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm-100">
                <tr>
                  <th className="px-4 py-3 font-display text-warm-900">Mode</th>
                  <th className="px-4 py-3 font-display text-warm-900">Duration</th>
                  <th className="px-4 py-3 font-display text-warm-900">Price Range</th>
                  <th className="px-4 py-3 font-display text-warm-900">Comfort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-100">
                {route.options.map((option) => (
                  <tr key={option.mode}>
                    <td className="px-4 py-3 text-warm-700 font-medium">{option.mode}</td>
                    <td className="px-4 py-3 text-warm-600">{option.duration}</td>
                    <td className="px-4 py-3 text-warm-600">{option.priceRange}</td>
                    <td className="px-4 py-3">{comfortBadge(option.comfort)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transport Options Detail */}
        <section className="mb-12">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Transport Options in Detail</h2>
          <div className="space-y-6">
            {route.options.map((option) => (
              <div key={option.mode} className="card-flat p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-primary-100 rounded-xl flex items-center justify-center text-brand-primary-600">
                    <ModeIcon mode={option.mode} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-display text-lg text-warm-900">{option.mode}</h3>
                      {comfortBadge(option.comfort)}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-warm-500">
                      <span>
                        <strong className="text-warm-700">Duration:</strong> {option.duration}
                      </span>
                      <span>
                        <strong className="text-warm-700">Price:</strong> {option.priceRange}
                      </span>
                      <span>
                        <strong className="text-warm-700">Frequency:</strong> {option.frequency}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-warm-600 mb-4">{option.description}</p>

                <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4">
                  <p className="text-brand-accent-800 text-sm">
                    <strong>Booking tip:</strong> {option.bookingTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Route Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Tips for This Route</h2>
          <div className="card-flat p-6 lg:p-8">
            <ul className="space-y-3">
              {route.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-warm-600">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-primary-100 text-brand-primary-700 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Book Transport CTA */}
        <section className="mb-10">
          <div className="bg-brand-secondary-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-white mb-4">
              Ready to Book Your Transfer?
            </h2>
            <p className="text-warm-400 mb-6 max-w-xl mx-auto">
              Compare tickets and book your {route.from} to {route.to} transport online.
            </p>
            <a
              href={siteConfig.affiliateLinks.transport}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Search {route.from} → {route.to} Tickets
            </a>
          </div>
        </section>

        {/* Sources */}
        {route.sources && route.sources.length > 0 && (
          <section className="mb-8">
            <h2 className="font-display text-lg text-warm-700 mb-3">Sources</h2>
            <ul className="space-y-1">
              {route.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary-600 hover:underline text-sm"
                  >
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Back to Transport */}
        <div className="mt-8">
          <Link href="/transport/" className="text-brand-primary-600 hover:underline text-sm">
            &larr; Back to Transport Guide
          </Link>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Static paths & props                                                */
/* ------------------------------------------------------------------ */

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: string[] = getRouteSlugs();
  const paths = slugs.map((slug: string) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const route = getRouteBySlug(slug);

  if (!route) {
    return { notFound: true };
  }

  return {
    props: { route },
  };
};
