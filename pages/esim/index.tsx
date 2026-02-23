import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function EsimGuide() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`eSIM for Vietnam - Best Plans, Setup Guide & Providers | ${siteConfig.name}`}
        description="Get connected instantly in Vietnam with an eSIM. Compare providers, plans, and prices. Setup guide, coverage info, and comparison with local SIM cards and pocket WiFi."
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: 'eSIM for Vietnam', href: '/esim/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            eSIM for Vietnam
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            Stay connected from the moment you land. An eSIM lets you set up a Vietnamese data plan
            before you even board your flight -- no SIM swapping, no queuing at airport counters.
          </p>
        </div>

        {/* What is eSIM */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">What Is an eSIM?</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                An eSIM (embedded SIM) is a digital SIM card built into modern smartphones. Instead of
                inserting a physical SIM card, you simply scan a QR code or download a profile to activate
                a data plan. Your phone can hold multiple eSIM profiles, so you can keep your home number
                active while using a Vietnamese data plan.
              </p>
              <h3>Why Use an eSIM for Vietnam?</h3>
              <ul>
                <li><strong>Instant activation:</strong> Buy and set up before your flight. You are online the moment you land.</li>
                <li><strong>No physical SIM:</strong> No need to find a shop, swap tiny SIM cards, or worry about losing your home SIM</li>
                <li><strong>Keep your home number:</strong> Your regular SIM stays active for calls and texts (eSIM provides data)</li>
                <li><strong>Easy top-up:</strong> Add more data through the provider&apos;s app without visiting a store</li>
                <li><strong>Works in multiple countries:</strong> Many eSIM plans cover all of Southeast Asia, perfect if you are hopping between countries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Provider */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Recommended eSIM Provider</h2>
          <div className="card-flat p-6 lg:p-8 border-2 border-brand-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-xl text-warm-900">Saily</h3>
                  <span className="badge-primary">Recommended</span>
                </div>
                <p className="text-warm-500 text-sm">
                  Created by the team behind NordVPN, Saily offers reliable eSIM plans for Vietnam with
                  competitive pricing, excellent app experience, and responsive customer support.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="text-warm-400 text-xs mb-1">1 GB / 7 days</p>
                <p className="font-display text-xl text-warm-900">~$4</p>
                <p className="text-warm-400 text-xs mt-1">Light browsing & maps</p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-4 ring-2 ring-brand-primary/20">
                <p className="text-warm-400 text-xs mb-1">3 GB / 30 days</p>
                <p className="font-display text-xl text-warm-900">~$7</p>
                <p className="text-brand-primary text-xs mt-1 font-medium">Most popular</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="text-warm-400 text-xs mb-1">10 GB / 30 days</p>
                <p className="font-display text-xl text-warm-900">~$15</p>
                <p className="text-warm-400 text-xs mt-1">Heavy use & hotspot</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.affiliateLinks.esim}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Get Your Vietnam eSIM
              </a>
              <p className="text-warm-400 text-xs self-center">
                Plans and prices may vary. Check current offerings on the Saily website.
              </p>
            </div>
          </div>
        </section>

        {/* Other Providers */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Other eSIM Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Airalo</h3>
              <span className="badge-secondary mb-3">Popular</span>
              <p className="text-warm-600 text-sm mt-3">
                Large marketplace of eSIM plans from local carriers. Vietnam plans start from around
                $5 for 1 GB. Easy-to-use app with wide device support.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>Pros: Many plan options, regional plans available</li>
                <li>Cons: Slightly higher prices than direct carrier plans</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Holafly</h3>
              <span className="badge-accent mb-3">Unlimited Data</span>
              <p className="text-warm-600 text-sm mt-3">
                Offers unlimited data plans for Vietnam (throttled after fair use). Great for heavy
                data users who do not want to worry about limits. Higher price point.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>Pros: Unlimited data, no surprise charges</li>
                <li>Cons: More expensive, speed may be throttled</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Nomad</h3>
              <span className="badge-secondary mb-3">Affordable</span>
              <p className="text-warm-600 text-sm mt-3">
                Budget-friendly eSIM with Vietnam and regional Asia plans. Good value for shorter
                trips. Simple purchasing process through their website.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>Pros: Competitive pricing, no app required</li>
                <li>Cons: Fewer plan options, basic support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Coverage in Vietnam</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Vietnam has excellent mobile network coverage across the country. eSIM providers typically
                connect to one of Vietnam&apos;s three major networks: <strong>Viettel</strong>,{' '}
                <strong>Mobifone</strong>, or <strong>Vinaphone</strong>.
              </p>
              <h3>Where You Can Expect Good Coverage</h3>
              <ul>
                <li><strong>Cities and towns:</strong> Excellent 4G/LTE coverage (often 5G in Hanoi and HCMC)</li>
                <li><strong>Tourist areas:</strong> Ha Long Bay, Hoi An, Da Nang, Nha Trang -- all have strong coverage</li>
                <li><strong>Major highways:</strong> Coverage along the entire north-south corridor</li>
                <li><strong>Islands:</strong> Phu Quoc, Cat Ba, Con Dao have decent coverage</li>
              </ul>
              <h3>Where Coverage May Be Weak</h3>
              <ul>
                <li><strong>Remote mountain areas:</strong> Parts of the Ha Giang Loop, deep in Sapa trekking routes</li>
                <li><strong>Caves and underground:</strong> No coverage inside Phong Nha caves (obviously)</li>
                <li><strong>Remote islands:</strong> Some smaller islands in Ha Long Bay</li>
              </ul>
              <p>
                Overall, Vietnam&apos;s mobile infrastructure is among the best in Southeast Asia. You should
                not have connectivity issues in any area where tourists typically visit.
              </p>
            </div>
          </div>
        </section>

        {/* How to Set Up */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">How to Set Up Your eSIM</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">1</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Check Compatibility</h3>
                  <p className="text-warm-600 text-sm">
                    Make sure your phone supports eSIM. Most phones from 2019 onward do, including iPhone XS/XR
                    and newer, Samsung Galaxy S20+, Google Pixel 3+, and many others. Your phone must also be
                    <strong> carrier-unlocked</strong>.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">2</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Purchase Your Plan</h3>
                  <p className="text-warm-600 text-sm">
                    Buy a Vietnam eSIM plan from your chosen provider. You will receive a QR code by email
                    or in the provider&apos;s app. Do this <strong>before your trip</strong> while you still have WiFi.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">3</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Install the eSIM</h3>
                  <p className="text-warm-600 text-sm">
                    On iPhone: Settings &gt; Cellular &gt; Add eSIM &gt; Scan QR Code.
                    On Android: Settings &gt; Network &gt; SIMs &gt; Add eSIM. Scan the QR code provided.
                    Label it &quot;Vietnam Travel&quot; for easy identification.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">4</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Activate on Arrival</h3>
                  <p className="text-warm-600 text-sm">
                    Some eSIMs activate automatically when your phone detects a Vietnamese network. Others
                    activate on a set date. Enable the eSIM line and turn on data roaming for that line.
                    Keep your home SIM active for calls/texts if you want.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 mt-6">
              <p className="text-brand-accent-800 font-medium text-sm">
                <strong>Pro tip:</strong> Install your eSIM before leaving home, but do not activate it yet.
                Most plans start counting validity from the moment they first connect to a network.
                This way you are ready to go the second you land in Vietnam.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">eSIM vs Local SIM vs Pocket WiFi</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Feature</th>
                    <th className="px-4 py-3 font-display text-warm-900">eSIM</th>
                    <th className="px-4 py-3 font-display text-warm-900">Local SIM</th>
                    <th className="px-4 py-3 font-display text-warm-900">Pocket WiFi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Setup time</td>
                    <td className="px-4 py-3 text-warm-600">5 minutes (at home)</td>
                    <td className="px-4 py-3 text-warm-600">15-30 min (at airport)</td>
                    <td className="px-4 py-3 text-warm-600">Pickup/delivery required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Cost (30 days)</td>
                    <td className="px-4 py-3 text-warm-600">$4-15</td>
                    <td className="px-4 py-3 text-warm-600">$2-8</td>
                    <td className="px-4 py-3 text-warm-600">$30-60</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Keep home number</td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">Yes</span></td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">Need dual SIM</span></td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">Yes</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Local phone number</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">Usually no</span></td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">Yes</span></td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">No</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Multiple devices</td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-medium">Via hotspot</span></td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-medium">Via hotspot</span></td>
                    <td className="px-4 py-3"><span className="text-green-600 font-medium">Yes (5-10)</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Battery impact</td>
                    <td className="px-4 py-3 text-warm-600">None (built-in)</td>
                    <td className="px-4 py-3 text-warm-600">None</td>
                    <td className="px-4 py-3 text-warm-600">Extra device to charge</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Best for</td>
                    <td className="px-4 py-3 text-warm-600">Solo travelers, convenience</td>
                    <td className="px-4 py-3 text-warm-600">Long stays, local calls</td>
                    <td className="px-4 py-3 text-warm-600">Families, groups</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Tips for Staying Connected</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-3">Save Data</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Download Google Maps offline maps for Vietnam before your trip</li>
                <li>Pre-download Netflix/Spotify content on hotel WiFi</li>
                <li>Use Grab rather than Google Maps for navigation (uses less data)</li>
                <li>Turn off automatic app updates and cloud photo syncing on cellular</li>
                <li>Use WiFi at cafes for video calls and heavy uploads</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-3">Stay Safe Online</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Use a VPN if you need to access sites blocked in Vietnam (some social media content)</li>
                <li>Avoid online banking on public WiFi networks</li>
                <li>Vietnam censors some websites -- a VPN solves this</li>
                <li>WhatsApp, Messenger, and most messaging apps work fine without a VPN</li>
                <li>Facebook, Instagram, and YouTube are accessible (unlike some neighboring countries)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="bg-brand-secondary-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-white mb-4">Get Connected Before You Fly</h2>
            <p className="text-warm-400 mb-6 max-w-xl mx-auto">
              Set up your Vietnam eSIM today and arrive with data ready to go.
              No queues, no SIM swapping, no hassle.
            </p>
            <a
              href={siteConfig.affiliateLinks.esim}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Get Your eSIM from Saily
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
