import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function TravelInsurance() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Travel Insurance for Vietnam - What You Need & Why | ${siteConfig.name}`}
        description="Why you need travel insurance for Vietnam, what to look for, common claims, recommended coverage amounts, healthcare info, and tips for filing claims."
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: 'Travel Insurance', href: '/travel-insurance/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Travel Insurance for Vietnam
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            Vietnam is generally safe for travelers, but accidents happen, flights get cancelled, and
            phones get stolen. Good travel insurance turns a potential trip-ruining disaster into a
            manageable inconvenience.
          </p>
        </div>

        {/* Why You Need It */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Why You Need Travel Insurance for Vietnam</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                While Vietnam is a relatively affordable country, medical costs for tourists can escalate
                quickly -- especially if you need hospital treatment, surgery, or medical evacuation.
                Without insurance, you could face bills in the tens of thousands of dollars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">🏥</p>
                <p className="font-display text-warm-900 text-sm">Hospital Stay</p>
                <p className="text-warm-500 text-xs mt-1">$500-2,000/night at international hospitals</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">🚁</p>
                <p className="font-display text-warm-900 text-sm">Medical Evacuation</p>
                <p className="text-warm-500 text-xs mt-1">$10,000-100,000+ to home country</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">🏍️</p>
                <p className="font-display text-warm-900 text-sm">Motorbike Accident</p>
                <p className="text-warm-500 text-xs mt-1">$2,000-20,000 for treatment</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">✈️</p>
                <p className="font-display text-warm-900 text-sm">Trip Cancellation</p>
                <p className="text-warm-500 text-xs mt-1">Lost flights, hotels, tours</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">What to Look For in a Policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-4">Must-Have Coverage</h3>
              <ul className="space-y-3 text-warm-600 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Medical coverage:</strong> Minimum $100,000 -- $250,000+ recommended. Covers hospitalization, surgery, doctor visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Emergency evacuation:</strong> Minimum $100,000. Covers air ambulance to nearest adequate hospital or home country</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Trip cancellation/interruption:</strong> Reimburses non-refundable costs if your trip is cancelled or cut short</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Personal belongings:</strong> Covers theft or loss of luggage, electronics, and valuables</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>24/7 assistance hotline:</strong> English-speaking support for emergencies</span>
                </li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-4">Vietnam-Specific Considerations</h3>
              <ul className="space-y-3 text-warm-600 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>Motorbike/scooter coverage:</strong> Many policies exclude motorbike injuries. If you plan to ride, confirm your policy covers it -- ideally even without an IDP</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>Adventure activities:</strong> Trekking, kayaking, diving, rock climbing -- check if your standard policy covers these or if you need an add-on</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>Natural disaster coverage:</strong> Typhoons can disrupt travel September-November. Ensure weather-related cancellations are covered</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>Theft/pickpocketing:</strong> Bag snatching from motorbikes is common in HCMC. Check theft coverage limits and reporting requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span><strong>Flight delays:</strong> Domestic flights in Vietnam are frequently delayed, especially during rainy season</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Healthcare in Vietnam */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Healthcare in Vietnam</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <h3>Hospitals</h3>
              <p>
                Vietnam has a two-tier healthcare system. <strong>Public hospitals</strong> are affordable but
                often crowded, with limited English-speaking staff. <strong>Private and international hospitals</strong>{' '}
                offer Western-standard care with English-speaking doctors, but at significantly higher prices.
              </p>
              <h3>International Hospitals (Recommended for Tourists)</h3>
              <ul>
                <li><strong>FV Hospital (HCMC):</strong> French-Vietnamese hospital, widely regarded as the best in southern Vietnam</li>
                <li><strong>Vinmec (Hanoi, HCMC, Da Nang, Nha Trang):</strong> Modern hospital chain with international standards</li>
                <li><strong>Hanoi French Hospital:</strong> Well-established international hospital in Hanoi</li>
                <li><strong>Family Medical Practice:</strong> Expat-focused clinics in Hanoi and HCMC, excellent for non-emergency care</li>
              </ul>

              <h3>Pharmacies</h3>
              <p>
                Pharmacies (<em>nha thuoc</em>) are on nearly every street in Vietnam. Many medications that
                require prescriptions in Western countries are available over the counter. Pharmacists can
                often recommend treatments for common ailments. Prices are very affordable -- antibiotics
                might cost $2-5, and common painkillers pennies.
              </p>

              <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 my-6 not-prose">
                <p className="text-brand-accent-800 font-medium text-sm">
                  <strong>Important:</strong> Bring any prescription medications you need with you, along with
                  a copy of the prescription. Some specific brands or formulations may not be available in Vietnam,
                  and counterfeit medications exist (buy from reputable pharmacies only).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Claims */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Most Common Insurance Claims in Vietnam</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">🏍️</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Motorbike Accidents</h3>
              <p className="text-warm-600 text-sm">
                The number one cause of insurance claims for Vietnam travelers. From minor scrapes to
                serious injuries. Road rash, broken bones, and head injuries are common. Always wear
                a helmet, and ensure your policy covers motorbike use.
              </p>
              <p className="text-warm-400 text-xs mt-3">Typical claim: $500-15,000</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">🤢</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Food Poisoning & Illness</h3>
              <p className="text-warm-600 text-sm">
                Stomach issues are common, especially in the first few days. Most cases are mild,
                but severe food poisoning or infections like dengue fever can require hospitalization.
                Travel diarrhea is extremely common.
              </p>
              <p className="text-warm-400 text-xs mt-3">Typical claim: $100-3,000</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Theft & Bag Snatching</h3>
              <p className="text-warm-600 text-sm">
                Phone snatching from motorbikes is unfortunately common in HCMC and tourist areas.
                Keep phones in secure pockets, avoid using your phone while walking near busy roads,
                and use a crossbody bag held away from the street side.
              </p>
              <p className="text-warm-400 text-xs mt-3">Typical claim: $200-1,500</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">✈️</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Flight Delays & Cancellations</h3>
              <p className="text-warm-600 text-sm">
                Domestic flights are frequently delayed, especially during monsoon and typhoon season.
                Delays of 2-6 hours are not uncommon. International flight connections can be missed
                as a result.
              </p>
              <p className="text-warm-400 text-xs mt-3">Typical claim: $100-500</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">🧳</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Lost or Delayed Luggage</h3>
              <p className="text-warm-600 text-sm">
                Luggage issues can occur on domestic flights and especially on budget airlines. Keep
                essentials (medications, electronics, change of clothes) in your carry-on.
              </p>
              <p className="text-warm-400 text-xs mt-3">Typical claim: $200-1,000</p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">🦟</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Dengue Fever</h3>
              <p className="text-warm-600 text-sm">
                Mosquito-borne dengue is present in Vietnam, especially during wet season.
                Symptoms include high fever, severe headache, and joint pain. Most cases resolve
                in a week, but severe dengue requires hospitalization.
              </p>
              <p className="text-warm-400 text-xs mt-3">Typical claim: $500-5,000</p>
            </div>
          </div>
        </section>

        {/* Recommended Coverage */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Recommended Coverage Amounts</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Coverage Type</th>
                    <th className="px-4 py-3 font-display text-warm-900">Minimum</th>
                    <th className="px-4 py-3 font-display text-warm-900">Recommended</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Medical expenses</td>
                    <td className="px-4 py-3 text-warm-600">$100,000</td>
                    <td className="px-4 py-3 text-warm-600">$250,000+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Emergency evacuation</td>
                    <td className="px-4 py-3 text-warm-600">$100,000</td>
                    <td className="px-4 py-3 text-warm-600">$300,000+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Trip cancellation</td>
                    <td className="px-4 py-3 text-warm-600">$2,000</td>
                    <td className="px-4 py-3 text-warm-600">Total trip cost</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Personal belongings</td>
                    <td className="px-4 py-3 text-warm-600">$1,000</td>
                    <td className="px-4 py-3 text-warm-600">$2,000-3,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Flight delay (per 6-12 hours)</td>
                    <td className="px-4 py-3 text-warm-600">$100</td>
                    <td className="px-4 py-3 text-warm-600">$200-500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips for Filing Claims */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Tips for Filing Claims</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">1</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Document Everything Immediately</h3>
                  <p className="text-warm-600 text-sm">
                    Take photos of injuries, damaged property, accident scenes, and receipts.
                    The more documentation you have, the smoother the claims process will be.
                    Keep all medical reports, police reports, and receipts in both digital and paper form.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">2</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">File a Police Report for Theft</h3>
                  <p className="text-warm-600 text-sm">
                    For any theft claim, you need a police report. Go to the nearest police station
                    within 24 hours. The report does not need to be in English -- your insurance company
                    will accept the Vietnamese document. Ask for the report number and a stamped copy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">3</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Contact Your Insurer ASAP</h3>
                  <p className="text-warm-600 text-sm">
                    Most policies require you to notify them within 24-48 hours of an incident. For
                    medical emergencies, call the 24/7 assistance hotline before going to the hospital
                    if possible -- they can direct you to a network hospital and guarantee payment directly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">4</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Keep All Receipts</h3>
                  <p className="text-warm-600 text-sm">
                    Save every receipt -- medical bills, pharmacy purchases, taxi rides to the hospital,
                    replacement items for stolen belongings, extra hotel nights due to delays. Even small
                    amounts add up and are typically reimbursable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">5</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Get Written Medical Reports</h3>
                  <p className="text-warm-600 text-sm">
                    Before leaving the hospital or clinic, request a detailed medical report in English
                    (international hospitals provide these automatically). Include diagnosis, treatment
                    given, medications prescribed, and follow-up recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Providers */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Popular Travel Insurance Providers</h2>
          <div className="prose-custom mb-6">
            <p>
              Here are some well-known providers that offer policies covering Vietnam. Compare quotes
              from multiple providers to find the best coverage for your specific trip.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">World Nomads</h3>
              <span className="badge-primary mb-3">Backpackers</span>
              <p className="text-warm-600 text-sm mt-3">
                Popular with backpackers and adventure travelers. Good coverage for activities like
                trekking and motorbiking. Can buy and extend while already traveling. Two plan levels.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">SafetyWing</h3>
              <span className="badge-accent mb-3">Digital Nomads</span>
              <p className="text-warm-600 text-sm mt-3">
                Subscription-based travel insurance ideal for long-term travelers and remote workers.
                Monthly payments, no end date required. Covers 185 countries. More affordable for
                extended stays.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Allianz / AXA / Generali</h3>
              <span className="badge-secondary mb-3">Traditional</span>
              <p className="text-warm-600 text-sm mt-3">
                Major international insurers with comprehensive policies. Often available through
                comparison sites. Good for families and those wanting maximum coverage limits. Check
                local availability in your country.
              </p>
            </div>
          </div>
        </section>

        {/* Final Tips */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Final Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-base text-warm-900 mb-3">Before Your Trip</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Buy insurance as soon as you book your trip (covers pre-departure cancellation)</li>
                <li>Read the policy document carefully -- especially exclusions</li>
                <li>Save the emergency assistance number in your phone contacts</li>
                <li>Keep a digital copy of your policy in cloud storage and email</li>
                <li>Check if your credit card provides any travel insurance benefits</li>
                <li>Declare any pre-existing medical conditions</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-base text-warm-900 mb-3">During Your Trip</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Carry your policy number and emergency number at all times</li>
                <li>Keep receipts for all expenses that might be claimable</li>
                <li>Report incidents to police/airlines within required timeframes</li>
                <li>Take photos/videos as evidence for any incident</li>
                <li>Do not admit liability in any accident before speaking to your insurer</li>
                <li>Use the insurer&apos;s network hospitals when possible for direct billing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="bg-warm-100 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-warm-900 mb-4">Protect Your Vietnam Adventure</h2>
            <p className="text-warm-500 mb-6 max-w-xl mx-auto">
              Compare travel insurance policies from multiple providers to find the best coverage
              for your trip. The small cost of insurance is nothing compared to the peace of mind it provides.
            </p>
            <p className="text-warm-400 text-sm">
              Research providers like World Nomads, SafetyWing, Allianz, or check comparison sites
              like Squaremouth or InsureMyTrip for quotes tailored to your trip.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
