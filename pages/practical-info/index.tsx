import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function PracticalInfo() {
  const { t: tCommon } = useTranslation('common');
  const { t, locale } = useTranslation('guides');

  const faqItems = [
    {
      question: t('practicalInfo.faq1Q'),
      answer: t('practicalInfo.faq1A'),
    },
    {
      question: t('practicalInfo.faq2Q'),
      answer: t('practicalInfo.faq2A'),
    },
    {
      question: t('practicalInfo.faq3Q'),
      answer: t('practicalInfo.faq3A'),
    },
    {
      question: t('practicalInfo.faq4Q'),
      answer: t('practicalInfo.faq4A'),
    },
    {
      question: t('practicalInfo.faq5Q'),
      answer: t('practicalInfo.faq5A'),
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: t('practicalInfo.breadcrumb'), item: `${siteConfig.seo.siteUrl}/practical-info/` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${t('practicalInfo.seoTitle')} | ${siteConfig.name}`}
        description={t('practicalInfo.seoDescription')}
        path="/practical-info/"
        jsonLd={[faqJsonLd, breadcrumbJsonLd]}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: tCommon('nav.home'), href: '/' },
          { name: t('practicalInfo.breadcrumb'), href: '/practical-info/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {t('practicalInfo.title')}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {t('practicalInfo.intro')}
          </p>
        </div>

        {/* Quick Reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">&#x1f1fb;&#x1f1f3;</p>
            <p className="text-warm-400 text-xs">{t('practicalInfo.quickCurrency')}</p>
            <p className="font-display text-warm-900 text-sm">{t('practicalInfo.quickCurrencyValue')}</p>
          </div>
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">&#x1f50c;</p>
            <p className="text-warm-400 text-xs">{t('practicalInfo.quickElectricity')}</p>
            <p className="font-display text-warm-900 text-sm">{t('practicalInfo.quickElectricityValue')}</p>
          </div>
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">&#x1f550;</p>
            <p className="text-warm-400 text-xs">{t('practicalInfo.quickTimeZone')}</p>
            <p className="font-display text-warm-900 text-sm">{t('practicalInfo.quickTimeZoneValue')}</p>
          </div>
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">&#x1f4de;</p>
            <p className="text-warm-400 text-xs">{t('practicalInfo.quickEmergency')}</p>
            <p className="font-display text-warm-900 text-sm">{t('practicalInfo.quickEmergencyValue')}</p>
          </div>
        </div>

        {/* Money Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.moneyTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('practicalInfo.moneyIntro')}
              </p>

              <h3>{t('practicalInfo.quickPriceConversions')}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">{t('practicalInfo.vnd10k')}</p>
                <p className="font-display text-warm-900">{t('practicalInfo.vnd10kUsd')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">{t('practicalInfo.vnd50k')}</p>
                <p className="font-display text-warm-900">{t('practicalInfo.vnd50kUsd')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">{t('practicalInfo.vnd200k')}</p>
                <p className="font-display text-warm-900">{t('practicalInfo.vnd200kUsd')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">{t('practicalInfo.vnd500k')}</p>
                <p className="font-display text-warm-900">{t('practicalInfo.vnd500kUsd')}</p>
              </div>
            </div>

            <div className="prose-custom">
              <h3>{t('practicalInfo.atmCards')}</h3>
              <ul>
                <li>{t('practicalInfo.atmEverywhere')}</li>
                <li>{t('practicalInfo.atmLimits')}</li>
                <li>{t('practicalInfo.atmFees')}</li>
                <li>{t('practicalInfo.cardsAccepted')}</li>
                <li>{t('practicalInfo.cashOnly')}</li>
                <li>{t('practicalInfo.notifyBank')}</li>
              </ul>

              <h3>{t('practicalInfo.exchangeTips')}</h3>
              <ul>
                <li>{t('practicalInfo.exchangeGoldShops')}</li>
                <li>{t('practicalInfo.exchangeBanks')}</li>
                <li>{t('practicalInfo.exchangeAirport')}</li>
                <li>{t('practicalInfo.exchangeUsd')}</li>
              </ul>

              <h3>{t('practicalInfo.tippingCulture')}</h3>
              <p>
                {t('practicalInfo.tippingIntro')}
              </p>
              <ul>
                <li><strong>{t('practicalInfo.tippingRestaurants')}</strong> {t('practicalInfo.tippingRestaurantsDesc')}</li>
                <li><strong>{t('practicalInfo.tippingHotels')}</strong> {t('practicalInfo.tippingHotelsDesc')}</li>
                <li><strong>{t('practicalInfo.tippingGuides')}</strong> {t('practicalInfo.tippingGuidesDesc')}</li>
                <li><strong>{t('practicalInfo.tippingSpa')}</strong> {t('practicalInfo.tippingSpaDesc')}</li>
                <li><strong>{t('practicalInfo.tippingGrab')}</strong> {t('practicalInfo.tippingGrabDesc')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Language */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.languageTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('practicalInfo.languageIntro')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-display text-base text-warm-900 mb-3">{t('practicalInfo.essentialPhrases')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseHello')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseHelloVn')} <span className="text-warm-400">{t('practicalInfo.phraseHelloPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseThankYou')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseThankYouVn')} <span className="text-warm-400">{t('practicalInfo.phraseThankYouPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseYesNo')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseYesNoVn')} <span className="text-warm-400">{t('practicalInfo.phraseYesNoPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseSorry')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseSorryVn')} <span className="text-warm-400">{t('practicalInfo.phraseSorryPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseHowMuch')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseHowMuchVn')} <span className="text-warm-400">{t('practicalInfo.phraseHowMuchPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseTooExpensive')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseTooExpensiveVn')} <span className="text-warm-400">{t('practicalInfo.phraseTooExpensivePron')}</span></span></li>
                </ul>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-display text-base text-warm-900 mb-3">{t('practicalInfo.foodDrinkPhrases')}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseDelicious')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseDeliciousVn')} <span className="text-warm-400">{t('practicalInfo.phraseDeliciousPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseBill')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseBillVn')} <span className="text-warm-400">{t('practicalInfo.phraseBillPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseNoSpicy')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseNoSpicyVn')} <span className="text-warm-400">{t('practicalInfo.phraseNoSpicyPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseBeer')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseBeerVn')} <span className="text-warm-400">{t('practicalInfo.phraseBeerPron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseCoffee')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseCoffeeVn')} <span className="text-warm-400">{t('practicalInfo.phraseCoffeePron')}</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">{t('practicalInfo.phraseWater')}</span><span className="font-medium text-warm-900">{t('practicalInfo.phraseWaterVn')} <span className="text-warm-400">{t('practicalInfo.phraseWaterPron')}</span></span></li>
                </ul>
              </div>
            </div>

            <div className="bg-warm-100 rounded-xl p-4 mt-6">
              <p className="text-warm-600 text-sm">
                <strong className="text-warm-800">{t('practicalInfo.languageTip')}</strong> {t('practicalInfo.languageTipText')}
              </p>
            </div>
          </div>
        </section>

        {/* SIM Cards & Internet */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.simTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('practicalInfo.simIntro')}
              </p>

              <h3>{t('practicalInfo.majorProviders')}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <h4 className="font-display text-warm-900 mb-1">{t('practicalInfo.viettel')}</h4>
                <span className="badge-primary text-xs">{t('practicalInfo.bestCoverage')}</span>
                <p className="text-warm-500 text-xs mt-2">{t('practicalInfo.viettelDesc')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h4 className="font-display text-warm-900 mb-1">{t('practicalInfo.mobifone')}</h4>
                <span className="badge-accent text-xs">{t('practicalInfo.touristFriendly')}</span>
                <p className="text-warm-500 text-xs mt-2">{t('practicalInfo.mobifoneDesc')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h4 className="font-display text-warm-900 mb-1">{t('practicalInfo.vinaphone')}</h4>
                <span className="badge-secondary text-xs">{t('practicalInfo.reliableProvider')}</span>
                <p className="text-warm-500 text-xs mt-2">{t('practicalInfo.vinaphoneDesc')}</p>
              </div>
            </div>

            <div className="prose-custom">
              <h3>{t('practicalInfo.touristSimPrices')}</h3>
              <ul>
                <li><strong>{t('practicalInfo.simAirport')}</strong> {t('practicalInfo.simAirportPrice')}</li>
                <li><strong>{t('practicalInfo.simCityShop')}</strong> {t('practicalInfo.simCityShopPrice')}</li>
                <li>{t('practicalInfo.simDataUnlimited')}</li>
                <li>{t('practicalInfo.simCallsCheap')}</li>
              </ul>

              <h3>{t('practicalInfo.gettingSim')}</h3>
              <p>
                {t('practicalInfo.gettingSimText')}
              </p>
            </div>
          </div>
        </section>

        {/* Health & Safety */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.healthTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <h3>{t('practicalInfo.vaccinations')}</h3>
              <p>
                {t('practicalInfo.vaccinationsIntro')}
              </p>
              <ul>
                <li><strong>{t('practicalInfo.vacRoutine')}</strong> {t('practicalInfo.vacRoutineDesc')}</li>
                <li><strong>{t('practicalInfo.vacHepA')}</strong> {t('practicalInfo.vacHepADesc')}</li>
                <li><strong>{t('practicalInfo.vacHepB')}</strong> {t('practicalInfo.vacHepBDesc')}</li>
                <li><strong>{t('practicalInfo.vacTyphoid')}</strong> {t('practicalInfo.vacTyphoidDesc')}</li>
                <li><strong>{t('practicalInfo.vacJE')}</strong> {t('practicalInfo.vacJEDesc')}</li>
                <li><strong>{t('practicalInfo.vacRabies')}</strong> {t('practicalInfo.vacRabiesDesc')}</li>
                <li><strong>{t('practicalInfo.vacMalaria')}</strong> {t('practicalInfo.vacMalariaDesc')}</li>
              </ul>

              <h3>{t('practicalInfo.waterFoodSafety')}</h3>
              <ul>
                <li><strong>{t('practicalInfo.waterNeverDrink')}</strong> {t('practicalInfo.waterNeverDrinkDesc')}</li>
                <li>{t('practicalInfo.waterIceSafe')}</li>
                <li>{t('practicalInfo.waterStreetFood')}</li>
                <li>{t('practicalInfo.waterHandSanitizer')}</li>
                <li>{t('practicalInfo.waterStomachIssues')}</li>
              </ul>

              <h3>{t('practicalInfo.commonScams')}</h3>
              <ul>
                <li><strong>{t('practicalInfo.scamTaxi')}</strong> {t('practicalInfo.scamTaxiDesc')}</li>
                <li><strong>{t('practicalInfo.scamShoeShine')}</strong> {t('practicalInfo.scamShoeShineDesc')}</li>
                <li><strong>{t('practicalInfo.scamWrongChange')}</strong> {t('practicalInfo.scamWrongChangeDesc')}</li>
                <li><strong>{t('practicalInfo.scamMotorbikeDamage')}</strong> {t('practicalInfo.scamMotorbikeDamageDesc')}</li>
                <li><strong>{t('practicalInfo.scamCyclo')}</strong> {t('practicalInfo.scamCycloDesc')}</li>
                <li><strong>{t('practicalInfo.scamFakeTours')}</strong> {t('practicalInfo.scamFakeToursDesc')}</li>
              </ul>
            </div>

            <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 mt-6 not-prose">
              <h4 className="font-display text-brand-primary-800 text-sm mb-2">{t('practicalInfo.emergencyNumbers')}</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-brand-primary-700 font-medium">{t('practicalInfo.policeNumber')}</p>
                  <p className="text-brand-primary-600 text-xs">{t('practicalInfo.police')}</p>
                </div>
                <div>
                  <p className="text-brand-primary-700 font-medium">{t('practicalInfo.ambulanceNumber')}</p>
                  <p className="text-brand-primary-600 text-xs">{t('practicalInfo.ambulance')}</p>
                </div>
                <div>
                  <p className="text-brand-primary-700 font-medium">{t('practicalInfo.fireNumber')}</p>
                  <p className="text-brand-primary-600 text-xs">{t('practicalInfo.fire')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electricity */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.electricityTitle')}</h2>
          <div className="card-flat p-6">
            <div className="prose-custom">
              <p>
                {t('practicalInfo.electricityIntro')}
              </p>
              <ul>
                <li><strong>{t('practicalInfo.electricityUS')}</strong> {t('practicalInfo.electricityUSDesc')}</li>
                <li><strong>{t('practicalInfo.electricityUK')}</strong> {t('practicalInfo.electricityUKDesc')}</li>
                <li><strong>{t('practicalInfo.electricityEU')}</strong> {t('practicalInfo.electricityEUDesc')}</li>
                <li>{t('practicalInfo.electricityDualVoltage')}</li>
                <li>{t('practicalInfo.electricityOutages')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Culture & Etiquette */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.cultureTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">{t('practicalInfo.generalEtiquette')}</h3>
              <ul className="space-y-3 text-warm-600 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('practicalInfo.etiquetteShoes')}</strong> {t('practicalInfo.etiquetteShoesDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>{t('practicalInfo.etiquetteDress')}</strong> {t('practicalInfo.etiquetteDressDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('practicalInfo.etiquetteHandsPrefix')} <strong>{t('practicalInfo.etiquetteHands')}</strong> {t('practicalInfo.etiquetteHandsDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('practicalInfo.etiquetteHeadPrefix')} <strong>{t('practicalInfo.etiquetteHead')}</strong> {t('practicalInfo.etiquetteHeadDesc')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('practicalInfo.etiquetteAngerPrefix')} <strong>{t('practicalInfo.etiquetteAnger')}</strong> {t('practicalInfo.etiquetteAngerDesc')}</span>
                </li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">{t('practicalInfo.crossingStreet')}</h3>
              <div className="prose-custom text-sm">
                <p>
                  {t('practicalInfo.crossingStreetDesc1')}
                </p>
                <p className="mt-3">
                  {t('practicalInfo.crossingStreetDesc2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Etiquette */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('practicalInfo.photographyTitle')}</h2>
          <div className="card-flat p-6">
            <div className="prose-custom">
              <ul>
                <li><strong>{t('practicalInfo.photoAskPeople')}</strong> {t('practicalInfo.photoAskPeopleDesc')}</li>
                <li><strong>{t('practicalInfo.photoTemples')}</strong> {t('practicalInfo.photoTemplesDesc')}</li>
                <li><strong>{t('practicalInfo.photoMilitary')}</strong> {t('practicalInfo.photoMilitaryDesc')}</li>
                <li>{t('practicalInfo.photoFriendly')}</li>
                <li>{t('practicalInfo.photoVendors')}</li>
                <li>{t('practicalInfo.photoDrones')}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
