import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function VisaGuide() {
  const { t: tCommon } = useTranslation('common');
  const { t, locale } = useTranslation('guides');

  const faqItems = [
    {
      question: t('visa.faq1Q'),
      answer: t('visa.faq1A'),
    },
    {
      question: t('visa.faq2Q'),
      answer: t('visa.faq2A'),
    },
    {
      question: t('visa.faq3Q'),
      answer: t('visa.faq3A'),
    },
    {
      question: t('visa.faq4Q'),
      answer: t('visa.faq4A'),
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
      { '@type': 'ListItem', position: 1, name: tCommon('nav.home'), item: siteConfig.seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: t('visa.breadcrumb'), item: `${siteConfig.seo.siteUrl}/visa/` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${t('visa.seoTitle')} | ${siteConfig.name}`}
        description={t('visa.seoDescription')}
        path="/visa/"
        jsonLd={[faqJsonLd, breadcrumbJsonLd]}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: tCommon('nav.home'), href: '/' },
          { name: t('visa.breadcrumb'), href: '/visa/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {t('visa.title')}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {t('visa.intro')}
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-flat p-6 text-center">
            <div className="text-3xl mb-3">&#x1F4CB;</div>
            <h3 className="font-display text-lg text-warm-900 mb-1">{t('visa.eVisaCard')}</h3>
            <p className="text-warm-500 text-sm">{t('visa.eVisaCardDesc')}</p>
            <span className="badge-primary mt-3">{t('visa.eVisaMostCommon')}</span>
          </div>
          <div className="card-flat p-6 text-center">
            <div className="text-3xl mb-3">&#x1F6C2;</div>
            <h3 className="font-display text-lg text-warm-900 mb-1">{t('visa.exemptionCard')}</h3>
            <p className="text-warm-500 text-sm">{t('visa.exemptionCardDesc')}</p>
            <span className="badge-accent mt-3">{t('visa.exemptionEasiest')}</span>
          </div>
          <div className="card-flat p-6 text-center">
            <div className="text-3xl mb-3">&#x2708;&#xFE0F;</div>
            <h3 className="font-display text-lg text-warm-900 mb-1">{t('visa.voaCard')}</h3>
            <p className="text-warm-500 text-sm">{t('visa.voaCardDesc')}</p>
            <span className="badge-secondary mt-3">{t('visa.voaAlternative')}</span>
          </div>
        </div>

        {/* E-Visa Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.eVisaTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('visa.eVisaIntro')}
              </p>

              <h3>{t('visa.howToApply')}</h3>
              <ol>
                <li>
                  {t('visa.applyStep1')}
                </li>
                <li>{t('visa.applyStep2')}</li>
                <li>{t('visa.applyStep3')}</li>
                <li>{t('visa.applyStep4')}</li>
                <li>{t('visa.applyStep5')}</li>
                <li>{t('visa.applyStep6')}</li>
                <li>{t('visa.applyStep7')}</li>
              </ol>

              <h3>{t('visa.keyDetails')}</h3>
              <ul>
                <li><strong>{t('visa.detailCost')}</strong> {t('visa.detailCostValue')}</li>
                <li><strong>{t('visa.detailValidity')}</strong> {t('visa.detailValidityValue')}</li>
                <li><strong>{t('visa.detailEntry')}</strong> {t('visa.detailEntryValue')}</li>
                <li><strong>{t('visa.detailProcessing')}</strong> {t('visa.detailProcessingValue')}</li>
                <li><strong>{t('visa.detailPorts')}</strong> {t('visa.detailPortsValue')}</li>
              </ul>

              <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 my-6 not-prose">
                <p className="text-brand-accent-800 font-medium text-sm">
                  <strong>{t('visa.eVisaWarning')}</strong> {t('visa.eVisaWarningText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Exemption Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.exemptionTitle')}</h2>
          <div className="prose-custom mb-6">
            <p>
              {t('visa.exemptionIntro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 45-day exemptions */}
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-primary">{t('visa.days45')}</span>
                <h3 className="font-display text-lg text-warm-900">{t('visa.extendedExemption')}</h3>
              </div>
              <ul className="space-y-2 text-warm-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.uk')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.france')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.germany')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.italy')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.spain')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.japan')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.southKorea')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.nordics')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.russia')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  {t('visa.belarus')}
                </li>
              </ul>
            </div>

            {/* ASEAN & Others */}
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-accent">{t('visa.days14to30')}</span>
                <h3 className="font-display text-lg text-warm-900">{t('visa.aseanOther')}</h3>
              </div>
              <ul className="space-y-2 text-warm-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.thailand30')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.singapore30')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.malaysia30')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.indonesia30')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.philippines21')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.cambodia30')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.laos30')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.myanmar14')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.brunei14')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  {t('visa.chile90')}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-warm-100 rounded-xl p-4">
            <p className="text-warm-600 text-sm">
              <strong className="text-warm-800">{t('visa.exemptionNote')}</strong> {t('visa.exemptionNoteText')}
            </p>
          </div>
        </section>

        {/* Visa on Arrival */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.voaTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('visa.voaIntro')}
              </p>

              <h3>{t('visa.voaProcess')}</h3>
              <ol>
                <li>{t('visa.voaStep1')}</li>
                <li>{t('visa.voaStep2')}</li>
                <li>{t('visa.voaStep3')}</li>
                <li>{t('visa.voaStep4')}</li>
                <li>{t('visa.voaStep5')}</li>
                <li>{t('visa.voaStep6')}</li>
                <li>{t('visa.voaStep7')}</li>
              </ol>

              <h3>{t('visa.voaWhenTitle')}</h3>
              <ul>
                <li>{t('visa.voaWhenMultiple')}</li>
                <li>{t('visa.voaWhenLonger')}</li>
                <li>{t('visa.voaWhenRejected')}</li>
              </ul>

              <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 my-6 not-prose">
                <p className="text-brand-primary-800 font-medium text-sm">
                  <strong>{t('visa.voaTip')}</strong> {t('visa.voaTipText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Extension */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.extensionTitle')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {t('visa.extensionIntro')}
              </p>

              <h3>{t('visa.extensionOptions')}</h3>
              <ul>
                <li><strong>{t('visa.extensionTourist')}</strong> {t('visa.extensionTouristDesc')}</li>
                <li><strong>{t('visa.extensionVisaRun')}</strong> {t('visa.extensionVisaRunDesc')}</li>
                <li><strong>{t('visa.extensionConversion')}</strong> {t('visa.extensionConversionDesc')}</li>
              </ul>

              <h3>{t('visa.extensionProcessing')}</h3>
              <p>
                {t('visa.extensionProcessingText')}
              </p>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.documentsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">{t('visa.documentsEvisaTitle')}</h3>
              <ul className="space-y-3 text-warm-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docPassport')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docPhoto')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docPassportScan')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docPayment')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docAddress')}
                </li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">{t('visa.documentsVoaTitle')}</h3>
              <ul className="space-y-3 text-warm-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docVoaPlus')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docApprovalLetter')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docPhotos')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docNa1')}
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('visa.docCashFee')}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips & Common Mistakes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.tipsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-3">{t('visa.tipsDoTitle')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>{t('visa.tipsDo1')}</li>
                <li>{t('visa.tipsDo2')}</li>
                <li>{t('visa.tipsDo3')}</li>
                <li>{t('visa.tipsDo4')}</li>
                <li>{t('visa.tipsDo5')}</li>
                <li>{t('visa.tipsDo6')}</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-3">{t('visa.tipsAvoidTitle')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>{t('visa.tipsAvoid1')}</li>
                <li>{t('visa.tipsAvoid2')}</li>
                <li>{t('visa.tipsAvoid3')}</li>
                <li>{t('visa.tipsAvoid4')}</li>
                <li>{t('visa.tipsAvoid5')}</li>
                <li>{t('visa.tipsAvoid6')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processing Times Summary */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.processingTitle')}</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">{t('visa.procVisaType')}</th>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">{t('visa.procProcessingTime')}</th>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">{t('visa.procCost')}</th>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">{t('visa.procMaxStay')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-6 py-4 text-warm-700">{t('visa.procEvisa')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procEvisaTime')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procEvisaCost')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procEvisaStay')}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-warm-700">{t('visa.procVoa')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procVoaTime')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procVoaCost')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procVoaStay')}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-warm-700">{t('visa.procExemption')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procExemptionTime')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procExemptionCost')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procExemptionStay')}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-warm-700">{t('visa.procExtension')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procExtensionTime')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procExtensionCost')}</td>
                    <td className="px-6 py-4 text-warm-600">{t('visa.procExtensionStay')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ-style closing */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{t('visa.faqTitle')}</h2>
          <div className="space-y-4">
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{t('visa.faq1Q')}</h3>
              <p className="text-warm-600 text-sm">
                {t('visa.faq1A')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{t('visa.faq2Q')}</h3>
              <p className="text-warm-600 text-sm">
                {t('visa.faq2A')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{t('visa.faq3Q')}</h3>
              <p className="text-warm-600 text-sm">
                {t('visa.faq3A')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{t('visa.faq4Q')}</h3>
              <p className="text-warm-600 text-sm">
                {t('visa.faq4A')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
