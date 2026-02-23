import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function VisaGuide() {
  const { t } = useTranslation('common');

  const faqItems = [
    {
      question: 'Can I extend my e-visa without leaving Vietnam?',
      answer: 'Yes, you can extend an e-visa once for an additional 30 days through a travel agency or the Immigration Department in major cities (Hanoi, Ho Chi Minh City, Da Nang). Start the process at least one week before your visa expires.',
    },
    {
      question: 'Do I need a return ticket to enter Vietnam?',
      answer: 'Technically yes -- immigration may ask for proof of onward travel. Airlines are more likely to check this at boarding. Having a return or onward flight ticket (even a cheap one to a neighboring country) is recommended.',
    },
    {
      question: 'What if my e-visa application is rejected?',
      answer: 'E-visa rejections are rare but usually caused by poor-quality photos, mismatched passport information, or applicants from restricted countries. If rejected, the $25 fee is not refunded. Double-check all details and reapply, or consider visa on arrival as an alternative.',
    },
    {
      question: 'Can Americans get a visa exemption?',
      answer: 'No. US citizens currently need either an e-visa or visa on arrival. The e-visa ($25, 90 days) is the simplest option for American travelers.',
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
      { '@type': 'ListItem', position: 2, name: 'Visa Guide', item: `${siteConfig.seo.siteUrl}/visa/` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`Vietnam Visa Guide 2025 - E-Visa, Exemptions & Requirements | ${siteConfig.name}`}
        description="Complete Vietnam visa guide: e-visa application, visa exemption countries, visa on arrival, required documents, processing times, and expert tips to avoid common mistakes."
        path="/visa/"
        jsonLd={[faqJsonLd, breadcrumbJsonLd]}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: 'Visa Guide', href: '/visa/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Vietnam Visa Guide
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            Everything you need to know about entering Vietnam -- from e-visa applications to visa exemptions.
            Updated regularly with the latest immigration policy changes.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-flat p-6 text-center">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-display text-lg text-warm-900 mb-1">E-Visa</h3>
            <p className="text-warm-500 text-sm">90 days, single entry</p>
            <span className="badge-primary mt-3">Most Common</span>
          </div>
          <div className="card-flat p-6 text-center">
            <div className="text-3xl mb-3">🛂</div>
            <h3 className="font-display text-lg text-warm-900 mb-1">Visa Exemption</h3>
            <p className="text-warm-500 text-sm">15-45 days, no visa needed</p>
            <span className="badge-accent mt-3">Easiest</span>
          </div>
          <div className="card-flat p-6 text-center">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-display text-lg text-warm-900 mb-1">Visa on Arrival</h3>
            <p className="text-warm-500 text-sm">Pre-approved letter required</p>
            <span className="badge-secondary mt-3">Alternative</span>
          </div>
        </div>

        {/* E-Visa Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">E-Visa (Electronic Visa)</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                The Vietnam e-visa is the most popular option for international travelers. Since August 2023,
                Vietnam extended the e-visa validity to <strong>90 days with single entry</strong>, making it
                significantly more convenient for longer stays.
              </p>

              <h3>How to Apply</h3>
              <ol>
                <li>
                  Visit the official Vietnam Immigration Portal at{' '}
                  <a href="https://evisa.xuatnhapcanh.gov.vn" target="_blank" rel="noopener noreferrer">
                    evisa.xuatnhapcanh.gov.vn
                  </a>
                </li>
                <li>Click &quot;Outside Vietnam &gt; E-visa Issuance&quot; and select &quot;For foreigners&quot;</li>
                <li>Fill in personal information exactly as it appears on your passport</li>
                <li>Upload a passport-style photo (4x6cm, white background) and your passport data page</li>
                <li>Pay the <strong>$25 USD</strong> processing fee online (Visa/Mastercard accepted)</li>
                <li>Receive your e-visa via email within 3 working days</li>
                <li>Print the e-visa and present it at immigration upon arrival</li>
              </ol>

              <h3>Key Details</h3>
              <ul>
                <li><strong>Cost:</strong> $25 USD (non-refundable)</li>
                <li><strong>Validity:</strong> Up to 90 days</li>
                <li><strong>Entry type:</strong> Single entry</li>
                <li><strong>Processing time:</strong> 3 working days (apply at least 1 week before travel)</li>
                <li><strong>Eligible ports of entry:</strong> All international airports, 16 land border crossings, and 13 seaports</li>
              </ul>

              <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 my-6 not-prose">
                <p className="text-brand-accent-800 font-medium text-sm">
                  <strong>Important:</strong> Only use the official government website (evisa.xuatnhapcanh.gov.vn).
                  Many scam websites charge higher fees for the same service. The official fee is exactly $25.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Exemption Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Visa Exemption Countries</h2>
          <div className="prose-custom mb-6">
            <p>
              Citizens of certain countries can enter Vietnam without a visa for a limited period.
              As of 2024, Vietnam has expanded its visa exemption list significantly to boost tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 45-day exemptions */}
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-primary">45 Days</span>
                <h3 className="font-display text-lg text-warm-900">Extended Exemption</h3>
              </div>
              <ul className="space-y-2 text-warm-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  United Kingdom
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  France
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Germany
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Italy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Spain
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Japan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  South Korea
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Denmark, Norway, Sweden, Finland
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Russia
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                  Belarus
                </li>
              </ul>
            </div>

            {/* ASEAN & Others */}
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-accent">14-30 Days</span>
                <h3 className="font-display text-lg text-warm-900">ASEAN & Other Countries</h3>
              </div>
              <ul className="space-y-2 text-warm-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Thailand -- 30 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Singapore -- 30 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Malaysia -- 30 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Indonesia -- 30 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Philippines -- 21 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Cambodia -- 30 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Laos -- 30 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Myanmar -- 14 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Brunei -- 14 days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-600 flex-shrink-0" />
                  Chile -- 90 days (bilateral agreement)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-warm-100 rounded-xl p-4">
            <p className="text-warm-600 text-sm">
              <strong className="text-warm-800">Note:</strong> Visa exemption periods are counted from entry date.
              You must have at least 6 months validity remaining on your passport. Citizens of the USA, Canada,
              Australia, and most other countries not listed above need an e-visa or visa on arrival.
            </p>
          </div>
        </section>

        {/* Visa on Arrival */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Visa on Arrival (VOA)</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Visa on Arrival is available at Vietnam&apos;s international airports (not land borders).
                You need a <strong>pre-approved letter</strong> from a Vietnamese travel agency before you fly.
              </p>

              <h3>VOA Process</h3>
              <ol>
                <li>Apply for a pre-approval letter through a licensed Vietnamese travel agency (typically $20-45 for the letter)</li>
                <li>Receive the approval letter by email (1-2 working days, or same-day for rush processing)</li>
                <li>Print the approval letter and bring 2 passport-sized photos</li>
                <li>Upon arrival at the airport, go to the &quot;Landing Visa&quot; counter before immigration</li>
                <li>Submit your approval letter, photos, and passport</li>
                <li>Pay the stamping fee in cash: <strong>$25 for single entry, $50 for multiple entry</strong></li>
                <li>Wait 15-30 minutes for your visa to be stamped into your passport</li>
              </ol>

              <h3>When to Use VOA Instead of E-Visa</h3>
              <ul>
                <li>If you need <strong>multiple entry</strong> (e-visa is single entry only)</li>
                <li>If you need a stay longer than 90 days</li>
                <li>If your e-visa application was rejected</li>
              </ul>

              <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 my-6 not-prose">
                <p className="text-brand-primary-800 font-medium text-sm">
                  <strong>Tip:</strong> For most travelers, the e-visa is simpler and cheaper.
                  Only choose VOA if you specifically need multiple entry or a longer stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Extension */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Visa Extension & Renewal</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                If you want to stay longer than your visa allows, you can extend your visa while in Vietnam.
                Extensions are handled through travel agencies or directly at the Immigration Department.
              </p>

              <h3>Extension Options</h3>
              <ul>
                <li><strong>Tourist visa extension:</strong> Up to 30 additional days, costs around $50-100 through an agency</li>
                <li><strong>Visa run:</strong> Exit to a neighboring country (Cambodia or Laos are popular) and re-enter with a new e-visa</li>
                <li><strong>Visa conversion:</strong> Convert a tourist visa to a business visa if you have a sponsor</li>
              </ul>

              <h3>Processing Time</h3>
              <p>
                Extensions typically take <strong>5-7 working days</strong>. Apply at least 1 week before your
                current visa expires. Overstaying your visa results in a fine of approximately $25 per day and
                can cause problems at the airport when departing.
              </p>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">For E-Visa</h3>
              <ul className="space-y-3 text-warm-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Passport valid for at least 6 months beyond entry date
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Digital passport photo (4x6cm, white background, no glasses)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scan of passport data page (clear, no glare)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Credit/debit card for $25 payment
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accommodation address in Vietnam (hotel name is sufficient)
                </li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">For Visa on Arrival</h3>
              <ul className="space-y-3 text-warm-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything listed for e-visa, plus:
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Printed pre-approval letter from a travel agency
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2 passport-sized photos (4x6cm, white background)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Completed NA1 form (available at the airport counter)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cash for stamping fee ($25 single / $50 multiple entry)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips & Common Mistakes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Tips & Common Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-3">Do</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Apply at least 7-10 days before your flight</li>
                <li>Triple-check your passport number and personal details</li>
                <li>Use the <strong>official</strong> e-visa website only</li>
                <li>Keep a printed copy plus a digital backup of your visa</li>
                <li>Check your visa entry/exit dates carefully</li>
                <li>Ensure passport has 6+ months validity and 2+ blank pages</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-3">Avoid</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Do not use third-party websites charging $50+ for the same e-visa</li>
                <li>Do not arrive without a printed visa (some airlines require it at check-in)</li>
                <li>Do not overstay your visa -- fines are $25/day and it goes on your record</li>
                <li>Do not submit blurry passport photos (number one cause of rejection)</li>
                <li>Do not assume you are visa-exempt -- always verify current rules</li>
                <li>Do not enter through a land border with a VOA letter (airports only)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processing Times Summary */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Processing Times at a Glance</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">Visa Type</th>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">Processing Time</th>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">Cost</th>
                    <th className="px-6 py-4 font-display text-warm-900 text-sm">Max Stay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-6 py-4 text-warm-700">E-Visa</td>
                    <td className="px-6 py-4 text-warm-600">3 working days</td>
                    <td className="px-6 py-4 text-warm-600">$25</td>
                    <td className="px-6 py-4 text-warm-600">90 days (single entry)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-warm-700">Visa on Arrival</td>
                    <td className="px-6 py-4 text-warm-600">1-2 days (letter) + 30 min at airport</td>
                    <td className="px-6 py-4 text-warm-600">$20-45 (letter) + $25-50 (stamp)</td>
                    <td className="px-6 py-4 text-warm-600">30-90 days (single/multiple)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-warm-700">Visa Exemption</td>
                    <td className="px-6 py-4 text-warm-600">None (automatic at border)</td>
                    <td className="px-6 py-4 text-warm-600">Free</td>
                    <td className="px-6 py-4 text-warm-600">14-45 days (country-dependent)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-warm-700">Visa Extension</td>
                    <td className="px-6 py-4 text-warm-600">5-7 working days</td>
                    <td className="px-6 py-4 text-warm-600">$50-100 (via agency)</td>
                    <td className="px-6 py-4 text-warm-600">+30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ-style closing */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Can I extend my e-visa without leaving Vietnam?</h3>
              <p className="text-warm-600 text-sm">
                Yes, you can extend an e-visa once for an additional 30 days through a travel agency or the
                Immigration Department in major cities (Hanoi, Ho Chi Minh City, Da Nang). Start the process
                at least one week before your visa expires.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Do I need a return ticket to enter Vietnam?</h3>
              <p className="text-warm-600 text-sm">
                Technically yes -- immigration may ask for proof of onward travel. Airlines are more likely to
                check this at boarding. Having a return or onward flight ticket (even a cheap one to a neighboring
                country) is recommended.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">What if my e-visa application is rejected?</h3>
              <p className="text-warm-600 text-sm">
                E-visa rejections are rare but usually caused by poor-quality photos, mismatched passport
                information, or applicants from restricted countries. If rejected, the $25 fee is not refunded.
                Double-check all details and reapply, or consider visa on arrival as an alternative.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Can Americans get a visa exemption?</h3>
              <p className="text-warm-600 text-sm">
                No. US citizens currently need either an e-visa or visa on arrival. The e-visa ($25, 90 days)
                is the simplest option for American travelers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
