import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function Custom404() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead title={`Page Not Found - ${siteConfig.name}`} description="The page you are looking for does not exist." />
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="relative text-center">
          {/* Large background 404 */}
          <span className="font-display text-[10rem] md:text-[14rem] font-extrabold text-warm-100 select-none leading-none block">
            404
          </span>

          {/* Overlaid content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-display text-2xl md:text-3xl text-warm-900 mb-3">
              Page not found
            </h1>
            <p className="text-warm-500 mb-8 max-w-md mx-auto">
              {t('common.notFound')}
            </p>
            <Link href="/" className="btn-primary">
              {t('common.backHome')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
