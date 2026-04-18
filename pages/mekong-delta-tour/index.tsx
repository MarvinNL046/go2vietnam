import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';

const faqs = [
  {
    q: 'How much does a Mekong Delta tour cost in 2026?',
    a: 'A standard group day tour from Ho Chi Minh City to My Tho and Ben Tre runs $25 to $45 per person (roughly 625,000 to 1,125,000 VND) and includes bus transfer, boat, lunch and an English speaking guide. A 2 day, 1 night tour into Cai Be and Vinh Long costs $60 to $130 per person. A 3 day extension through Can Tho and Chau Doc is $150 to $280 per person. A luxury Bassac or Victoria cruise sits at $250 to $500 per person per night.',
  },
  {
    q: 'Is a day tour enough, or should I book multi-day?',
    a: 'A day tour works if you only have 24 hours free in Ho Chi Minh City and just want to tick the Mekong off the list. You will see My Tho, take a short boat ride, visit a coconut candy workshop and eat lunch. You will not see a real floating market on a day tour because Cai Rang, the biggest one, is 170km away in Can Tho. If the floating market is the reason you are going, book a 2 day tour to Can Tho minimum.',
  },
  {
    q: 'Which is the best floating market in the Mekong Delta?',
    a: 'Cai Rang in Can Tho is the best by a wide margin in 2026. It is the largest wholesale floating market left in the delta, runs from around 5:30am to 8:00am, and still has 200 to 300 boats trading fruit, vegetables and rice on peak mornings. Phong Dien, also near Can Tho, is smaller and quieter and good for photography. Cai Be, near Vinh Long, has declined badly since the bridges opened and is now mostly tourist boats with very few real traders.',
  },
  {
    q: 'Cai Rang vs Cai Be, which should I pick?',
    a: 'Pick Cai Rang if you want a genuine working floating market with real traders. Pick Cai Be only if you are already on a Vinh Long or Cai Be itinerary and do not have time to add Can Tho. Cai Be in 2026 is around 80% tourist boats and 20% traders, while Cai Rang is still the opposite. The extra 2 to 3 hours of driving from HCMC to Can Tho is worth it.',
  },
  {
    q: 'Is the Mekong Delta actually worth visiting?',
    a: 'Yes, but manage expectations. The Mekong Delta is not Halong Bay scenery, it is flat farmland, rivers and rural villages. It is worth visiting for the floating markets, the fruit orchards, the coconut and rice noodle workshops and the slow river life you cannot see anywhere else in Vietnam. Skip it if you only want dramatic landscapes, go if you want culture and food.',
  },
  {
    q: 'When is the best time to visit the Mekong Delta?',
    a: 'December to April is dry season and the easiest time to travel, with clear skies and low humidity. June to October is wet season but not as bad as it sounds, the rain usually falls in short afternoon bursts and the delta actually looks greener and fuller. Late September to November is flood season, when Sa Dec flower village is prepping for Tet and the rice fields around Chau Doc flood in a way locals actually find beautiful.',
  },
  {
    q: 'What is included in a typical Mekong Delta tour?',
    a: 'Standard inclusions are round trip bus transfer from your HCMC hotel, an English speaking guide, boat rides, entrance fees to workshops like coconut candy and rice paper, lunch with local dishes such as elephant ear fish, and bottled water. Drinks other than water, tips, hammock rides and optional horse cart rides are usually not included. Always confirm pickup location and lunch before you book.',
  },
  {
    q: 'Can Tho vs My Tho, which base is better?',
    a: 'My Tho is 2 hours from HCMC and fine for a quick day trip, but it has no real floating market and the river there feels commercial. Can Tho is 3.5 hours from HCMC, has Cai Rang and Phong Dien floating markets, better hotels, a riverfront night market and a much more authentic delta feel. For anything more than a day trip, Can Tho is the better base.',
  },
];

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mekong Delta Tour 2026: Day Trip vs Multi-Day, Where to Book',
  description:
    'Complete 2026 guide to Mekong Delta tours from Ho Chi Minh City. Real prices, day trip vs multi-day math, best floating markets ranked, Can Tho deep dive and where to book.',
  author: {
    '@type': 'Organization',
    name: 'Go2Vietnam',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Go2Vietnam',
  },
  datePublished: '2026-04-18',
  dateModified: '2026-04-18',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://go2-vietnam.com/mekong-delta-tour/',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function MekongDeltaTour() {
  return (
    <>
      <SEOHead
        title="Mekong Delta Tour 2026: Day Trip vs Multi-Day, Where to Book | Go2Vietnam"
        description="Real 2026 Mekong Delta tour prices from HCMC. Day trip vs multi-day math, Cai Rang vs Cai Be floating markets, Can Tho deep dive, best time to go and where to book."
        path="/mekong-delta-tour/"
        jsonLd={[articleJsonLd, faqJsonLd]}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Mekong Delta Tour', href: '/mekong-delta-tour/' },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <span className="inline-block bg-brand-primary-50 text-brand-primary-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            Updated April 2026
          </span>
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Mekong Delta Tour From Ho Chi Minh City: 2026 Prices, Floating Markets and Where to Book
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            A no fluff 2026 guide to booking a Mekong Delta tour. Real day trip and
            multi day prices in USD and VND, which floating markets are still
            worth going to, why Can Tho beats My Tho and the 6 mistakes first
            time visitors keep making.
          </p>
        </div>

        {/* What is the Mekong Delta */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            What is the Mekong Delta?
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                The Mekong Delta is the vast lowland region in southern Vietnam
                where the Mekong River splits into nine branches and empties
                into the South China Sea. It covers roughly 40,500 km2 across
                13 provinces, is home to about 17 million people and produces
                more than half of Vietnam rice and around 70% of its fruit.
              </p>
              <p>
                For travellers, the delta is a network of rivers, canals,
                orchards, floating markets and small rural towns that sit 2 to
                4 hours south of Ho Chi Minh City. It is not a single place you
                visit. It is a region you pick 1 or 2 bases in. The most
                popular are My Tho and Ben Tre for short trips, Can Tho for
                floating markets and Chau Doc near the Cambodian border for
                longer loops.
              </p>
            </div>
          </div>
        </section>

        {/* Why book a tour */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Why book a Mekong Delta tour instead of going solo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f6a3;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">
                Floating markets are hard to reach solo
              </h3>
              <p className="text-warm-600 text-sm">
                Cai Rang in Can Tho starts at 5:30am. You need a local boat
                captain who knows where the trader boats cluster. Walk up
                prices at the pier are 3 to 4x what a tour pays, and most solo
                travellers end up at Cai Be because it is easier, which is
                the wrong market.
              </p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f965;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">
                Coconut and fruit factories are behind the scenes
              </h3>
              <p className="text-warm-600 text-sm">
                The coconut candy workshops in Ben Tre, the rice paper mills
                outside Cai Be and the brick kilns near Vinh Long are working
                family businesses. You do not find them on Google Maps. Tours
                have standing relationships with specific families and that is
                where you get to taste and see the actual process.
              </p>
            </div>
            <div className="card-flat p-6">
              <div className="text-2xl mb-3">&#x1f6fa;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">
                Rural Vietnam is logistically messy
              </h3>
              <p className="text-warm-600 text-sm">
                Public buses to Can Tho run, but once you arrive you still
                need a homestay, a boat and a driver. Private transport from
                HCMC is $120 to $200 for the day. A $30 group tour handles all
                of that, plus lunch. Solo only makes sense if you have 3+
                days and speak some Vietnamese.
              </p>
            </div>
          </div>
        </section>

        {/* 2026 prices table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            2026 Mekong Delta tour prices
          </h2>
          <p className="text-warm-500 mb-6 max-w-3xl">
            Prices below are per person, based on April 2026 rates from
            Klook, GetYourGuide, Viator, TNK Travel and Sinh Tourist. USD is
            primary, VND in parentheses at roughly 25,000 VND per USD.
          </p>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Tour type</th>
                    <th className="px-4 py-3 font-display text-warm-900">Route</th>
                    <th className="px-4 py-3 font-display text-warm-900">Duration</th>
                    <th className="px-4 py-3 font-display text-warm-900">Price per person</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Group day tour</td>
                    <td className="px-4 py-3 text-warm-600">My Tho + Ben Tre</td>
                    <td className="px-4 py-3 text-warm-600">8 hours, 1 day</td>
                    <td className="px-4 py-3 text-warm-600">$25 to $45 (625k to 1,125k VND)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">2 day 1 night</td>
                    <td className="px-4 py-3 text-warm-600">Cai Be + Vinh Long homestay</td>
                    <td className="px-4 py-3 text-warm-600">2 days</td>
                    <td className="px-4 py-3 text-warm-600">$60 to $130 (1.5M to 3.25M VND)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">3 day extended</td>
                    <td className="px-4 py-3 text-warm-600">Can Tho + Chau Doc</td>
                    <td className="px-4 py-3 text-warm-600">3 days</td>
                    <td className="px-4 py-3 text-warm-600">$150 to $280 (3.75M to 7M VND)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Luxury cruise</td>
                    <td className="px-4 py-3 text-warm-600">Bassac or Victoria Mekong</td>
                    <td className="px-4 py-3 text-warm-600">2 days, 1 night</td>
                    <td className="px-4 py-3 text-warm-600">$250 to $500 (6.25M to 12.5M VND)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Private car + driver</td>
                    <td className="px-4 py-3 text-warm-600">Custom day from HCMC</td>
                    <td className="px-4 py-3 text-warm-600">1 day, up to 4 pax</td>
                    <td className="px-4 py-3 text-warm-600">$120 to $200 total (3M to 5M VND)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-warm-400 text-xs mt-3">
            Prices exclude personal tips and optional upgrades like horse cart
            rides or private sampan boats.
          </p>
        </section>

        {/* Where to book */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Where to book your Mekong Delta tour
          </h2>
          <div className="prose-custom mb-6">
            <p>
              Four platforms cover 90% of the market. Each one has a different
              sweet spot. Prices below are for reference, check each for the
              latest deals before booking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Klook</h3>
              <span className="badge-primary mb-3">Best for group day tours</span>
              <p className="text-warm-600 text-sm mt-3 mb-4">
                Biggest inventory of HCMC day trips, strong filtering by
                pickup area, instant voucher. Day trips from around $28.
                Customer service responds within hours in English.
              </p>
              <a
                href="https://www.klook.com/en-US/search/result/?query=mekong+delta"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center text-brand-primary font-medium text-sm hover:text-brand-primary-700"
              >
                Check Klook Mekong tours
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">GetYourGuide</h3>
              <span className="badge-accent mb-3">Best for small group tours</span>
              <p className="text-warm-600 text-sm mt-3 mb-4">
                Higher quality curation, capped group sizes, free cancellation
                up to 24 hours before most tours. Slightly pricier than Klook
                but better guides. Day tours $35 to $55.
              </p>
              <a
                href="https://www.getyourguide.com/s/?q=mekong+delta"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center text-brand-primary font-medium text-sm hover:text-brand-primary-700"
              >
                Check GetYourGuide tours
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Viator</h3>
              <span className="badge-secondary mb-3">Best for 2-3 day packages</span>
              <p className="text-warm-600 text-sm mt-3 mb-4">
                Strongest on multi day loops through Can Tho and Chau Doc,
                including tours that end at the Cambodian border for
                travellers continuing to Phnom Penh. Widest range of luxury
                Bassac cruise listings.
              </p>
              <a
                href="https://www.viator.com/searchResults/all?text=mekong+delta"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center text-brand-primary font-medium text-sm hover:text-brand-primary-700"
              >
                Check Viator tours
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Booking.com Experiences</h3>
              <span className="badge-primary mb-3">Best for bundled with hotel</span>
              <p className="text-warm-600 text-sm mt-3 mb-4">
                Useful if you are already booking your HCMC hotel through
                Booking, since payment, cancellation and Genius loyalty
                stacks across both. Inventory is thinner than Klook but
                quality is solid.
              </p>
              <a
                href="https://www.booking.com/attractions/index.html?aid=356980&label=mekong-delta-tour"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center text-brand-primary font-medium text-sm hover:text-brand-primary-700"
              >
                Check Booking Experiences
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Day vs multi-day math */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Day tour vs multi-day: the actual math
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-4">
                Day tour (My Tho + Ben Tre)
              </h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li><strong>Tour price:</strong> $30 (750,000 VND)</li>
                <li><strong>Time in HCMC lost:</strong> 11 hours door to door</li>
                <li><strong>Floating market seen:</strong> None, only tourist docks</li>
                <li><strong>Real boat time:</strong> 60 to 90 minutes</li>
                <li><strong>Bus time:</strong> 4 hours round trip</li>
                <li><strong>Verdict:</strong> Fine if short on time, disappointing if you expected Cai Rang</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-4">
                2 day tour (Can Tho + Cai Rang)
              </h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li><strong>Tour price:</strong> $85 (2,125,000 VND)</li>
                <li><strong>Time in HCMC lost:</strong> 2 days</li>
                <li><strong>Floating market seen:</strong> Cai Rang at sunrise</li>
                <li><strong>Real boat time:</strong> 4 to 5 hours across both days</li>
                <li><strong>Homestay or hotel:</strong> Included</li>
                <li><strong>Verdict:</strong> Best value per dollar if you care about the floating market</li>
              </ul>
            </div>
          </div>
          <div className="bg-brand-primary-50 rounded-xl p-6 mt-6">
            <p className="text-warm-700 text-sm">
              <strong>Rule of thumb:</strong> extra $55 gets you 24 hours more
              of delta life and the real Cai Rang market instead of a tourist
              dock. If the Mekong is one of your three main reasons for being
              in Vietnam, book the 2 day. If it is a nice to have, the day
              tour is fine.
            </p>
          </div>
        </section>

        {/* Best floating markets */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Best floating markets in the Mekong Delta, ranked for 2026
          </h2>
          <div className="space-y-4">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-lg">1</div>
                <div>
                  <h3 className="font-display text-lg text-warm-900 mb-1">Cai Rang, Can Tho</h3>
                  <span className="badge-primary mb-2">Still the real deal</span>
                  <p className="text-warm-600 text-sm mt-2">
                    Largest wholesale floating market in the delta. 200 to
                    300 boats at peak, starting 5:30am and winding down by
                    8:00am. Traders hang samples of whatever they are
                    selling (pineapple, watermelon, cabbage) from a bamboo
                    pole so you can spot them from across the river.
                    Photography is excellent between 6:00am and 7:00am.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-accent-600 text-white flex items-center justify-center font-display text-lg">2</div>
                <div>
                  <h3 className="font-display text-lg text-warm-900 mb-1">Phong Dien, Can Tho</h3>
                  <span className="badge-accent mb-2">Smaller and quieter</span>
                  <p className="text-warm-600 text-sm mt-2">
                    About 20km south of Can Tho. Smaller than Cai Rang, 30
                    to 50 boats on a good day, and basically no other
                    tourists. Worth combining with Cai Rang if you have 2
                    nights in Can Tho. Peak activity 6:00am to 7:30am.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-warm-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warm-400 text-white flex items-center justify-center font-display text-lg">3</div>
                <div>
                  <h3 className="font-display text-lg text-warm-900 mb-1">Cai Be, Tien Giang</h3>
                  <span className="badge-secondary mb-2">Declining fast</span>
                  <p className="text-warm-600 text-sm mt-2">
                    The original tourist floating market. Since the bridges
                    opened, local traders mostly switched to trucks. What
                    you see today is roughly 80% tourist boats and 20%
                    traders. Still fine as a photo stop on a Vinh Long
                    loop, but do not build a trip around it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typical day itinerary */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Typical day on a Mekong Delta tour
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">7:30am</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Pickup from HCMC hotel</h3>
                  <p className="text-warm-600 text-sm">Bus from District 1, usually a 20 seater with AC.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">9:30am</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Arrive My Tho</h3>
                  <p className="text-warm-600 text-sm">Short walk to the pier. Boat across the main river branch.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">10:00am</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Unicorn Island and coconut candy workshop</h3>
                  <p className="text-warm-600 text-sm">Taste fresh coconut candy, rice paper, honey tea with kumquat.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">11:30am</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Sampan boat through narrow canals</h3>
                  <p className="text-warm-600 text-sm">4 to 6 people per boat, rowed by hand under the coconut palms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">12:30pm</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Local lunch</h3>
                  <p className="text-warm-600 text-sm">Elephant ear fish, spring rolls, rice, seasonal fruit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">2:00pm</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Ben Tre coconut processing</h3>
                  <p className="text-warm-600 text-sm">Watch the full coconut to candy process, optional horse cart to the next pier.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 text-brand-primary font-display text-sm pt-1">3:30pm</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Return bus to HCMC</h3>
                  <p className="text-warm-600 text-sm">Drop off at the original pickup point around 6:00pm to 6:30pm.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Can Tho deep dive */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Can Tho deep dive: the real base of the Mekong
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Can Tho is the fourth largest city in Vietnam, about 3.5 hours
                from HCMC by road. It is the only base in the delta with a
                real urban feel, which is both a pro and a con. You get
                decent hotels ($20 to $80), Western cafes, a good riverside
                walking street and the famous Cai Rang and Phong Dien
                floating markets on your doorstep.
              </p>
              <p>
                For a 2 night stay, base in Ninh Kieu (the riverfront
                district). Arrange a sampan boat with your hotel the night
                before Cai Rang, leave at 5:00am, be on the market by
                5:45am, grab a bowl of hu tieu noodles from a trader boat,
                visit the rice noodle factory by 7:30am, back to the hotel
                for breakfast. Afternoon free for the Ong pagoda, Binh Thuy
                ancient house or a cycling loop through the orchards.
              </p>
              <p>
                Do not bother with the Can Tho night market at Ninh Kieu for
                food, it is mostly souvenirs. Walk 400m inland to the local
                street food grid instead.
              </p>
            </div>
          </div>
        </section>

        {/* Best time matrix */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Best time to visit the Mekong Delta
          </h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Months</th>
                    <th className="px-4 py-3 font-display text-warm-900">Season</th>
                    <th className="px-4 py-3 font-display text-warm-900">What to expect</th>
                    <th className="px-4 py-3 font-display text-warm-900">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Dec to Feb</td>
                    <td className="px-4 py-3 text-warm-600">Dry and cool</td>
                    <td className="px-4 py-3 text-warm-600">25 to 30C, low humidity, Tet flower village in Sa Dec peaks late Jan</td>
                    <td className="px-4 py-3 text-warm-600">Best overall</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Mar to Apr</td>
                    <td className="px-4 py-3 text-warm-600">Dry and hot</td>
                    <td className="px-4 py-3 text-warm-600">32 to 36C, clear skies, rivers at their lowest</td>
                    <td className="px-4 py-3 text-warm-600">Good but hot</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">May to Aug</td>
                    <td className="px-4 py-3 text-warm-600">Wet season starts</td>
                    <td className="px-4 py-3 text-warm-600">Afternoon thunderstorms, green landscapes, rambutan and mangosteen in season</td>
                    <td className="px-4 py-3 text-warm-600">Underrated</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">Sep to Nov</td>
                    <td className="px-4 py-3 text-warm-600">Flood season</td>
                    <td className="px-4 py-3 text-warm-600">Tra Su cajuput forest at peak, Chau Doc rice fields flooded, most photogenic</td>
                    <td className="px-4 py-3 text-warm-600">Best for photography</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            6 common mistakes first time visitors make
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">1</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Booking a day tour and expecting to see Cai Rang</h3>
                  <p className="text-warm-600 text-sm">Cai Rang is in Can Tho, 170km from HCMC. Day tours go to My Tho, which has no real floating market. If the market is the goal, book 2 days minimum.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">2</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Arriving at the floating market after 8am</h3>
                  <p className="text-warm-600 text-sm">By 8:30am the trader boats are already heading home. You need to be on the water by 5:45am for the real scene. Any tour that departs at 7am from Can Tho is too late.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">3</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Eating on the big tourist boats</h3>
                  <p className="text-warm-600 text-sm">Overpriced and mediocre. Eat at homestays, local markets or the street stalls in Can Tho. A bowl of bun rieu at a side street stall is 35,000 to 45,000 VND.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">4</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Skipping the homestay experience</h3>
                  <p className="text-warm-600 text-sm">Mekong homestays in Ben Tre and Vinh Long are the best part of a multi day trip. $25 to $45 per night including dinner and breakfast with a local family. Worth the slight discomfort of a mosquito net.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">5</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Ignoring wet season</h3>
                  <p className="text-warm-600 text-sm">Wet season in the delta is nothing like wet season in the north. Short afternoon storms and lush green landscapes. September to November flooding is actually the prettiest time to go.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">6</div>
                <div>
                  <h3 className="font-display text-base text-warm-900 mb-1">Not bringing cash for the villages</h3>
                  <p className="text-warm-600 text-sm">Can Tho has ATMs, but the smaller villages (Sa Dec, Tra Su, Phong Dien piers) are cash only. Bring at least 2,000,000 VND in small notes for a 3 day trip.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Mekong Delta tour FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card-flat p-6 group">
                <summary className="font-display text-base text-warm-900 cursor-pointer list-none flex justify-between items-start gap-4">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-warm-400 flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-warm-600 text-sm mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Other Vietnam bucket list tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/halong-bay-cruise/" className="card-flat p-6 hover:shadow-lg transition-shadow block">
              <div className="text-2xl mb-3">&#x26f5;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Halong Bay Cruise</h3>
              <p className="text-warm-600 text-sm">
                The northern counterpart to the Mekong. 2 day cruises on
                karst bays, kayaking through caves, squid fishing at night.
                Full 2026 pricing and cruise operator guide.
              </p>
            </Link>
            <Link href="/sapa-trekking-tour/" className="card-flat p-6 hover:shadow-lg transition-shadow block">
              <div className="text-2xl mb-3">&#x1f3d4;&#xfe0f;</div>
              <h3 className="font-display text-lg text-warm-900 mb-2">Sapa Trekking Tour</h3>
              <p className="text-warm-600 text-sm">
                Rice terraces, H mong and Red Dao villages and homestays in
                the far north. How to choose between group tours, private
                guides and DIY trekking.
              </p>
            </Link>
          </div>
        </section>

        {/* Related reading */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Related reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/mekong-delta-day-trip-ho-chi-minh-city/" className="card-flat p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-display text-base text-warm-900 mb-2">Mekong Delta Day Trip From HCMC</h3>
              <p className="text-warm-600 text-sm">Hour by hour breakdown of the classic My Tho and Ben Tre day trip.</p>
            </Link>
            <Link href="/blog/first-time-vietnam-guide/" className="card-flat p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-display text-base text-warm-900 mb-2">First Time Vietnam Guide</h3>
              <p className="text-warm-600 text-sm">Visas, SIM cards, cash, scams and the 10 things you need to know before you go.</p>
            </Link>
            <Link href="/blog/vietnam-2-week-itinerary/" className="card-flat p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-display text-base text-warm-900 mb-2">Vietnam 2 Week Itinerary</h3>
              <p className="text-warm-600 text-sm">Where the Mekong Delta fits into a north to south Vietnam route.</p>
            </Link>
            <Link href="/blog/is-vietnam-expensive-2026/" className="card-flat p-6 hover:shadow-lg transition-shadow block">
              <h3 className="font-display text-base text-warm-900 mb-2">Is Vietnam Expensive in 2026?</h3>
              <p className="text-warm-600 text-sm">Daily budgets for backpackers, mid range and comfort travellers, with real April 2026 numbers.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
