import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

export default function Privacy() {
  const { t, locale } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`${t('privacy.title')} - ${siteConfig.name}`}
        description={t('privacy.introText').replace('{0}', siteConfig.domain).replace('{1}', siteConfig.name)}
      />
      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-8">{t('privacy.title')}</h1>
        <div className="prose-custom">
          <p>{t('privacy.lastUpdated')} {new Date().toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h2>{t('privacy.introduction')}</h2>
          <p>{t('privacy.introText').replace('{0}', siteConfig.domain).replace('{1}', siteConfig.name)}</p>
          <h2>{t('privacy.informationCollection')}</h2>
          <p>{t('privacy.informationCollectionText')}</p>
          <h2>{t('privacy.analytics')}</h2>
          <p>{t('privacy.analyticsText')}</p>
          <h2>{t('privacy.affiliateLinks')}</h2>
          <p>{t('privacy.affiliateLinksText')}</p>
          <h2>{t('privacy.contact')}</h2>
          <p>{t('privacy.contactText')}</p>
        </div>
      </div>
    </>
  );
}
