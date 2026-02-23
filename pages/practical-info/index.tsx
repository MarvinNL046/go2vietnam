import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function PracticalInfo() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Practical Travel Info for Vietnam - Money, SIM, Safety & Tips | ${siteConfig.name}`}
        description="Essential practical info for Vietnam travelers: currency & ATMs, SIM cards, health & safety, language tips, electricity, culture & etiquette, and emergency contacts."
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: 'Practical Info', href: '/practical-info/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Practical Travel Info for Vietnam
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            All the essential information you need for a smooth trip to Vietnam -- from money and SIM cards
            to cultural etiquette and emergency contacts.
          </p>
        </div>

        {/* Quick Reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">🇻🇳</p>
            <p className="text-warm-400 text-xs">Currency</p>
            <p className="font-display text-warm-900 text-sm">Vietnamese Dong (VND)</p>
          </div>
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">🔌</p>
            <p className="text-warm-400 text-xs">Electricity</p>
            <p className="font-display text-warm-900 text-sm">220V, Type A/C</p>
          </div>
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">🕐</p>
            <p className="text-warm-400 text-xs">Time Zone</p>
            <p className="font-display text-warm-900 text-sm">UTC+7 (ICT)</p>
          </div>
          <div className="card-flat p-4 text-center">
            <p className="text-2xl mb-1">📞</p>
            <p className="text-warm-400 text-xs">Emergency</p>
            <p className="font-display text-warm-900 text-sm">113 / 115</p>
          </div>
        </div>

        {/* Money Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Money & Currency</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Vietnam uses the <strong>Vietnamese Dong (VND)</strong>. The exchange rate is roughly
                <strong> 25,000 VND = $1 USD</strong> (check current rates before traveling). Banknotes
                range from 1,000 to 500,000 VND. The polymer notes (10,000 VND and above) are waterproof.
              </p>

              <h3>Quick Price Conversions</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">10,000 VND</p>
                <p className="font-display text-warm-900">~$0.40</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">50,000 VND</p>
                <p className="font-display text-warm-900">~$2</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">200,000 VND</p>
                <p className="font-display text-warm-900">~$8</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-3 text-center">
                <p className="text-warm-400 text-xs">500,000 VND</p>
                <p className="font-display text-warm-900">~$20</p>
              </div>
            </div>

            <div className="prose-custom">
              <h3>ATMs & Cards</h3>
              <ul>
                <li>ATMs are everywhere in cities. Most accept Visa and Mastercard.</li>
                <li>Withdrawal limits are typically 2,000,000-5,000,000 VND ($80-200) per transaction</li>
                <li>ATM fees range from 22,000-55,000 VND ($0.90-2.20) per withdrawal -- Vietcombank and BIDV tend to have lower fees</li>
                <li>Cards are increasingly accepted in hotels, restaurants, and shops in major cities</li>
                <li>Smaller establishments, street food, and rural areas are <strong>cash only</strong></li>
                <li>Notify your bank of travel plans to avoid card blocks</li>
              </ul>

              <h3>Exchange Tips</h3>
              <ul>
                <li>Exchange at gold shops (tiem vang) for the best rates -- they are everywhere and fully legitimate</li>
                <li>Banks offer decent rates but with longer waits</li>
                <li>Never exchange at airport currency counters (worst rates)</li>
                <li>USD is sometimes accepted for big purchases (hotels, tours) but at poor exchange rates</li>
              </ul>

              <h3>Tipping Culture</h3>
              <p>
                Tipping is not traditionally expected in Vietnam but is appreciated for good service.
                Typical tipping situations:
              </p>
              <ul>
                <li><strong>Restaurants:</strong> Not expected, but rounding up the bill is a nice gesture</li>
                <li><strong>Hotels:</strong> 20,000-50,000 VND for porters or housekeeping</li>
                <li><strong>Tour guides:</strong> 100,000-200,000 VND per day for a good guide</li>
                <li><strong>Spa/massage:</strong> 50,000-100,000 VND if you enjoyed the service</li>
                <li><strong>Grab/taxi:</strong> Not expected</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Language */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Language Basics</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Vietnamese is a tonal language with six tones, making pronunciation tricky for foreigners.
                English is widely spoken in tourist areas, especially by younger Vietnamese. Learning even
                a few words earns enormous goodwill.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-display text-base text-warm-900 mb-3">Essential Phrases</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-warm-600">Hello</span><span className="font-medium text-warm-900">Xin chao <span className="text-warm-400">(sin chow)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Thank you</span><span className="font-medium text-warm-900">Cam on <span className="text-warm-400">(gam ern)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Yes / No</span><span className="font-medium text-warm-900">Vang / Khong <span className="text-warm-400">(vung / kohm)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Sorry</span><span className="font-medium text-warm-900">Xin loi <span className="text-warm-400">(sin loy)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">How much?</span><span className="font-medium text-warm-900">Bao nhieu? <span className="text-warm-400">(bow nyew)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Too expensive</span><span className="font-medium text-warm-900">Dat qua <span className="text-warm-400">(daht gwah)</span></span></li>
                </ul>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h3 className="font-display text-base text-warm-900 mb-3">Food & Drink</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-warm-600">Delicious</span><span className="font-medium text-warm-900">Ngon <span className="text-warm-400">(ngon)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">The bill please</span><span className="font-medium text-warm-900">Tinh tien <span className="text-warm-400">(ting tee-en)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">No spicy</span><span className="font-medium text-warm-900">Khong cay <span className="text-warm-400">(kohm guy)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Beer</span><span className="font-medium text-warm-900">Bia <span className="text-warm-400">(bee-ah)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Coffee</span><span className="font-medium text-warm-900">Ca phe <span className="text-warm-400">(gah feh)</span></span></li>
                  <li className="flex justify-between"><span className="text-warm-600">Water</span><span className="font-medium text-warm-900">Nuoc <span className="text-warm-400">(nook)</span></span></li>
                </ul>
              </div>
            </div>

            <div className="bg-warm-100 rounded-xl p-4 mt-6">
              <p className="text-warm-600 text-sm">
                <strong className="text-warm-800">Tip:</strong> Google Translate works well for Vietnamese and has
                an offline mode. Download the Vietnamese language pack before your trip. The camera
                translation feature is handy for reading menus.
              </p>
            </div>
          </div>
        </section>

        {/* SIM Cards & Internet */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">SIM Cards & Internet</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Vietnam has excellent mobile coverage and fast 4G/5G networks. Getting online is easy and cheap.
                WiFi is available in almost every hotel, cafe, and restaurant.
              </p>

              <h3>Major Mobile Providers</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <h4 className="font-display text-warm-900 mb-1">Viettel</h4>
                <span className="badge-primary text-xs">Best Coverage</span>
                <p className="text-warm-500 text-xs mt-2">Largest network. Best in rural and mountainous areas. Military-owned, widest coverage across Vietnam.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h4 className="font-display text-warm-900 mb-1">Mobifone</h4>
                <span className="badge-accent text-xs">Tourist Friendly</span>
                <p className="text-warm-500 text-xs mt-2">Great tourist SIM packages. Strong coverage in cities and tourist areas.</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <h4 className="font-display text-warm-900 mb-1">Vinaphone</h4>
                <span className="badge-secondary text-xs">Reliable</span>
                <p className="text-warm-500 text-xs mt-2">Good all-round coverage. Competitive pricing. Widely available at airports.</p>
              </div>
            </div>

            <div className="prose-custom">
              <h3>Tourist SIM Prices</h3>
              <ul>
                <li><strong>Airport SIM:</strong> 100,000-200,000 VND ($4-8) for 30 days with 3-6 GB/day</li>
                <li><strong>City phone shop:</strong> 50,000-150,000 VND ($2-6) for similar packages</li>
                <li>Data is typically unlimited or capped at 3-6 GB per day (throttled after)</li>
                <li>Calls and texts within Vietnam are very cheap -- most travelers only need data</li>
              </ul>

              <h3>Getting a SIM</h3>
              <p>
                You can buy a tourist SIM card at the airport upon arrival (look for the Viettel, Mobifone,
                or Vinaphone counters after customs). You will need your <strong>passport</strong> for registration.
                The staff will install and activate it for you. Alternatively, consider an{' '}
                <a href="/esim/">eSIM</a> if your phone supports it -- you can set it up before you even land.
              </p>
            </div>
          </div>
        </section>

        {/* Health & Safety */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Health & Safety</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <h3>Vaccinations</h3>
              <p>
                No vaccinations are legally required to enter Vietnam (unless arriving from a yellow
                fever zone), but the following are <strong>recommended by the CDC and WHO</strong>:
              </p>
              <ul>
                <li><strong>Routine:</strong> MMR, TDAP, Polio, Flu (ensure these are up to date)</li>
                <li><strong>Hepatitis A:</strong> Highly recommended -- spread through contaminated food/water</li>
                <li><strong>Hepatitis B:</strong> Recommended for longer stays</li>
                <li><strong>Typhoid:</strong> Recommended if eating street food (you will want to!)</li>
                <li><strong>Japanese Encephalitis:</strong> Consider if traveling to rural areas during monsoon</li>
                <li><strong>Rabies:</strong> Consider if you plan to rent a motorbike or trek in remote areas</li>
                <li><strong>Malaria:</strong> Low risk in tourist areas. Prophylaxis only needed for remote border regions</li>
              </ul>

              <h3>Water & Food Safety</h3>
              <ul>
                <li><strong>Never drink tap water.</strong> Bottled water is cheap (5,000-10,000 VND) and available everywhere</li>
                <li>Ice in restaurants and cafes is generally safe -- it is commercially produced</li>
                <li>Street food is usually safe if the stall is busy (high turnover = fresh food)</li>
                <li>Carry hand sanitizer and use it before eating</li>
                <li>Mild stomach issues are common the first 2-3 days -- bring Imodium and oral rehydration salts</li>
              </ul>

              <h3>Common Scams to Watch For</h3>
              <ul>
                <li><strong>Taxi meter tricks:</strong> Use Grab or stick to Mai Linh and Vinasun taxis with meters</li>
                <li><strong>Shoe-shine scam:</strong> Someone &quot;accidentally&quot; gets polish on your shoes, then charges to clean them</li>
                <li><strong>Wrong change:</strong> Learn to distinguish 20,000 (blue) from 500,000 (green) notes -- similar colors</li>
                <li><strong>Motorbike &quot;damage&quot;:</strong> Take photos of any rental before riding</li>
                <li><strong>Cyclo overcharging:</strong> Always agree on a price before getting in a cyclo (it is per person, not per trip)</li>
                <li><strong>Fake tours:</strong> Book through reputable operators or your hotel</li>
              </ul>
            </div>

            <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 mt-6 not-prose">
              <h4 className="font-display text-brand-primary-800 text-sm mb-2">Emergency Numbers</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-brand-primary-700 font-medium">113</p>
                  <p className="text-brand-primary-600 text-xs">Police</p>
                </div>
                <div>
                  <p className="text-brand-primary-700 font-medium">115</p>
                  <p className="text-brand-primary-600 text-xs">Ambulance</p>
                </div>
                <div>
                  <p className="text-brand-primary-700 font-medium">114</p>
                  <p className="text-brand-primary-600 text-xs">Fire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electricity */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Electricity</h2>
          <div className="card-flat p-6">
            <div className="prose-custom">
              <p>
                Vietnam uses <strong>220V, 50Hz</strong> electricity. Power outlets accommodate
                <strong> Type A</strong> (two flat pins, like the US) and <strong>Type C</strong> (two round
                pins, like Europe). Many outlets accept both types.
              </p>
              <ul>
                <li><strong>US/Japan travelers:</strong> Your two-pin plugs usually fit without an adapter, but you may need a voltage converter for hair dryers and other heating appliances (110V devices can be damaged by 220V)</li>
                <li><strong>UK/Australian travelers:</strong> You will need a plug adapter for your three-pin plugs</li>
                <li><strong>European travelers:</strong> Your two-round-pin plugs usually fit directly</li>
                <li>Laptops, phones, and most camera chargers are dual-voltage (100-240V) and work fine</li>
                <li>Power outages are rare in cities but occasionally happen in rural areas -- a power bank is useful</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Culture & Etiquette */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Culture & Etiquette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">General Etiquette</h3>
              <ul className="space-y-3 text-warm-600 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Remove shoes</strong> when entering homes, some shops, and temples</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dress modestly</strong> at temples and pagodas -- cover shoulders and knees</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use <strong>both hands</strong> when giving or receiving items (especially from elders)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Do not <strong>touch anyone&apos;s head</strong> -- it is considered the most sacred part of the body</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Avoid <strong>public displays of anger</strong> -- losing your temper causes everyone to lose face</span>
                </li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">Crossing the Street</h3>
              <div className="prose-custom text-sm">
                <p>
                  Crossing the street in Hanoi or Ho Chi Minh City is a rite of passage for every
                  visitor. The secret: <strong>walk slowly and steadily</strong>. Do not stop suddenly
                  or run. The motorbikes will flow around you like water around a rock. Make eye
                  contact with approaching drivers and maintain a predictable pace.
                </p>
                <p className="mt-3">
                  <strong>Never wait for a gap</strong> in traffic -- it will never come. Start
                  walking at a slow, confident pace. Use a local as a shield if you are nervous. Busy
                  intersections with traffic lights are safer if you cross with the green signal (though
                  many motorbikes will ignore the red).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Etiquette */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Photography Etiquette</h2>
          <div className="card-flat p-6">
            <div className="prose-custom">
              <ul>
                <li><strong>Ask before photographing people</strong> -- especially ethnic minorities in Sapa and the highlands. A smile and gesture usually gets a nod of approval.</li>
                <li><strong>No photos inside certain temples</strong> -- look for signs. If unsure, ask.</li>
                <li><strong>Military installations, ports, and border areas</strong> are off-limits for photography</li>
                <li>Vietnamese people are generally friendly about photos and may want selfies with you</li>
                <li>Vendors at markets may expect a small purchase if you photograph their stall</li>
                <li>Drone regulations are strict -- technically you need a permit. Most tourists fly in tourist areas without issues, but use common sense and avoid government buildings</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
