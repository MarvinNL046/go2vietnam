import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function TransportGuide() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Getting Around Vietnam - Transport Guide | ${siteConfig.name}`}
        description="Complete Vietnam transport guide: domestic flights, trains, sleeper buses, Grab, motorbike rental, and local transport. Routes, prices, and booking tips."
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: 'Transport', href: '/transport/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Getting Around Vietnam
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            Vietnam stretches over 1,650 km from north to south, offering a fascinating variety of transport
            options. From modern airlines to the legendary Reunification Express train, here is how to
            navigate this beautiful country.
          </p>
        </div>

        {/* Quick Cost Comparison */}
        <div className="card-flat p-6 lg:p-8 mb-16">
          <h2 className="font-display text-xl text-warm-900 mb-4">Quick Cost Comparison: Hanoi to Ho Chi Minh City</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm-100">
                <tr>
                  <th className="px-4 py-3 font-display text-warm-900">Mode</th>
                  <th className="px-4 py-3 font-display text-warm-900">Duration</th>
                  <th className="px-4 py-3 font-display text-warm-900">Price Range</th>
                  <th className="px-4 py-3 font-display text-warm-900">Comfort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-100">
                <tr>
                  <td className="px-4 py-3 text-warm-700 font-medium">Flight</td>
                  <td className="px-4 py-3 text-warm-600">2 hours</td>
                  <td className="px-4 py-3 text-warm-600">$30-100</td>
                  <td className="px-4 py-3"><span className="badge-primary">Best</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-warm-700 font-medium">Train (sleeper)</td>
                  <td className="px-4 py-3 text-warm-600">30-34 hours</td>
                  <td className="px-4 py-3 text-warm-600">$35-70</td>
                  <td className="px-4 py-3"><span className="badge-accent">Scenic</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-warm-700 font-medium">Sleeper bus</td>
                  <td className="px-4 py-3 text-warm-600">28-36 hours</td>
                  <td className="px-4 py-3 text-warm-600">$25-40</td>
                  <td className="px-4 py-3"><span className="badge-secondary">Budget</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Domestic Flights */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Domestic Flights</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Flying is the fastest and often cheapest way to cover long distances in Vietnam. The country
                has excellent domestic flight coverage with three major airlines operating dozens of daily routes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-display text-lg text-warm-900 mb-2">Vietnam Airlines</h3>
                <span className="badge-primary mb-3">Full Service</span>
                <p className="text-warm-600 text-sm mt-3">
                  National carrier with the best service. Includes baggage, meals, and seat selection.
                  Best for comfort. Book at{' '}
                  <a href="https://www.vietnamairlines.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    vietnamairlines.com
                  </a>
                </p>
                <p className="text-warm-500 text-xs mt-2">Typical price: $50-120 one way</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-display text-lg text-warm-900 mb-2">VietJet Air</h3>
                <span className="badge-accent mb-3">Budget</span>
                <p className="text-warm-600 text-sm mt-3">
                  Vietnam&apos;s largest low-cost carrier. Frequent flash sales with fares from $5-20.
                  Baggage is extra. Book at{' '}
                  <a href="https://www.vietjetair.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    vietjetair.com
                  </a>
                </p>
                <p className="text-warm-500 text-xs mt-2">Typical price: $25-80 one way</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-display text-lg text-warm-900 mb-2">Bamboo Airways</h3>
                <span className="badge-secondary mb-3">Hybrid</span>
                <p className="text-warm-600 text-sm mt-3">
                  Newer airline combining low fares with decent service. Good regional routes. Book at{' '}
                  <a href="https://www.bambooairways.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    bambooairways.com
                  </a>
                </p>
                <p className="text-warm-500 text-xs mt-2">Typical price: $35-90 one way</p>
              </div>
            </div>

            <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 mt-6">
              <p className="text-brand-accent-800 font-medium text-sm">
                <strong>Booking tip:</strong> Use Google Flights or Skyscanner to compare all airlines at once.
                VietJet runs flash sales every Wednesday and Thursday -- fares can drop to $5-10 for popular routes.
                Book 2-4 weeks ahead for the best prices.
              </p>
            </div>
          </div>
        </section>

        {/* Trains */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Trains -- The Reunification Express</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Vietnam&apos;s railway runs along the entire coast from Hanoi to Ho Chi Minh City, stopping at
                major destinations along the way. The full journey on the <strong>Reunification Express</strong>{' '}
                takes 30-34 hours and is one of Southeast Asia&apos;s great rail experiences.
              </p>

              <h3>Popular Train Routes</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Hanoi to Da Nang</p>
                <p className="text-warm-500 text-sm">14-17 hours | From $25 (soft sleeper)</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Hanoi to Sapa (Lao Cai)</p>
                <p className="text-warm-500 text-sm">8 hours (overnight) | From $20</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Da Nang to Hue</p>
                <p className="text-warm-500 text-sm">2.5-3 hours | From $5 (most scenic route!)</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Ho Chi Minh City to Nha Trang</p>
                <p className="text-warm-500 text-sm">7-8 hours | From $15</p>
              </div>
            </div>

            <div className="prose-custom">
              <h3>Seat Classes</h3>
              <ul>
                <li><strong>Hard seat:</strong> Cheapest option, wooden bench seats -- fine for short trips under 3 hours</li>
                <li><strong>Soft seat:</strong> Padded reclining seats with AC, good for 3-8 hour journeys</li>
                <li><strong>Hard sleeper:</strong> 6-bunk compartment with thin mattresses -- budget overnight option</li>
                <li><strong>Soft sleeper:</strong> 4-bunk compartment with better mattresses, linens, and door -- recommended for overnight</li>
              </ul>

              <h3>How to Book</h3>
              <p>
                Book through the official Vietnam Railways website at{' '}
                <a href="https://dsvn.vn" target="_blank" rel="noopener noreferrer">dsvn.vn</a> (Vietnamese only,
                but Google Translate works well), or use{' '}
                <a href={siteConfig.affiliateLinks.transport} target="_blank" rel="noopener noreferrer">
                  12go.asia
                </a>{' '}
                for English-language booking with e-tickets. Book 2-4 weeks ahead for popular routes,
                especially Hanoi-Sapa and the Reunification Express.
              </p>
            </div>

            <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 mt-6">
              <p className="text-brand-primary-800 font-medium text-sm">
                <strong>Must-do:</strong> The Da Nang to Hue train passes through the Hai Van Pass -- widely
                considered the most scenic railway section in all of Vietnam. Sit on the left side heading north
                for the best ocean views.
              </p>
            </div>
          </div>
        </section>

        {/* Sleeper Buses */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Sleeper Buses</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Sleeper buses are the backbone of budget travel in Vietnam. These double-decker coaches feature
                reclining beds instead of seats, making overnight journeys surprisingly comfortable.
                They connect virtually every tourist destination in the country.
              </p>

              <h3>Major Bus Operators</h3>
              <ul>
                <li><strong>The Sinh Tourist:</strong> The most tourist-friendly operator with English-speaking staff,
                clean buses, and offices in every major city. Slightly pricier but reliable.</li>
                <li><strong>Futa Bus (Phuong Trang):</strong> Vietnam&apos;s largest bus company. Modern fleet,
                excellent coverage, very popular with locals. Book at futabus.vn</li>
                <li><strong>Hoang Long:</strong> Good quality operator for northern routes</li>
                <li><strong>Camel Travel:</strong> Budget-friendly with solid central Vietnam coverage</li>
              </ul>

              <h3>Popular Sleeper Bus Routes</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Hanoi to Sapa</p>
                <p className="text-warm-500 text-sm">5-6 hours (overnight) | $10-15</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Hanoi to Ninh Binh</p>
                <p className="text-warm-500 text-sm">2 hours | $5-8</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Hue to Hoi An</p>
                <p className="text-warm-500 text-sm">3-4 hours | $5-10</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Nha Trang to Da Lat</p>
                <p className="text-warm-500 text-sm">4 hours | $6-10</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Ho Chi Minh to Mui Ne</p>
                <p className="text-warm-500 text-sm">5-6 hours | $8-12</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">Ho Chi Minh to Can Tho</p>
                <p className="text-warm-500 text-sm">3.5-4 hours | $6-10</p>
              </div>
            </div>

            <div className="prose-custom">
              <p>
                Book buses through operator websites, hotel front desks, or via{' '}
                <a href={siteConfig.affiliateLinks.transport} target="_blank" rel="noopener noreferrer">
                  12go.asia
                </a>{' '}
                for easy English-language booking. Buses typically include water, a wet towel, and WiFi.
              </p>
            </div>

            <div className="bg-warm-100 rounded-xl p-4 mt-6">
              <p className="text-warm-600 text-sm">
                <strong className="text-warm-800">Tip:</strong> If you&apos;re tall (over 180cm / 5&apos;11&quot;), sleeper
                bus beds may feel cramped. Book a bottom bunk for more legroom, or consider the train for
                long overnight journeys.
              </p>
            </div>
          </div>
        </section>

        {/* Local Transport */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Local Transport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Grab (Ride-hailing)</h3>
              <span className="badge-primary mb-3">Recommended</span>
              <p className="text-warm-600 text-sm mt-3">
                Grab is Vietnam&apos;s dominant ride-hailing app (like Uber). Available in all cities.
                Choose GrabCar (taxi) or GrabBike (motorbike taxi) for shorter trips. Prices are
                metered through the app, so no haggling needed.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>GrabBike: 5,000-15,000 VND/km (~$0.20-0.60)</li>
                <li>GrabCar: 10,000-25,000 VND/km (~$0.40-1.00)</li>
                <li>Download Grab before you arrive and register with your phone number</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Xe Om (Motorbike Taxi)</h3>
              <span className="badge-accent mb-3">Traditional</span>
              <p className="text-warm-600 text-sm mt-3">
                Traditional motorbike taxis found on every street corner. Drivers wave or call out to
                passing tourists. Always agree on a price before getting on. Expect to pay 20,000-50,000
                VND for short trips within a city.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>Negotiate the fare before riding</li>
                <li>Use Grab prices as a benchmark</li>
                <li>Great for short hops when you do not have data</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">Metered Taxis</h3>
              <span className="badge-secondary mb-3">Reliable</span>
              <p className="text-warm-600 text-sm mt-3">
                Stick to reputable companies: <strong>Mai Linh</strong> (green) and <strong>Vinasun</strong> (white,
                in the south). Always insist the meter is running. Airport taxis should use the meter or you
                can book via Grab.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>Flag fall: 10,000-15,000 VND (~$0.40-0.60)</li>
                <li>Per km: 15,000-18,000 VND (~$0.60-0.75)</li>
                <li>Avoid unmarked taxis and fake Mai Linh/Vinasun cars</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">City Buses</h3>
              <span className="badge-secondary mb-3">Cheapest</span>
              <p className="text-warm-600 text-sm mt-3">
                Most cities have public bus networks. Hanoi and HCMC have extensive routes.
                Fares are just 5,000-7,000 VND ($0.20-0.30) per ride. Buses can be crowded
                and routes confusing, but they are the cheapest option.
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>Use Google Maps for routes and stops</li>
                <li>HCMC has a new metro line (opened 2024)</li>
                <li>Airport buses run from Hanoi (bus 86) and HCMC (bus 109)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Motorbike Rental */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Motorbike Rental</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Renting a motorbike is one of the most popular (and thrilling) ways to explore Vietnam,
                especially along scenic routes like the Ha Giang Loop, the Hai Van Pass, or the
                Central Highlands. However, it comes with risks and legal considerations.
              </p>

              <h3>Costs</h3>
              <ul>
                <li><strong>Automatic scooter (110-125cc):</strong> 100,000-200,000 VND/day ($4-8)</li>
                <li><strong>Semi-automatic (Honda Win, XR150):</strong> 150,000-300,000 VND/day ($6-12)</li>
                <li><strong>Monthly rental:</strong> 1,500,000-3,000,000 VND/month ($60-120)</li>
                <li><strong>Fuel:</strong> ~25,000 VND/liter ($1) -- a full tank costs about $3-4</li>
              </ul>

              <h3>License Requirements</h3>
              <p>
                Legally, you need an <strong>International Driving Permit (IDP)</strong> with a motorcycle
                endorsement, or a Vietnamese license. Many tourists ride without one, but if you are
                involved in an accident without a valid license, your travel insurance will likely
                <strong> not cover you</strong>. Police can also fine you 800,000-1,200,000 VND ($30-50)
                for riding without a license.
              </p>

              <h3>Safety Tips</h3>
              <ul>
                <li>Always wear a helmet (it is the law and saves lives)</li>
                <li>Start in quieter areas before tackling city traffic</li>
                <li>Drive slower than you think you need to -- road conditions change rapidly</li>
                <li>Watch for sand, gravel, and potholes, especially in rural areas</li>
                <li>Honk your horn around blind corners -- it is expected, not rude</li>
                <li>Never drive at night in rural areas -- unlit obstacles are extremely dangerous</li>
                <li>Check brakes, lights, and tires before renting</li>
              </ul>
            </div>

            <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 mt-6">
              <p className="text-brand-primary-800 font-medium text-sm">
                <strong>Insurance warning:</strong> Most travel insurance policies exclude motorbike accidents
                if you do not hold a valid license. Some policies cover scooters under 125cc even without
                a license -- check your policy carefully. We strongly recommend getting an IDP before your trip.
              </p>
            </div>
          </div>
        </section>

        {/* Book Transport CTA */}
        <section className="mb-8">
          <div className="bg-brand-secondary-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-white mb-4">Book Your Transport</h2>
            <p className="text-warm-400 mb-6 max-w-xl mx-auto">
              Compare and book trains, buses, ferries, and transfers across Vietnam with easy
              English-language booking and e-tickets.
            </p>
            <a
              href={siteConfig.affiliateLinks.transport}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Search Routes on 12go.asia
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
