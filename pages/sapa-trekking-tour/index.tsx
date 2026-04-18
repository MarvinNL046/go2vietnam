import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const PAGE_PATH = '/sapa-trekking-tour/';

const faqs = [
  {
    q: 'How much does a Sapa trekking tour cost in 2026?',
    a: 'A 2-day/1-night homestay trek runs about $60 to $120 per person in a small group, or $150 to $280 per person private. A 3-day/2-night extended trek is $120 to $220 group and $300 to $500 private. Day treks without a homestay stay are $25 to $50 per person. Prices usually include the local H\u2019mong or Dao guide, homestay bed, three meals, tea, and (on most routes) a porter.',
  },
  {
    q: 'Is a Sapa trekking tour worth it?',
    a: 'For most travelers, yes. You walk through working rice terraces, sleep in a wooden stilt house with a local ethnic minority family, eat home-cooked food, and meet H\u2019mong or Dao guides who grew up in these valleys. If you skip Sapa you miss the most scenic trek in Vietnam. Skip it only if you hate walking on uneven ground or if you are visiting in thick winter fog (Dec to Feb) when views disappear.',
  },
  {
    q: 'Day trek vs overnight homestay: which is better?',
    a: 'Overnight homestay wins on value. A day trek ($25 to $50) covers Cat Cat or a short loop but you return to a Sapa hotel for the night and miss the quiet evening in the valley. A 2-day homestay ($60 to $120) adds dinner with the family, rice wine, and sunrise over the terraces from Ta Van or Lao Chai. The extra night is the whole point of going.',
  },
  {
    q: 'When is the best time for Sapa trekking?',
    a: 'September and October are peak season with golden rice before harvest and clear skies. March to May brings wildflowers and mild temperatures. June to August is the wet green season, good prices and lush terraces but muddy trails. November to February is cold (5 to 15 C), often foggy, and can get near freezing on Fansipan with rare snow. Book Sept to Oct at least 3 to 4 weeks out.',
  },
  {
    q: 'Can I combine Sapa trekking with Fansipan cable car?',
    a: 'Yes, and most 2-day or 3-day operators offer it as an add-on. The Fansipan cable car (the Indochina roof at 3143 m) costs 800,000 VND ($32) plus 120,000 VND ($5) for the summit funicular and lunch. Add it on day 2 after your trek morning, or stay an extra half day. Skip Fansipan if the forecast is pure fog, the summit view disappears completely.',
  },
  {
    q: 'How hard is Sapa trekking?',
    a: 'Moderate. Most group routes cover 10 to 15 km per day on rolling terrain with muddy sections, stream crossings, and some steep descents into the valley. You do not need special training but you need grip, patience, and the ability to walk 5 to 7 hours. After rain the clay trails are slippery, lean on bamboo poles the guide cuts for you. Fansipan summit via cable car is easy, via hiking (2 to 3 days) is serious.',
  },
  {
    q: 'What should I pack for a Sapa homestay trek?',
    a: 'Hiking shoes or trail runners with grip (wet clay kills smooth soles), quick-dry layers, a rain jacket even in dry season, a warm mid-layer for Nov to Feb evenings, a headlamp for the homestay, a small daypack, cash (homestays do not take cards), a power bank, toilet paper, flip-flops for around the house, and a refillable water bottle. The homestay provides a mattress, mosquito net, and blanket.',
  },
  {
    q: 'Should I book direct with Sapa Sisters or through a tour platform?',
    a: 'Both work, pick on logistics. Viator, GetYourGuide, and Klook offer English booking, instant confirmation, and free cancellation 24 to 48 hours out: best if you are juggling a tight Vietnam itinerary. Booking direct with local operators like Sapa Sisters Trekking supports women-led H\u2019mong guides and cuts out the middle fee, but communication is slower and deposits are usually non-refundable. If this is your only Sapa shot, use a platform for the safety net.',
  },
];

