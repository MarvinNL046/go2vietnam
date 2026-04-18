import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

interface WhyCard {
  title: string;
  description: string;
  icon: string;
}

interface CruiseType {
  type: string;
  duration: string;
  priceUsd: string;
  priceVnd: string;
  bestFor: string;
  boats: string;
}

interface Provider {
  name: string;
  tagline: string;
  pros: string;
  url: string;
  badge: string;
}

interface BayCompare {
  bay: string;
  crowd: string;
  scenery: string;
  price: string;
  bestFor: string;
}

interface ItineraryStep {
  time: string;
  activity: string;
  detail: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const whyCards: WhyCard[] = [
  {
    icon: 'UNESCO',
    title: 'UNESCO World Heritage karst',
    description:
      'Halong Bay holds 1,600+ limestone islands and pillars rising from emerald water. UNESCO listed since 1994. You simply cannot see this landscape anywhere else on earth at this density.',
  },
  {
    icon: 'OVERNIGHT',
    title: 'Overnight is the whole point',
    description:
      'Day trippers see 4 hours of bay, in the busiest zone, surrounded by 300 boats. Overnight cruises push into quieter corners, you watch sunrise over karst with tai chi on deck, squid fishing after dinner. The magic happens when the day boats leave.',
  },
  {
    icon: 'INCLUDED',
    title: 'All-inclusive pricing',
    description:
      'A 2-day cruise bundles hotel pickup from Hanoi, cabin, 3 to 4 meals, kayak, cave visit, tai chi, and a guide. You pay once online and the only extras are drinks and tips. No nickel and diming.',
  },
];

const cruiseTypes: CruiseType[] = [
  {
    type: 'Day trip from Hanoi',
    duration: '1 day, 12h total',
    priceUsd: '$35 to $70',
    priceVnd: '880k to 1.75M VND',
    bestFor: 'Tight budget, no time',
    boats: 'Shared group boat, 30+ people',
  },
  {
    type: '2-day 1-night standard',
    duration: '2d / 1n',
    priceUsd: '$120 to $250',
    priceVnd: '3M to 6.25M VND',
    bestFor: 'Best value for most travelers',
    boats: '4-star boat, shared cabin',
  },
  {
    type: '2-day 1-night deluxe',
    duration: '2d / 1n',
    priceUsd: '$200 to $400',
    priceVnd: '5M to 10M VND',
    bestFor: 'Couples, honeymoon',
    boats: 'Private cabin, balcony, better food',
  },
  {
    type: '3-day 2-night luxury',
    duration: '3d / 2n',
    priceUsd: '$400 to $800',
    priceVnd: '10M to 20M VND',
    bestFor: 'Bucket-list trip',
    boats: 'Paradise Elegance, Indochina Sails',
  },
  {
    type: 'Lan Ha Bay (south)',
    duration: '2d / 1n',
    priceUsd: '$150 to $350',
    priceVnd: '3.75M to 8.75M VND',
    bestFor: '80% fewer boats, same karst',
    boats: 'Departs Hai Phong / Cat Ba',
  },
  {
    type: 'Bai Tu Long Bay (north)',
    duration: '2d / 1n',
    priceUsd: '$180 to $400',
    priceVnd: '4.5M to 10M VND',
    bestFor: 'The quietest option',
    boats: 'Small fleet, remote coves',
  },
  {
    type: 'Private wooden junk charter',
    duration: '2d / 1n',
    priceUsd: '$600 to $1,500+',
    priceVnd: '15M to 37.5M+ VND',
    bestFor: 'Families, small groups',
    boats: 'Whole boat to yourself',
  },
  {
    type: 'Seaplane + cruise combo',
    duration: '2d / 1n',
    priceUsd: '$450 to $900',
    priceVnd: '11.25M to 22.5M VND',
    bestFor: 'Skip the 2.5h drive',
    boats: 'Hai Au Aviation + overnight boat',
  },
];

const providers: Provider[] = [
  {
    name: 'Viator',
    tagline: 'Best for English-speaking travelers',
    pros: 'Largest inventory of Halong cruises, free cancellation up to 24h on most boats, verified reviews in the thousands per tour, instant mobile voucher.',
    url: 'https://www.viator.com/searchResults/all?text=halong+bay+cruise',
    badge: 'Largest selection',
  },
  {
    name: 'GetYourGuide',
    tagline: 'Best cancellation policy',
    pros: 'Free cancellation 24h before, price match guarantee, strong European customer support, clear what-is-included language on every listing.',
    url: 'https://www.getyourguide.com/s/?q=halong%20bay%20cruise',
    badge: 'Flexible refunds',
  },
  {
    name: 'Klook',
    tagline: 'Best for Asia-based travelers',
    pros: 'Often 10 to 20% cheaper than Viator on the same boats, app-first booking, bundles with seaplane and private transfers. Strong in Bai Tu Long inventory.',
    url: 'https://www.klook.com/en-US/search/result/?query=halong%20bay%20cruise',
    badge: 'Best price',
  },
  {
    name: 'Booking.com',
    tagline: 'Best for hotel-style cruise booking',
    pros: 'Treats overnight cruises as hotels, book with your usual Booking account, Genius discounts apply, cancellation mirrors the hotel policy (some fully flexible).',
    url: 'https://www.booking.com/searchresults.html?ss=Halong+Bay+cruise',
    badge: 'Genius discount',
  },
];

const bayCompare: BayCompare[] = [
  {
    bay: 'Halong Bay (main)',
    crowd: 'Very busy, 300+ boats peak',
    scenery: '1,600 karst islands, Surprise Cave, Titop Island',
    price: '$120 to $400 for 2d/1n',
    bestFor: 'First-time visitors, iconic photos',
  },
  {
    bay: 'Lan Ha Bay (south)',
    crowd: '80% fewer boats, much quieter',
    scenery: '300+ karst islands, hidden beaches, Cat Ba Island',
    price: '$150 to $350 for 2d/1n',
    bestFor: 'Kayakers, swimmers, repeat visitors',
  },
  {
    bay: 'Bai Tu Long Bay (north)',
    crowd: 'The quietest, barely any boats',
    scenery: '600+ islands, pristine coves, fishing villages',
    price: '$180 to $400 for 2d/1n',
    bestFor: 'Solitude, nature, no crowds',
  },
];

const itinerary: ItineraryStep[] = [
  {
    time: 'Day 1 - 8:00 AM',
    activity: 'Hotel pickup in Hanoi Old Quarter',
    detail: 'Shuttle van or limousine bus picks you up at your hotel. 2.5h drive to Halong or Hai Phong port. Coffee stop halfway.',
  },
  {
    time: '12:00 PM',
    activity: 'Board the cruise',
    detail: 'Welcome drink, briefing, cabin check-in. Most boats depart around 12:30 PM.',
  },
  {
    time: '12:45 PM',
    activity: 'Lunch onboard',
    detail: 'Multi-course Vietnamese seafood lunch as the boat sails into the bay. Spring rolls, grilled prawns, steamed fish, rice, fruit.',
  },
  {
    time: '2:30 PM',
    activity: 'Surprise Cave (Hang Sung Sot)',
    detail: 'Halong\'s largest cave. 30-minute walk through three chambers lit with colored lights. Wear sneakers, it is slippery.',
  },
  {
    time: '4:00 PM',
    activity: 'Titop Island swim and viewpoint',
    detail: 'Beach swim plus 400-step hike for the classic panorama photo. Bring swimwear in a day-bag.',
  },
  {
    time: '6:30 PM',
    activity: 'Sunset on deck, happy hour',
    detail: 'Boat anchors in a sheltered cove. Cocktails on the sundeck while the sun sinks behind the karst.',
  },
  {
    time: '7:30 PM',
    activity: 'Dinner, squid fishing',
    detail: '5 to 7 course Vietnamese dinner. After dinner, crew hands out squid-fishing gear off the back deck. Rarely catch, always fun.',
  },
  {
    time: 'Day 2 - 6:30 AM',
    activity: 'Sunrise tai chi on deck',
    detail: 'Optional, but do it. Instructor leads a 30-minute session while the bay lights up. Coffee and pastries after.',
  },
  {
    time: '8:00 AM',
    activity: 'Luon Cave kayaking',
    detail: 'Transfer to smaller tender, kayak or bamboo-row through a low cave tunnel into a hidden lagoon ringed by karst walls.',
  },
  {
    time: '10:30 AM',
    activity: 'Brunch and cabin checkout',
    detail: 'Buffet brunch while the boat sails back. Settle bar tab, tip the crew.',
  },
  {
    time: '12:30 PM',
    activity: 'Disembark, drive back',
    detail: '2.5h drive to Hanoi. Most cruises drop you at your hotel by 4:00 PM.',
  },
];

const commonMistakes: string[] = [
  'Booking a day trip instead of overnight. You spend 5 hours in a van for 3 hours on a boat in the most crowded zone of the bay. Not worth the drive.',
  'Paying cash at the pier for an unknown boat. Dozens of boats look identical. The $80 "local deal" is often a decaying 2-star boat with no safety inspection. Book online, read the last 20 reviews.',
  'Choosing the cheapest boat and complaining about the boat. A $120 cruise is a $120 experience. If you want quiet cabins and good food, pay $250+.',
  'Ignoring Lan Ha Bay. Same karst scenery, 80% fewer boats, often cheaper. The only reason more people do not book it is marketing, Halong is the famous name.',
  'Traveling in May to September without weather insurance. Typhoon season. 5 to 10% of cruises get cancelled or cut short. Book with free-cancellation platforms (Viator, GetYourGuide) and buy travel insurance.',
  'Skipping cash. Drinks, spa, and tips are cash only on most boats. Bring $50 to $100 per person in USD or VND small notes.',
];

const faqItems: FaqItem[] = [
  {
    question: 'How much does a Halong Bay cruise cost in 2026?',
    answer:
      'A standard 2-day 1-night cruise runs $120 to $250 per person on a 4-star boat with a shared cabin. Deluxe 2-day cruises with a private balcony cabin are $200 to $400. Luxury 3-day 2-night cruises on brands like Paradise Elegance or Indochina Sails run $400 to $800. Day trips from Hanoi are $35 to $70 but we do not recommend them. Prices include hotel pickup from Hanoi, cabin, 3 to 4 meals, and activities. Drinks, tips, and spa cost extra.',
  },
  {
    question: 'Is 2-day or 3-day Halong cruise worth it?',
    answer:
      'For most travelers, 2-day 1-night is the sweet spot. You get one sunset, one sunrise, and one full day of activities at a fair price. 3-day 2-night is worth it only if you are a slow traveler, want two morning kayak sessions, or specifically want to reach quieter coves deeper in the bay. The second night adds $200 to $400 but the activity quality per dollar drops.',
  },
  {
    question: 'Can I do Halong Bay as a day trip?',
    answer:
      'You can, but we do not recommend it. A day trip is 5 hours in a minivan for 3 hours on a shared boat in the most crowded part of the bay. You miss sunrise, sunset, squid fishing, and the quiet overnight coves that make Halong magical. If you only have one free day in Hanoi, consider Ninh Binh (Trang An) instead, it is also karst landscape, half the drive, and perfectly fine as a day trip.',
  },
  {
    question: 'What is the best Halong Bay cruise company?',
    answer:
      'For luxury, Paradise Elegance and Indochina Sails are the gold standard, $400+ per night, impeccable service. For deluxe mid-range, Orchid Cruises, Stellar of the Seas, and La Regina Legend all review above 4.7 stars. For value, Alisa Premier and Halong Rosa consistently deliver at $150 to $250. Book through Viator or GetYourGuide so you get verified reviews and free cancellation, not the cruise company\'s own site.',
  },
  {
    question: 'Should I do Halong, Lan Ha, or Bai Tu Long?',
    answer:
      'First-time visitors who want the iconic photos and the famous name: Halong Bay. Travelers who care about crowds and want 80% fewer boats with identical karst scenery: Lan Ha Bay (south, departs Hai Phong). Experienced travelers who want the absolute quietest option with pristine coves: Bai Tu Long Bay (north). All three are UNESCO-grade karst landscapes, Lan Ha and Bai Tu Long are just less marketed internationally.',
  },
  {
    question: 'When is the best time for Halong Bay?',
    answer:
      'October to April is the dry, clear season. Best months are October, November, March, April, cool weather, low humidity, clear visibility. December to February can be chilly and foggy, still beautiful but wear layers. May to September is typhoon and rain season, 5 to 10% of cruises are cancelled or cut short. If you must travel in summer, book a boat that offers free reschedule or full refund for weather cancellation.',
  },
  {
    question: 'What happens if my Halong cruise gets cancelled?',
    answer:
      'If Vietnamese authorities close the bay for weather (happens 5 to 10% of the time May to September), reputable operators offer a free reschedule to the next clear day or a full refund. Platforms like Viator, GetYourGuide, and Klook handle refunds automatically if you cannot reschedule. Travel insurance with trip-interruption coverage will reimburse non-refundable costs. Never book a cruise that demands full prepayment with no weather clause.',
  },
  {
    question: 'What is included in the cruise price?',
    answer:
      'A typical 2-day 1-night cruise includes: round-trip shuttle from your Hanoi hotel (2.5h each way), entry fees to the bay, cabin accommodation onboard, welcome drink, lunch on day 1, dinner on day 1, breakfast on day 2, brunch on day 2, English-speaking guide, kayak session, cave visit (Surprise Cave or similar), Titop Island swim, sunrise tai chi, squid fishing. NOT included: alcoholic and soft drinks, spa, tips for crew ($5 to $10 per person), travel insurance, any upgrades like seaplane.',
  },
];

export default function HalongBayCruise() {
  const { t: tCommon } = useTranslation('common');
  const canonical = `${siteConfig.seo.siteUrl}/halong-bay-cruise/`;

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Halong Bay Cruise 2026: Real Prices, Best Boats, Where to Book',
    description:
      'Real 2026 Halong Bay cruise prices ($120 to $800), 2-day vs 3-day vs day trip, Lan Ha alternative, weather and cancellation reality, where to book on Viator, GetYourGuide, Klook, Booking.com.',
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
  };

