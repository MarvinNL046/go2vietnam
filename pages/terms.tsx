import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function Terms() {
  const { t, locale } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`${t('terms.title')} - ${siteConfig.name}`}
        description={t('terms.acceptanceText').replace('{0}', siteConfig.domain)}
      />
      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-8">{t('terms.title')}</h1>
        <div className="prose-custom">
          <p>{t('terms.lastUpdated')} {new Date().toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h2>{t('terms.acceptance')}</h2>
          <p>{t('terms.acceptanceText').replace('{0}', siteConfig.domain)}</p>
          <h2>{t('terms.content')}</h2>
          <p>{t('terms.contentText')}</p>
          <h2>{t('terms.affiliateDisclosure')}</h2>
          <p>{t('terms.affiliateDisclosureText')}</p>
          <h2>{t('terms.limitationOfLiability')}</h2>
          <p>{t('terms.limitationOfLiabilityText').replace('{0}', siteConfig.name)}</p>
        </div>
      </div>
    </>
  );
}