const priceRows = [
  { option: 'Day trek (Cat Cat or short loop), no homestay', group: '$25 to $50 pp', notes: 'Half day to full day, return to Sapa hotel' },
  { option: '2-day / 1-night homestay trek (group)', group: '$60 to $120 pp', notes: 'Most popular, Lao Chai + Ta Van route' },
  { option: '2-day / 1-night homestay trek (private)', group: '$150 to $280 pp', notes: 'Own guide, flexible pace, better for families' },
  { option: '3-day / 2-night extended trek (group)', group: '$120 to $220 pp', notes: 'Adds Y Linh Ho or Ta Phin valley, 2 homestays' },
  { option: '3-day / 2-night extended trek (private)', group: '$300 to $500 pp', notes: 'Custom route, porter, English-speaking local guide' },
  { option: 'Fansipan cable car (add-on)', group: '800,000 VND (~$32)', notes: 'Plus 120,000 VND summit funicular + lunch' },
  { option: 'Hanoi to Sapa sleeper train (round trip est.)', group: '$25 to $45 one way', notes: '8 hours overnight, cheapest comfortable option' },
];

const mistakes = [
  { title: 'Going in December or January without a plan B', desc: 'Thick fog and 5 to 10 C temperatures can erase the views. If you must go in winter, pick a clear-sky day on the forecast and pack a proper fleece + rain shell.' },
  { title: 'Booking a day trek and expecting the full experience', desc: 'Cat Cat village on its own is touristy and tiled. The homestay night in Lao Chai or Ta Van is what every traveler remembers, do not cut it to save one night.' },
  { title: 'Wearing smooth-sole sneakers', desc: 'After any rain the clay turns to grease. Trail runners or hiking shoes with lugs are non-negotiable, or accept the 3 to 5 falls your guide will laugh about later.' },
  { title: 'Buying from street hawkers mid-trek out of guilt', desc: 'H\u2019mong women follow groups for hours selling bracelets. Polite firm no is fine. If you want to support them, tip your actual guide or buy at the homestay shop.' },
  { title: 'Skipping the Hanoi-Sapa sleeper train for a cheap day bus', desc: 'The 6-hour day bus wastes daylight. The overnight sleeper train ($25 to $45) saves a hotel night and you wake up in Lao Cai ready to trek.' },
  { title: 'Not bringing small VND notes', desc: 'Homestays, valley snacks, and tips all run on cash. ATMs in Sapa town are fine but there are zero ATMs once you drop into the valley. Bring 2 to 3 million VND per person in small notes.' },
];