  const faqSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={`Halong Bay Cruise 2026: Real Prices, Best Boats, Where to Book | ${siteConfig.name}`}
        description="Real 2026 Halong Bay cruise prices ($120-800) — 2-day vs 3-day vs day trip, Lan Ha alternative, weather + cancellation reality, book on Viator/GetYourGuide/Klook."
        path="/halong-bay-cruise/"
        jsonLd={[articleSchema, faqSchema]}
      >
        <link rel="canonical" href={canonical} />
      </SEOHead>

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { name: tCommon('nav.home'), href: '/' },
            { name: 'Halong Bay Cruise', href: '/halong-bay-cruise/' },
          ]}
        />

        {/* Hero */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Halong Bay Cruise 2026: Real Prices, Best Boats, Where to Book
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            1,600 limestone karsts, emerald water, overnight on a wooden junk boat. This is the
            honest 2026 guide: real cruise prices from $35 day trips to $800 luxury 3-day tours,
            which bay to choose (Halong vs Lan Ha vs Bai Tu Long), how to avoid the typhoon-season
            trap, and exactly where to book for free cancellation.
          </p>
        </div>

        {/* What is Halong UNESCO */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            What makes Halong Bay a UNESCO wonder
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Halong Bay sits 170 km east of Hanoi on the Gulf of Tonkin. The name means
                &quot;descending dragon bay&quot; in Vietnamese, local legend says a dragon spat
                jade into the sea, creating the 1,600 limestone pillars you see today. The science
                is less dramatic but more astonishing: 500 million years of tropical karst erosion
                on submerged limestone, creating one of the densest collections of sea stacks on
                Earth.
              </p>
              <p>
                UNESCO inscribed Halong Bay as a World Heritage Site in 1994 and extended the
                listing in 2000. The protected zone covers 1,553 km&sup2; and 1,969 islands, plus
                the adjoining Lan Ha Bay (south) and Bai Tu Long Bay (north), which are
                geologically part of the same karst system but far less visited.
              </p>
              <p>
                You cannot experience this landscape from shore. The only way to see it properly is
                from a boat, and the only way to see it without 300 other boats in frame is to stay
                overnight. That is why cruises exist, and that is why this guide focuses on which
                cruise to book, not whether to go at all.
              </p>
            </div>
          </div>
        </section>

        {/* Why cruise vs day trip */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Why an overnight cruise beats a day trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((c) => (
              <div key={c.title} className="card-flat p-6">
                <div className="mb-3">
                  <span className="badge-primary">{c.icon}</span>
                </div>
                <h3 className="font-display text-lg text-warm-900 mb-2">{c.title}</h3>
                <p className="text-warm-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 prices */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Halong Bay cruise prices 2026
          </h2>
          <p className="text-warm-600 mb-6 max-w-3xl">
            Prices below are per person, based on March 2026 listings across Viator, GetYourGuide,
            Klook, and Booking.com. Shared cabin assumes double occupancy. Primary prices in USD,
            VND in parentheses at an approximate rate of 25,000 VND per USD.
          </p>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Cruise type</th>
                    <th className="px-4 py-3 font-display text-warm-900">Duration</th>
                    <th className="px-4 py-3 font-display text-warm-900">USD / VND</th>
                    <th className="px-4 py-3 font-display text-warm-900">Boat standard</th>
                    <th className="px-4 py-3 font-display text-warm-900">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  {cruiseTypes.map((c) => (
                    <tr key={c.type}>
                      <td className="px-4 py-3 text-warm-700 font-medium">{c.type}</td>
                      <td className="px-4 py-3 text-warm-600">{c.duration}</td>
                      <td className="px-4 py-3 text-warm-600">
                        {c.priceUsd}
                        <span className="block text-warm-400 text-xs">({c.priceVnd})</span>
                      </td>
                      <td className="px-4 py-3 text-warm-600">{c.boats}</td>
                      <td className="px-4 py-3 text-warm-600">{c.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Where to book */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Where to book your Halong cruise
          </h2>
          <p className="text-warm-600 mb-6 max-w-3xl">
            Never book at the pier, never pay full cash up front, and never trust a Hanoi
            street-agent offering a &quot;special deal.&quot; Use one of these four platforms, all
            have verified reviews, free cancellation on most listings, and 24/7 customer support
            if your cruise gets cancelled for weather.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providers.map((p) => (
              <div key={p.name} className="card-flat p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg text-warm-900">{p.name}</h3>
                  <span className="badge-accent">{p.badge}</span>
                </div>
                <p className="text-warm-700 font-medium text-sm mb-2">{p.tagline}</p>
                <p className="text-warm-600 text-sm mb-4">{p.pros}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center text-brand-primary font-medium text-sm hover:underline"
                >
                  Check Halong cruises on {p.name}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Bay comparison */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Halong vs Lan Ha vs Bai Tu Long, which bay?
          </h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Bay</th>
                    <th className="px-4 py-3 font-display text-warm-900">Crowds</th>
                    <th className="px-4 py-3 font-display text-warm-900">Scenery</th>
                    <th className="px-4 py-3 font-display text-warm-900">Price 2d/1n</th>
                    <th className="px-4 py-3 font-display text-warm-900">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  {bayCompare.map((b) => (
                    <tr key={b.bay}>
                      <td className="px-4 py-3 text-warm-700 font-medium">{b.bay}</td>
                      <td className="px-4 py-3 text-warm-600">{b.crowd}</td>
                      <td className="px-4 py-3 text-warm-600">{b.scenery}</td>
                      <td className="px-4 py-3 text-warm-600">{b.price}</td>
                      <td className="px-4 py-3 text-warm-600">{b.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 2-day itinerary */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Typical 2-day 1-night itinerary
          </h2>
          <p className="text-warm-600 mb-6 max-w-3xl">
            Every reputable mid-range and luxury cruise runs a variation of this schedule. Use it
            as a template to compare what a specific boat offers before you book.
          </p>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-6">
              {itinerary.map((step, idx) => (
                <div key={step.time} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-display text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-sm text-warm-900">{step.time}</p>
                    <h3 className="font-display text-base text-warm-900 mt-1">{step.activity}</h3>
                    <p className="text-warm-600 text-sm mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included vs extra */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            What is included vs what costs extra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6 border-l-4 border-l-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-4">Included in cruise price</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Hotel pickup and drop-off in Hanoi Old Quarter (2.5h drive each way)</li>
                <li>Bay entry fee and port fees</li>
                <li>Cabin accommodation onboard (shared or private)</li>
                <li>Welcome drink on arrival</li>
                <li>3 to 4 meals (lunch day 1, dinner, breakfast, brunch day 2)</li>
                <li>English-speaking cruise guide</li>
                <li>Cave visit (Surprise Cave or similar)</li>
                <li>Titop Island swim stop</li>
                <li>Kayaking or bamboo-boat session</li>
                <li>Sunrise tai chi, squid fishing, cooking demo</li>
              </ul>
            </div>
            <div className="card-flat p-6 border-l-4 border-l-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-4">Costs extra, cash only</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li>Alcoholic drinks ($3 to $8 beer, $30 to $60 bottle of wine)</li>
                <li>Soft drinks and bottled water beyond welcome round</li>
                <li>Spa and massage (around $30 to $60 per hour)</li>
                <li>Tips for crew ($5 to $10 per person, optional but standard)</li>
                <li>Upgrade to private kayak or private Luon Cave tour</li>
                <li>Seaplane or helicopter transfer from Hanoi ($200 to $400)</li>
                <li>Travel insurance with trip-interruption coverage</li>
                <li>Laundry service onboard</li>
                <li>Premium wifi on some boats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Weather + cancellation reality */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Weather and cancellation reality
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Halong Bay cruise operators cancel trips when Vietnamese maritime authorities close
                the bay for safety. This happens in 5 to 10% of cruises during May to September
                (typhoon season) and roughly 1 to 2% in the October to April dry season. Closure
                decisions come from the Halong Port Authority, usually the evening before or the
                morning of departure.
              </p>
              <p>
                When your cruise is cancelled, reputable operators and booking platforms offer
                three options: free reschedule to the next clear day, full refund to your original
                payment method, or credit for a future booking. Platforms like Viator, GetYourGuide,
                and Klook handle the refund automatically when the operator files a cancellation
                notice. Never accept &quot;we will run the trip in rough weather,&quot; a forced
                run in bad weather is unsafe and usually means the operator will not refund when
                you want to back out.
              </p>
              <p>
                What you should do: book with a platform that has free cancellation, buy travel
                insurance that covers weather-related trip interruption, and keep one flexible day
                in your Hanoi schedule so you can reschedule if needed. If you have exactly one day
                free and it gets cancelled, you are out of luck, but that is a scheduling problem,
                not a cruise problem.
              </p>
            </div>
            <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 mt-6">
              <p className="text-brand-accent-800 font-medium text-sm">
                <strong>Book a flexible buffer day.</strong> The single best trick for Halong is to
                schedule the cruise with at least one free day after it in your Hanoi itinerary, so
                a weather reschedule costs you nothing.
              </p>
            </div>
          </div>
        </section>

        {/* Best time seasonal matrix */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Best time to cruise Halong Bay
          </h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900">Months</th>
                    <th className="px-4 py-3 font-display text-warm-900">Weather</th>
                    <th className="px-4 py-3 font-display text-warm-900">Cancellation risk</th>
                    <th className="px-4 py-3 font-display text-warm-900">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">October to November</td>
                    <td className="px-4 py-3 text-warm-600">Clear, cool, low humidity</td>
                    <td className="px-4 py-3 text-warm-600">Low (1 to 2%)</td>
                    <td className="px-4 py-3 text-warm-600">Best overall, peak quality</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">December to February</td>
                    <td className="px-4 py-3 text-warm-600">Cool 12 to 20C, some fog</td>
                    <td className="px-4 py-3 text-warm-600">Low (2 to 3%)</td>
                    <td className="px-4 py-3 text-warm-600">Fine, pack a jacket</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">March to April</td>
                    <td className="px-4 py-3 text-warm-600">Mild, clear, pleasant</td>
                    <td className="px-4 py-3 text-warm-600">Low (2 to 3%)</td>
                    <td className="px-4 py-3 text-warm-600">Excellent, shoulder pricing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">May to June</td>
                    <td className="px-4 py-3 text-warm-600">Hot, humid, thunderstorms</td>
                    <td className="px-4 py-3 text-warm-600">Medium (5 to 8%)</td>
                    <td className="px-4 py-3 text-warm-600">Risky, book flexible</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-warm-700 font-medium">July to September</td>
                    <td className="px-4 py-3 text-warm-600">Typhoon season, heavy rain</td>
                    <td className="px-4 py-3 text-warm-600">High (8 to 12%)</td>
                    <td className="px-4 py-3 text-warm-600">Avoid or insure fully</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            6 common Halong cruise mistakes to avoid
          </h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="space-y-5">
              {commonMistakes.map((m, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-display text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-warm-600 text-sm pt-1">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Halong Bay cruise FAQ
          </h2>
          <div className="space-y-3">
            {faqItems.map((f) => (
              <details
                key={f.question}
                className="card-flat p-5 group"
              >
                <summary className="font-display text-base text-warm-900 cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{f.question}</span>
                  <svg
                    className="w-5 h-5 text-warm-400 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-warm-600 text-sm mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Cross-links (other pillars) */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Pair Halong with another Vietnam classic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/sapa-trekking-tour/"
              className="card-flat p-6 hover:shadow-lg transition-shadow block"
            >
              <span className="badge-primary mb-3">Northern Vietnam</span>
              <h3 className="font-display text-lg text-warm-900 mb-2">Sapa Trekking Tour</h3>
              <p className="text-warm-600 text-sm">
                Rice terraces and ethnic-minority villages in the mountains. Pair Halong (sea) with
                Sapa (mountains) for the classic North Vietnam week, 2026 prices, homestay vs
                hotel, best trek routes.
              </p>
            </a>
            <a
              href="/mekong-delta-tour/"
              className="card-flat p-6 hover:shadow-lg transition-shadow block"
            >
              <span className="badge-primary mb-3">Southern Vietnam</span>
              <h3 className="font-display text-lg text-warm-900 mb-2">Mekong Delta Tour</h3>
              <p className="text-warm-600 text-sm">
                Floating markets, coconut candy workshops, homestays on the water. The South
                Vietnam counterweight to Halong, full 2026 price breakdown and itinerary options.
              </p>
            </a>
          </div>
        </section>

        {/* Related reading */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">
            Related reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/blog/ha-long-bay-complete-guide/"
              className="card-flat p-5 hover:shadow-lg transition-shadow block"
            >
              <h3 className="font-display text-base text-warm-900 mb-2">
                Ha Long Bay Complete Guide
              </h3>
              <p className="text-warm-500 text-xs">
                Everything about the bay itself: history, geology, top 10 islands, day vs
                overnight.
              </p>
            </a>
            <a
              href="/blog/is-halong-bay-worth-it-2026/"
              className="card-flat p-5 hover:shadow-lg transition-shadow block"
            >
              <h3 className="font-display text-base text-warm-900 mb-2">
                Is Halong Bay Worth It in 2026?
              </h3>
              <p className="text-warm-500 text-xs">
                Honest take on crowds, over-tourism, and whether Lan Ha is actually better.
              </p>
            </a>
            <a
              href="/blog/first-time-vietnam-guide/"
              className="card-flat p-5 hover:shadow-lg transition-shadow block"
            >
              <h3 className="font-display text-base text-warm-900 mb-2">
                First-Time Vietnam Guide
              </h3>
              <p className="text-warm-500 text-xs">
                Visa, SIM, currency, safety, the 15 things you should know before you land.
              </p>
            </a>
            <a
              href="/blog/vietnam-2-week-itinerary/"
              className="card-flat p-5 hover:shadow-lg transition-shadow block"
            >
              <h3 className="font-display text-base text-warm-900 mb-2">
                Vietnam 2-Week Itinerary
              </h3>
              <p className="text-warm-500 text-xs">
                Hanoi to Halong to Hoi An to Saigon in 14 days. Budget, day-by-day schedule, where
                to book each leg.
              </p>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <div className="bg-warm-100 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-warm-900 mb-4">
              Ready to book your Halong Bay cruise?
            </h2>
            <p className="text-warm-500 mb-6 max-w-xl mx-auto">
              Start with Viator for the largest inventory of verified overnight cruises, or Klook
              if you want the same boats for 10 to 20% less. Both offer free cancellation on most
              listings and handle weather refunds automatically.
            </p>
            <p className="text-warm-400 text-sm">
              Disclosure: we earn a commission when you book through our partner links. It does not
              affect the price you pay and it keeps this guide free to read.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
