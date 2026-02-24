import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function TravelInsurance() {
  const { t: tCommon } = useTranslation('common');
  const { t, locale } = useTranslation('guides');

  return (
    <>
      <SEOHead
        title={`${t('travelInsurance.seoTitle')} | ${siteConfig.name}`}
        description={t('travelInsurance.seoDescription')}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: tCommon('nav.home'), href: '/' },
          { name: t('travelInsurance.breadcrumb'), href: '/travel-insurance/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {t('travelInsurance.title')}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {t('travelInsurance.intro')}
          </p>
        </div>

        {/* Why You Need It */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.whyTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('travelInsurance.whyIntro')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">&#x1f3e5;</p>
                <p className="font-display text-warm-900 text-sm">{t('travelInsurance.hospitalStay')}</p>
                <p className="text-warm-500 text-xs mt-1">{t('travelInsurance.hospitalStayCost')}</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">&#x1f681;</p>
                <p className="font-display text-warm-900 text-sm">{t('travelInsurance.medicalEvacuation')}</p>
                <p className="text-warm-500 text-xs mt-1">{t('travelInsurance.medicalEvacuationCost')}</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">&#x1f3cd;&#xfe0f;</p>
                <p className="font-display text-warm-900 text-sm">{t('travelInsurance.motorbikeAccident')}</p>
                <p className="text-warm-500 text-xs mt-1">{t('travelInsurance.motorbikeAccidentCost')}</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">&#x2708;&#xfe0f;</p>
                <p className="font-display text-warm-900 text-sm">{t('travelInsurance.tripCancellation')}</p>
                <p className="text-warm-500 text-xs mt-1">{t('travelInsurance.tripCancellationCost')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.whatToLookFor')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-4">{t('travelInsurance.mustHaveCoverage')}</h3>
              <ul className="space-y-3 text-warm-600 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('travelInsurance.mustMedical')}</strong> {t('travelInsurance.mustMedicalDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('travelInsurance.mustEvacuation')}</strong> {t('travelInsurance.mustEvacuationDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('travelInsurance.mustCancellation')}</strong> {t('travelInsurance.mustCancellationDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('travelInsurance.mustBelongings')}</strong> {t('travelInsurance.mustBelongingsDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('travelInsurance.mustHotline')}</strong> {t('travelInsurance.mustHotlineDesc')}</span>
                </li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-4">{t('travelInsurance.vietnamSpecific')}</h3>
              <ul className="space-y-3 text-warm-600 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>{t('travelInsurance.specMotorbike')}</strong> {t('travelInsurance.specMotorbikeDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>{t('travelInsurance.specAdventure')}</strong> {t('travelInsurance.specAdventureDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>{t('travelInsurance.specNatural')}</strong> {t('travelInsurance.specNaturalDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>{t('travelInsurance.specTheft')}</strong> {t('travelInsurance.specTheftDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>{t('travelInsurance.specFlightDelay')}</strong> {t('travelInsurance.specFlightDelayDesc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Healthcare in Vietnam */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.healthcareTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <h3>{t('travelInsurance.hospitals')}</h3>
              <p>
                {t('travelInsurance.hospitalsDesc')}
              </p>
              <h3>{t('travelInsurance.intlHospitals')}</h3>
              <ul>
                <li><strong>{t('travelInsurance.hospitalFV')}</strong> {t('travelInsurance.hospitalFVDesc')}</li>
                <li><strong>{t('travelInsurance.hospitalVinmec')}</strong> {t('travelInsurance.hospitalVinmecDesc')}</li>
                <li><strong>{t('travelInsurance.hospitalFrench')}</strong> {t('travelInsurance.hospitalFrenchDesc')}</li>
                <li><strong>{t('travelInsurance.hospitalFMP')}</strong> {t('travelInsurance.hospitalFMPDesc')}</li>
              </ul>

              <h3>{t('travelInsurance.pharmacies')}</h3>
              <p>
                {t('travelInsurance.pharmaciesDesc')}
              </p>

              <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 my-6 not-prose">
                <p className="text-brand-accent-800 font-medium text-sm">
                  <strong>{t('travelInsurance.pharmaciesWarning')}</strong> {t('travelInsurance.pharmaciesWarningText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Claims */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.commonClaimsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f3cd;&#xfe0f;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.claimMotorbike')}</h3>
              <p className="text-warm-600 text-sm">
                {t('travelInsurance.claimMotorbikeDesc')}
              </p>
              <p className="text-warm-400 text-xs mt-3">{t('travelInsurance.claimMotorbikeCost')}</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f922;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.claimFood')}</h3>
              <p className="text-warm-600 text-sm">
                {t('travelInsurance.claimFoodDesc')}
              </p>
              <p className="text-warm-400 text-xs mt-3">{t('travelInsurance.claimFoodCost')}</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f4f1;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.claimTheft')}</h3>
              <p className="text-warm-600 text-sm">
                {t('travelInsurance.claimTheftDesc')}
              </p>
              <p className="text-warm-400 text-xs mt-3">{t('travelInsurance.claimTheftCost')}</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x2708;&#xfe0f;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.claimFlightDelay')}</h3>
              <p className="text-warm-600 text-sm">
                {t('travelInsurance.claimFlightDelayDesc')}
              </p>
              <p className="text-warm-400 text-xs mt-3">{t('travelInsurance.claimFlightDelayCost')}</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f9f3;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.claimLuggage')}</h3>
              <p className="text-warm-600 text-sm">
                {t('travelInsurance.claimLuggageDesc')}
              </p>
              <p className="text-warm-400 text-xs mt-3">{t('travelInsurance.claimLuggageCost')}</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f99f;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.claimDengue')}</h3>
              <p className="text-warm-600 text-sm">
                {t('travelInsurance.claimDengueDesc')}
              </p>
              <p className="text-warm-400 text-xs mt-3">{t('travelInsurance.claimDengueCost')}</p>
            </div>
          </div>
        </section>

        {/* Recommended Coverage */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.coverageTitle')}</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">{t('travelInsurance.covType')}</th>
                    <th className="px-4 py-3 font-display text-warm-900">{t('travelInsurance.covMinimum')}</th>
                    <th className="px-4 py-3 font-display text-warm-900">{t('travelInsurance.covRecommended')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('travelInsurance.covMedical')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covMedicalMin')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covMedicalRec')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('travelInsurance.covEvacuation')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covEvacuationMin')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covEvacuationRec')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('travelInsurance.covTrip')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covTripMin')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covTripRec')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('travelInsurance.covBelongings')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covBelongingsMin')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covBelongingsRec')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">{t('travelInsurance.covFlightDelay')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covFlightDelayMin')}</td>
                    <td className="px-4 py-3 text-warm-600">{t('travelInsurance.covFlightDelayRec')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips for Filing Claims */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.claimsTipsTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">1</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('travelInsurance.claimTip1Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('travelInsurance.claimTip1Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">2</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('travelInsurance.claimTip2Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('travelInsurance.claimTip2Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">3</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('travelInsurance.claimTip3Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('travelInsurance.claimTip3Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">4</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('travelInsurance.claimTip4Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('travelInsurance.claimTip4Desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">5</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">{t('travelInsurance.claimTip5Title')}</h3>
                  <p className="text-warm-600 text-sm">
                    {t('travelInsurance.claimTip5Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Providers */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.providersTitle')}</h2>
          <div className="prose-custom mb-6">
            <p>
              {t('travelInsurance.providersIntro')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.worldNomads')}</h3>
              <span className="badge-primary mb-3">{t('travelInsurance.backpackers')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {t('travelInsurance.worldNomadsDesc')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.safetyWing')}</h3>
              <span className="badge-accent mb-3">{t('travelInsurance.digitalNomads')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {t('travelInsurance.safetyWingDesc')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{t('travelInsurance.allianz')}</h3>
              <span className="badge-secondary mb-3">{t('travelInsurance.traditionalInsurers')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {t('travelInsurance.allianzDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('travelInsurance.finalTipsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-base text-warm-900 mb-3">{t('travelInsurance.beforeTrip')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>{t('travelInsurance.beforeTip1')}</li>
                <li>{t('travelInsurance.beforeTip2')}</li>
                <li>{t('travelInsurance.beforeTip3')}</li>
                <li>{t('travelInsurance.beforeTip4')}</li>
                <li>{t('travelInsurance.beforeTip5')}</li>
                <li>{t('travelInsurance.beforeTip6')}</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-base text-warm-900 mb-3">{t('travelInsurance.duringTrip')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>{t('travelInsurance.duringTip1')}</li>
                <li>{t('travelInsurance.duringTip2')}</li>
                <li>{t('travelInsurance.duringTip3')}</li>
                <li>{t('travelInsurance.duringTip4')}</li>
                <li>{t('travelInsurance.duringTip5')}</li>
                <li>{t('travelInsurance.duringTip6')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="bg-warm-100 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-warm-900 mb-4">{t('travelInsurance.ctaTitle')}</h2>
            <p className="text-warm-500 mb-6 max-w-xl mx-auto">
              {t('travelInsurance.ctaDesc')}
            </p>
            <p className="text-warm-400 text-sm">
              {t('travelInsurance.ctaNote')}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