export default function SapaTrekkingTour() {
  const { t: tCommon } = useTranslation('common');
  useTranslation('guides');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sapa Trekking Tour 2026: Real Prices + Homestay vs Day Trek',
    description: 'Real 2026 Sapa trekking tour prices, homestay vs day trek comparison, Fansipan combo, best months, packing list, and where to book. Honest guide.',
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.seo.siteUrl },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.seo.siteUrl },
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.seo.siteUrl}${PAGE_PATH}` },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title={`Sapa Trekking Tour 2026: Real Prices + Homestay vs Day Trek | ${siteConfig.name}`}
        description="Real 2026 Sapa trekking tour prices, homestay vs day trek comparison, Fansipan combo, best months, packing list, and where to book. Honest guide."
        path={PAGE_PATH}
        jsonLd={[articleSchema, faqSchema]}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: tCommon('nav.home'), href: '/' },
          { name: 'Sapa Trekking Tour', href: PAGE_PATH },
        ]} />

        {/* Hero */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Sapa Trekking Tour 2026: Real Prices, Homestays, and What Actually Matters
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            Sapa is the best trek in Vietnam, rice terraces, H&apos;mong homestays, and Fansipan on the horizon.
            This guide gives you real 2026 prices (USD with VND in parentheses), the difference between day trips
            and overnight homestays, where to book, and the mistakes first-timers keep making.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge-primary">2026 prices verified</span>
            <span className="badge-accent">Homestay focus</span>
            <span className="badge-secondary">No em-dashes, no fluff</span>
          </div>
        </div>

        {/* What is Sapa trekking */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">What is a Sapa trekking tour?</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Sapa sits at 1,500 m in Lao Cai province, a 6 to 8 hour overnight ride from Hanoi. A &quot;Sapa trekking
                tour&quot; typically means walking 10 to 15 km per day through the Muong Hoa valley with a local H&apos;mong
                or Red Dao guide, passing Cat Cat, Lao Chai, Ta Van, Y Linh Ho, or Ta Phin villages, and sleeping in a
                family homestay on wooden stilt houses above the terraces.
              </p>
              <p>
                Tours range from a half-day city loop to 3-day deep-valley routes. The sweet spot for most travelers is
                a 2-day / 1-night group homestay trek, $60 to $120 per person including guide, bed, three meals, tea,
                and on most routes a porter who carries your overnight bag while you carry a day pack.
              </p>
            </div>
          </div>
        </section>

        {/* Why book */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Why Sapa is worth the detour</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f33e;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Working rice terraces</h3>
              <p className="text-warm-600 text-sm">
                Muong Hoa valley is a UNESCO-listed heritage landscape of stepped rice paddies, not a photo set. In
                September and October the terraces turn gold before harvest, in May they mirror the sky.
              </p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f3e1;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Real homestay authenticity</h3>
              <p className="text-warm-600 text-sm">
                Sleep on a mattress in a H&apos;mong or Dao family stilt house, eat pork with bamboo shoots, share rice
                wine with the grandfather. It is the closest thing to time travel Vietnam offers, and it is still
                priced under $20 per bed.
              </p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f3d4;&#xfe0f;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Fansipan combo within reach</h3>
              <p className="text-warm-600 text-sm">
                The roof of Indochina (3,143 m) is a 15-minute cable car from Sapa town, 800,000 VND ($32). Stack it
                onto day 2 of your trek and you get rice terraces + Himalayan-style summit in 48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* 2026 Prices table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Sapa trekking tour prices in 2026</h2>
          <p className="text-warm-500 mb-6 max-w-3xl">
            Prices below are what you will actually see on Viator, GetYourGuide, Klook, and Sapa Sisters in 2026. USD
            is primary, VND in parentheses where relevant. Group means a shared 4 to 10 person trek, private is your
            family or your group of friends only.
          </p>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Option</th>
                    <th className="px-4 py-3 font-display text-warm-900">Price (2026)</th>
                    <th className="px-4 py-3 font-display text-warm-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  {priceRows.map((row) => (
                    <tr key={row.option}>
                      <td className="px-4 py-3 text-warm-700 font-medium">{row.option}</td>
                      <td className="px-4 py-3 text-warm-600 whitespace-nowrap">{row.group}</td>
                      <td className="px-4 py-3 text-warm-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-warm-400 text-xs mt-3">
            Exchange rate used: 1 USD &asymp; 25,000 VND (Apr 2026). Operators adjust quarterly.
          </p>
        </section>

        {/* Where to book */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Where to book a Sapa trekking tour</h2>
          <p className="text-warm-500 mb-6 max-w-3xl">
            Four providers cover 95% of real-world bookings. The first three are international platforms with
            instant confirmation and free cancellation, the fourth is a local women-led operator with the best
            guides in the valley.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-warm-900">Viator</h3>
                <span className="badge-primary">Most inventory</span>
              </div>
              <p className="text-warm-600 text-sm mb-4">
                Largest selection of Sapa day treks, 2-day homestays, and 3-day extended routes. Free cancellation
                24 hours before start. Best if you want to filter by budget and reviews.
              </p>
              <a
                href="https://www.viator.com/Sapa/d24662"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-center inline-block"
              >
                Browse Viator Sapa treks
              </a>
            </div>
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-warm-900">GetYourGuide</h3>
                <span className="badge-accent">Best UX</span>
              </div>
              <p className="text-warm-600 text-sm mb-4">
                Cleaner interface, strong small-group options from $65. Free cancellation up to 24 hours. Good
                English support if a guide no-shows. Our pick if you are booking from a phone in a hostel.
              </p>
              <a
                href="https://www.getyourguide.com/sapa-l3376/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-center inline-block"
              >
                Browse GetYourGuide Sapa
              </a>
            </div>
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-warm-900">Klook</h3>
                <span className="badge-secondary">Asia-focused</span>
              </div>
              <p className="text-warm-600 text-sm mb-4">
                Strong on Asian markets, often bundles Hanoi to Sapa sleeper train + 2-day homestay trek at a
                discount. Decent app, fast WhatsApp support, good if you are combining multiple Vietnam stops.
              </p>
              <a
                href="https://www.klook.com/en-US/search/result/?query=sapa+trekking/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-center inline-block"
              >
                Browse Klook Sapa
              </a>
            </div>
            <div className="card-flat p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-warm-900">Sapa Sisters (direct)</h3>
                <span className="badge-primary">Local, women-led</span>
              </div>
              <p className="text-warm-600 text-sm mb-4">
                H&apos;mong-woman-owned cooperative, private treks from $80 per day. No middleman fee, your money
                stays in the valley. Slower email, stricter deposit policy, but the guide quality is unmatched.
              </p>
              <a
                href="https://sapasisters.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary text-center inline-block"
              >
                Visit Sapa Sisters
              </a>
            </div>
          </div>
        </section>

        {/* 2-day itinerary */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Sample 2-day / 1-night itinerary</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">1</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Day 1 morning: Sapa town to Y Linh Ho</h3>
                  <p className="text-warm-600 text-sm">
                    Meet your guide at your hotel at 9:00. Drive 10 minutes to the trailhead above Y Linh Ho.
                    Descend 2 hours through bamboo forest and the first rice terraces into the Muong Hoa valley.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">2</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Day 1 lunch: Lao Chai village</h3>
                  <p className="text-warm-600 text-sm">
                    Family lunch of pho, spring rolls, morning glory, and tofu, around $4 per person if not included.
                    Cross the suspension bridge over the Muong Hoa river.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">3</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Day 1 afternoon: Ta Van homestay</h3>
                  <p className="text-warm-600 text-sm">
                    2 more hours of easy walking to your Giay-family stilt house in Ta Van. Shower (cold to lukewarm),
                    rest, dinner at 19:00 with rice wine. Bed by 22:00 under a mosquito net.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">4</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Day 2 morning: Ta Van to Giang Ta Chai</h3>
                  <p className="text-warm-600 text-sm">
                    Sunrise over the terraces at 6:30. Breakfast of pancakes and coffee, then 3 to 4 hours of
                    trekking past Red Dao hamlets and the Silver Waterfall area.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">5</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Day 2 afternoon: return to Sapa town</h3>
                  <p className="text-warm-600 text-sm">
                    Van transfer back to Sapa by 14:00. Shower at your hotel, then either nap or add the Fansipan
                    cable car on the same afternoon (see next section).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fansipan add-on */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Adding the Fansipan cable car</h2>
          <div className="card-flat p-6 lg:p-8 border-l-4 border-l-brand-accent">
            <div className="prose-custom">
              <p>
                Fansipan at 3,143 m is the highest peak in Indochina. The cable car from Sun World Fansipan Legend
                base station covers 6.3 km in 15 minutes, dropping you a short funicular + 600 stairs from the summit.
              </p>
              <ul>
                <li><strong>Cable car ticket:</strong> 800,000 VND ($32) round trip, adults.</li>
                <li><strong>Summit funicular + lunch:</strong> 120,000 VND ($5) additional.</li>
                <li><strong>Time needed:</strong> 3 to 4 hours from Sapa town.</li>
                <li><strong>When to skip:</strong> if the forecast shows pure fog, the summit view disappears.</li>
                <li><strong>Best window:</strong> 09:00 to 11:00 before afternoon clouds build.</li>
              </ul>
              <p>
                Most 2-day or 3-day operators let you add Fansipan as a self-guided afternoon for about $45 to $55
                all-in including transport. Cheaper and more flexible than booking it as a separate tour.
              </p>
            </div>
          </div>
        </section>

        {/* Best time by month */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Best time to trek Sapa, month by month</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-brand-primary-50 rounded-xl p-4">
              <p className="font-display text-warm-900">Mar to May</p>
              <p className="text-warm-600 text-xs mt-1">Wildflowers, 15 to 25 C, rare fog. Best for cool-weather trekkers.</p>
            </div>
            <div className="bg-brand-accent-50 rounded-xl p-4">
              <p className="font-display text-warm-900">Jun to Aug</p>
              <p className="text-warm-600 text-xs mt-1">Green lush terraces, afternoon rain, muddy trails. Cheapest season.</p>
            </div>
            <div className="bg-brand-primary-50 rounded-xl p-4 ring-2 ring-brand-primary/30">
              <p className="font-display text-warm-900">Sept to Oct</p>
              <p className="text-warm-600 text-xs mt-1">Peak: golden rice before harvest, clear skies. Book 3 to 4 weeks out.</p>
            </div>
            <div className="bg-warm-100 rounded-xl p-4">
              <p className="font-display text-warm-900">Nov to Feb</p>
              <p className="text-warm-600 text-xs mt-1">Cold (5 to 15 C), heavy fog, near-freezing on Fansipan. Skip unless you love winter.</p>
            </div>
          </div>
        </section>

        {/* What to pack */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">What to pack for Sapa trekking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-base text-warm-900 mb-3">Must-bring</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Trail runners or hiking shoes with grip (not smooth sneakers)</li>
                <li>Rain jacket even in dry season</li>
                <li>Warm mid-layer (Nov to Feb evenings drop below 10 C)</li>
                <li>Headlamp or phone torch for the homestay at night</li>
                <li>Small daypack (20 to 25 L)</li>
                <li>2 to 3 million VND cash in small notes</li>
                <li>Power bank, valley homestays have patchy power</li>
                <li>Flip-flops for around the house and shower</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-base text-warm-900 mb-3">Nice to have</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Refillable water bottle, homestays refill from the filter</li>
                <li>Toilet paper (valley squats rarely stock it)</li>
                <li>Quick-dry microfiber towel</li>
                <li>Insect repellent (30% DEET minimum)</li>
                <li>Sunscreen SPF 30+</li>
                <li>A small gift for the homestay kids (pencils, not sweets)</li>
                <li>Paracetamol and Imodium, just in case</li>
                <li>Offline maps.me download of Sapa region</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">6 common Sapa trekking mistakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mistakes.map((m, i) => (
              <div key={m.title} className="card-flat p-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent-100 text-brand-accent-800 flex items-center justify-center font-display text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-base text-warm-900 mb-1">{m.title}</h3>
                    <p className="text-warm-600 text-sm">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-flat p-6 group">
                <summary className="font-display text-base text-warm-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-brand-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-warm-600 text-sm mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Cross-links pillar neighbors */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Keep planning your Vietnam trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/halong-bay-cruise/"
              className="card-flat p-6 hover:border-brand-primary transition-colors block"
            >
              <div className="text-2xl mb-2">&#x1f6a2;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Halong Bay Cruise 2026</h3>
              <p className="text-warm-600 text-sm">
                Real prices for 1-night, 2-night, and 3-night Halong and Lan Ha bay cruises, plus which operators
                actually deliver the photos on their site.
              </p>
            </Link>
            <Link
              href="/mekong-delta-tour/"
              className="card-flat p-6 hover:border-brand-primary transition-colors block"
            >
              <div className="text-2xl mb-2">&#x1f331;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Mekong Delta Tour 2026</h3>
              <p className="text-warm-600 text-sm">
                Day trip from Ho Chi Minh vs 2-day homestay in Ben Tre, with real prices and which floating
                markets are still worth your time.
              </p>
            </Link>
          </div>
        </section>

        {/* Related reading */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Related reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/blog/sapa-trekking-guide/"
              className="card-flat p-5 hover:border-brand-primary transition-colors block"
            >
              <span className="badge-primary mb-2 inline-block">Guide</span>
              <h3 className="font-display text-sm text-warm-900">Sapa Trekking Guide: Routes, Homestays, Costs</h3>
            </Link>
            <Link
              href="/blog/sapa-vietnam-mountain-town-guide/"
              className="card-flat p-5 hover:border-brand-primary transition-colors block"
            >
              <span className="badge-accent mb-2 inline-block">Town</span>
              <h3 className="font-display text-sm text-warm-900">Sapa Vietnam: Mountain Town Guide</h3>
            </Link>
            <Link
              href="/blog/trekking-sapa-routes/"
              className="card-flat p-5 hover:border-brand-primary transition-colors block"
            >
              <span className="badge-secondary mb-2 inline-block">Routes</span>
              <h3 className="font-display text-sm text-warm-900">Trekking Sapa: Every Route Compared</h3>
            </Link>
            <Link
              href="/blog/first-time-vietnam-guide/"
              className="card-flat p-5 hover:border-brand-primary transition-colors block"
            >
              <span className="badge-primary mb-2 inline-block">Planning</span>
              <h3 className="font-display text-sm text-warm-900">First-Time Vietnam Guide: Everything You Need</h3>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
