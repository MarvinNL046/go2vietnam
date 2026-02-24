import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function EsimGuide() {
  const { t: tCommon } = useTranslation('common');
  const { t, locale } = useTranslation('guides');

  return (
    <>
      <SEOHead
        title={`${t('esim.seoTitle')} | ${siteConfig.name}`}
        description={t('esim.seoDescription')}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: tCommon('nav.home'), href: '/' },
          { name: t('esim.breadcrumb'), href: '/esim/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {t('esim.title')}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {t('esim.intro')}
          </p>
        </div>

        {/* What is eSIM */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.whatIsEsim')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('esim.whatIsEsimDesc')}
              </p>
              <h3>{t('esim.whyUseEsim')}</h3>
              <ul>
                <li><strong>{t('esim.whyInstant')}</strong> {t('esim.whyInstantDesc')}</li>
                <li><strong>{t('esim.whyNoPhysical')}</strong> {t('esim.whyNoPhysicalDesc')}</li>
                <li><strong>{t('esim.whyKeepNumber')}</strong> {t('esim.whyKeepNumberDesc')}</li>
                <li><strong>{t('esim.whyEasyTopUp')}</strong> {t('esim.whyEasyTopUpDesc')}</li>
                <li><strong>{t('esim.whyMultiCountry')}</strong> {t('esim.whyMultiCountryDesc')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Provider */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.recommendedProvider')}</h2>
          <div className="card-flat p-6 lg:p-8 border-2 border-brand-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-xl text-warm-900">{t('esim.saily')}</h3>
                  <span className="badge-primary">{t('esim.recommendedBadge')}</span>
                </div>
                <p className="text-warm-500 text-sm">
                  {t('esim.sailyDesc')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="text-warm-400 text-xs mb-1">{t('esim.plan1gb')}</p>
                <p className="font-display text-xl text-warm-900">{t('esim.plan1gbPrice')}</p>
                <p className="text-warm-400 text-xs mt-1">{t('esim.plan1gbDesc')}</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 ring-2 ring-brand-primary/20">
                <p className="text-warm-400 text-xs mb-1">{t('esim.plan3gb')}</p>
                <p className="font-display text-xl text-warm-900">{t('esim.plan3gbPrice')}</p>
                <p className="text-brand-primary text-xs mt-1 font-medium">{t('esim.plan3gbPopular')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="text-warm-400 text-xs mb-1">{t('esim.plan10gb')}</p>
                <p className="font-display text-xl text-warm-900">{t('esim.plan10gbPrice')}</p>
                <p className="text-warm-400 text-xs mt-1">{t('esim.plan10gbDesc')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.affiliateLinks.esim}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                {t('esim.getEsimCta')}
              </a>
              <p className="text-warm-400 text-xs self-center">
                {t('esim.planDisclaimer')}
              </p>
            </div>
          </div>
        </section>

        {/* Other Providers */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.otherProviders')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('esim.airalo')}</h3>
              <span className="badge-secondary mb-3">{t('esim.popular')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {t('esim.airaloDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{t('esim.airaroProsCons')}</li>
                <li>{t('esim.airaloConsText')}</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('esim.holafly')}</h3>
              <span className="badge-accent mb-3">{t('esim.unlimitedData')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {t('esim.holaflyDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{t('esim.holaflyPros')}</li>
                <li>{t('esim.holaflyCons')}</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('esim.nomad')}</h3>
              <span className="badge-secondary mb-3">{t('esim.affordable')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {t('esim.nomadDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{t('esim.nomadPros')}</li>
                <li>{t('esim.nomadCons')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.coverageTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('esim.coverageIntro')}
              </p>
              <h3>{t('esim.goodCoverage')}</h3>
              <ul>
                <li><strong>{t('esim.coverageCities')}</strong> {t('esim.coverageCitiesDesc')}</li>
                <li><strong>{t('esim.coverageTourist')}</strong> {t('esim.coverageTouristDesc')}</li>
                <li><strong>{t('esim.coverageHighways')}</strong> {t('esim.coverageHighwaysDesc')}</li>
                <li><strong>{t('esim.coverageIslands')}</strong> {t('esim.coverageIslandsDesc')}</li>
              </ul>
              <h3>{t('esim.weakCoverage')}</h3>
              <ul>
                <li><strong>{t('esim.coverageMountains')}</strong> {t('esim.coverageMountainsDesc')}</li>
                <li><strong>{t('esim.coverageCaves')}</strong> {t('esim.coverageCavesDesc')}</li>
                <li><strong>{t('esim.coverageRemoteIslands')}</strong> {t('esim.coverageRemoteIslandsDesc')}</li>
              </ul>
              <p>
                {t('esim.coverageConclusion')}
              </p>
            </div>
          </div>
        </section>

        {/* How to Set Up */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.setupTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">1</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('esim.step1Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('esim.step1Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">2</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('esim.step2Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('esim.step2Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">3</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('esim.step3Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('esim.step3Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">4</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('esim.step4Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('esim.step4Desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 mt-6">
              <p className="text-brand-accent-800 font-medium text-sm">
                <strong>{t('esim.proTip')}</strong> {t('esim.proTipText')}
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.comparisonTitle')}</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">{t('esim.compFeature')}</th>
                    <th className="px-4 py-3 font-display text-warm-900">{t('esim.compEsim')}</th>
                    <th className="px-4 py-3 font-display text-warm-900">{t('esim.compLocalSim')}</th>
                    <th className="px-4 py-3 font-display text-warm-900">{t('esim.compPocketWifi')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compSetup')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compEsimSetup')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compLocalSimSetup')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compPocketWifiSetup')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compCost')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compEsimCost')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compLocalSimCost')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compPocketWifiCost')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compKeepNumber')}</td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">{t('esim.compYes')}</span></td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">{t('esim.compNeedDualSim')}</span></td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">{t('esim.compYes')}</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compLocalNumber')}</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">{t('esim.compUsuallyNo')}</span></td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">{t('esim.compYes')}</span></td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">{t('esim.compNo')}</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compMultiDevice')}</td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-medium">{t('esim.compViaHotspot')}</span></td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-medium">{t('esim.compViaHotspot')}</span></td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">{t('esim.compYesDevices')}</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compBattery')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compNoneBuiltIn')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compNone')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compExtraDevice')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('esim.compBestFor')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compEsimBestFor')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compLocalSimBestFor')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('esim.compPocketWifiBestFor')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('esim.tipsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-3">{t('esim.saveData')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>{t('esim.saveDataOfflineMaps')}</li>
                <li>{t('esim.saveDataDownload')}</li>
                <li>{t('esim.saveDataGrab')}</li>
                <li>{t('esim.saveDataUpdates')}</li>
                <li>{t('esim.saveDataWifi')}</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-3">{t('esim.safeOnline')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>{t('esim.safeVpn')}</li>
                <li>{t('esim.safeBanking')}</li>
                <li>{t('esim.safeCensorship')}</li>
                <li>{t('esim.safeMessaging')}</li>
                <li>{t('esim.safeSocial')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="bg-brand-secondary-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-white mb-4">{t('esim.ctaTitle')}</h2>
            <p className="text-warm-400 mb-6 max-w-xl mx-auto">
              {t('esim.ctaDesc')}
            </p>
            <a
              href={siteConfig.affiliateLinks.esim}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              {t('esim.ctaButton')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
