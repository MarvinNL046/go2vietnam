import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function WeatherGuide() {
  const { t } = useTranslation('common');

  const months = [
    { name: 'Jan', north: { temp: '14-20', rain: 'Low', icon: '🌥️' }, central: { temp: '20-25', rain: 'Low', icon: '☀️' }, south: { temp: '26-32', rain: 'Low', icon: '☀️' } },
    { name: 'Feb', north: { temp: '15-21', rain: 'Low', icon: '🌥️' }, central: { temp: '21-27', rain: 'Low', icon: '☀️' }, south: { temp: '27-33', rain: 'Low', icon: '☀️' } },
    { name: 'Mar', north: { temp: '18-24', rain: 'Low', icon: '🌤️' }, central: { temp: '23-30', rain: 'Low', icon: '☀️' }, south: { temp: '28-34', rain: 'Low', icon: '☀️' } },
    { name: 'Apr', north: { temp: '22-28', rain: 'Med', icon: '🌤️' }, central: { temp: '25-33', rain: 'Low', icon: '☀️' }, south: { temp: '29-35', rain: 'Med', icon: '🌤️' } },
    { name: 'May', north: { temp: '26-32', rain: 'High', icon: '🌧️' }, central: { temp: '27-35', rain: 'Med', icon: '🌤️' }, south: { temp: '28-34', rain: 'High', icon: '🌧️' } },
    { name: 'Jun', north: { temp: '28-34', rain: 'High', icon: '🌧️' }, central: { temp: '28-36', rain: 'Med', icon: '☀️' }, south: { temp: '27-33', rain: 'High', icon: '🌧️' } },
    { name: 'Jul', north: { temp: '28-34', rain: 'High', icon: '🌧️' }, central: { temp: '28-36', rain: 'Low', icon: '☀️' }, south: { temp: '27-32', rain: 'High', icon: '🌧️' } },
    { name: 'Aug', north: { temp: '27-33', rain: 'High', icon: '🌧️' }, central: { temp: '27-35', rain: 'Med', icon: '🌤️' }, south: { temp: '27-32', rain: 'High', icon: '🌧️' } },
    { name: 'Sep', north: { temp: '25-31', rain: 'High', icon: '🌧️' }, central: { temp: '25-32', rain: 'High', icon: '🌧️' }, south: { temp: '27-32', rain: 'High', icon: '🌧️' } },
    { name: 'Oct', north: { temp: '22-28', rain: 'Med', icon: '🌤️' }, central: { temp: '23-29', rain: 'V.High', icon: '⛈️' }, south: { temp: '27-32', rain: 'High', icon: '🌧️' } },
    { name: 'Nov', north: { temp: '18-24', rain: 'Low', icon: '🌥️' }, central: { temp: '22-27', rain: 'V.High', icon: '⛈️' }, south: { temp: '27-32', rain: 'Med', icon: '🌤️' } },
    { name: 'Dec', north: { temp: '14-20', rain: 'Low', icon: '🌥️' }, central: { temp: '20-25', rain: 'High', icon: '🌧️' }, south: { temp: '26-31', rain: 'Low', icon: '☀️' } },
  ];

  return (
    <>
      <SEOHead
        title={`Vietnam Weather Guide - Best Time to Visit by Region | ${siteConfig.name}`}
        description="Vietnam weather guide by region and month. When to visit northern, central, and southern Vietnam. Monsoon seasons, temperatures, packing tips, and typhoon info."
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: 'Weather', href: '/weather/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            Vietnam Weather Guide
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            Vietnam&apos;s climate varies dramatically from north to south and coast to highlands.
            Understanding the weather patterns for each region is essential for planning the perfect trip.
          </p>
        </div>

        {/* Climate Overview */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Climate Overview</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                Vietnam spans over 1,650 km from north to south, crossing multiple climate zones. The country
                has a <strong>tropical monsoon climate</strong>, but conditions vary significantly:
              </p>
              <ul>
                <li>The <strong>north</strong> has four distinct seasons, with cold winters (yes, you may need a jacket in Hanoi)</li>
                <li>The <strong>central coast</strong> has its own monsoon pattern, with the wettest weather from September to December</li>
                <li>The <strong>south</strong> is tropical year-round, with a simple wet/dry season split</li>
              </ul>
              <p>
                There is no single &quot;best time&quot; to visit all of Vietnam. The key is matching your itinerary to
                regional weather patterns, or accepting that some rain is part of the experience.
              </p>
            </div>
          </div>
        </section>

        {/* Best Time Cards */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Best Time to Visit by Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6 border-t-4 border-t-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-1">Northern Vietnam</h3>
              <p className="text-warm-400 text-sm mb-4">Hanoi, Sapa, Ha Long Bay, Ninh Binh</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-primary">Best: Oct-Dec, Mar-Apr</span>
              </div>
              <div className="prose-custom text-sm">
                <p>
                  The north experiences four seasons. Spring (March-April) brings pleasant warmth
                  and blooming flowers. Autumn (October-November) offers clear skies and cool
                  temperatures -- perfect weather for Ha Long Bay and trekking in Sapa.
                </p>
                <p>
                  <strong>Avoid:</strong> Summers (June-August) are sweltering and rainy.
                  Winters (December-February) can drop to 10 C in Hanoi and near freezing in Sapa.
                </p>
              </div>
            </div>

            <div className="card-flat p-6 border-t-4 border-t-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-1">Central Vietnam</h3>
              <p className="text-warm-400 text-sm mb-4">Hue, Da Nang, Hoi An, Nha Trang</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-accent">Best: Feb-May</span>
              </div>
              <div className="prose-custom text-sm">
                <p>
                  Central Vietnam has its own weather pattern distinct from north and south.
                  February to May is ideal: warm, sunny, and dry with beach-perfect conditions.
                  June to August is hot but mostly dry.
                </p>
                <p>
                  <strong>Avoid:</strong> September to December is monsoon season with heavy
                  rainfall and occasional typhoons. October-November sees the worst flooding --
                  Hoi An&apos;s old town regularly floods during this period.
                </p>
              </div>
            </div>

            <div className="card-flat p-6 border-t-4 border-t-brand-secondary">
              <h3 className="font-display text-lg text-warm-900 mb-1">Southern Vietnam</h3>
              <p className="text-warm-400 text-sm mb-4">Ho Chi Minh City, Mekong Delta, Phu Quoc, Mui Ne</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-secondary">Best: Nov-Apr</span>
              </div>
              <div className="prose-custom text-sm">
                <p>
                  The south is hot and tropical all year, with temperatures rarely dropping
                  below 25 C. The dry season (November-April) is the most comfortable time to visit,
                  with sunny days and low humidity.
                </p>
                <p>
                  <strong>Wet season:</strong> May to October brings daily afternoon downpours
                  lasting 1-2 hours, but mornings are often sunny. The rain is heavy but
                  predictable, and travel is still very doable. Phu Quoc island is best November-March.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Weather Table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Monthly Weather Summary</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900 sticky left-0 bg-warm-100">Month</th>
                    <th className="px-4 py-3 font-display text-warm-900 text-center" colSpan={2}>North (Hanoi)</th>
                    <th className="px-4 py-3 font-display text-warm-900 text-center" colSpan={2}>Central (Da Nang)</th>
                    <th className="px-4 py-3 font-display text-warm-900 text-center" colSpan={2}>South (HCMC)</th>
                  </tr>
                  <tr className="bg-warm-50">
                    <th className="px-4 py-2 text-warm-500 text-xs sticky left-0 bg-warm-50"></th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">Temp C</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">Rain</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">Temp C</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">Rain</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">Temp C</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">Rain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100">
                  {months.map((m) => (
                    <tr key={m.name} className="hover:bg-warm-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-warm-900 sticky left-0 bg-white">{m.name}</td>
                      <td className="px-4 py-3 text-warm-600 text-center">{m.north.temp}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          m.north.rain === 'Low' ? 'bg-green-100 text-green-700' :
                          m.north.rain === 'Med' ? 'bg-yellow-100 text-yellow-700' :
                          m.north.rain === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {m.north.icon} {m.north.rain}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-warm-600 text-center">{m.central.temp}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          m.central.rain === 'Low' ? 'bg-green-100 text-green-700' :
                          m.central.rain === 'Med' ? 'bg-yellow-100 text-yellow-700' :
                          m.central.rain === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {m.central.icon} {m.central.rain}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-warm-600 text-center">{m.south.temp}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          m.south.rain === 'Low' ? 'bg-green-100 text-green-700' :
                          m.south.rain === 'Med' ? 'bg-yellow-100 text-yellow-700' :
                          m.south.rain === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {m.south.icon} {m.south.rain}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-warm-50 text-warm-500 text-xs">
              Temperatures in Celsius (min-max). Rain levels: Low (&lt;50mm), Med (50-150mm), High (150-300mm), V.High (&gt;300mm).
            </div>
          </div>
        </section>

        {/* Typhoon Season */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Typhoon Season</h2>
          <div className="card-flat p-6 lg:p-8 border-l-4 border-l-brand-primary">
            <div className="prose-custom">
              <p>
                Vietnam&apos;s typhoon season runs from <strong>June to November</strong>, with the highest
                risk in <strong>September and October</strong>. Typhoons primarily affect the central and
                northern coasts. Southern Vietnam is rarely hit by typhoons.
              </p>
              <h3>What to Expect</h3>
              <ul>
                <li>Central Vietnam (Da Nang, Hoi An, Hue) is most vulnerable from September to November</li>
                <li>Northern coast and Ha Long Bay can be affected from July to September</li>
                <li>Typhoons bring heavy rain, flooding, and flight/boat cancellations</li>
                <li>The Vietnamese government issues warnings 48-72 hours in advance</li>
              </ul>
              <h3>If You Are Traveling During Typhoon Season</h3>
              <ul>
                <li>Monitor weather forecasts daily (use Windy.com or the Vietnam Meteorological Center)</li>
                <li>Have flexible travel insurance that covers weather disruptions</li>
                <li>Avoid booking Ha Long Bay cruises or island trips during peak typhoon months</li>
                <li>Keep some indoor activities (museums, cooking classes, spas) on your backup plan</li>
                <li>Most typhoons pass within 1-2 days, so short delays are manageable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What to Pack */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">What to Pack by Season</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">Dry Season (Nov-Apr)</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  Light, breathable clothing (cotton or moisture-wicking fabrics)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  Light jacket or sweater for air-conditioned venues and northern evenings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  Warm layers if visiting Sapa or northern highlands (temperatures can reach 5 C)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  Comfortable walking shoes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  Sunscreen, sunglasses, and a hat
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  Light scarf for temple visits (shoulders and knees should be covered)
                </li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">Wet Season (May-Oct)</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  Everything from dry season, plus:
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  A compact, packable rain jacket (not just an umbrella -- motorbike taxis!)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  Waterproof bag or dry bag for electronics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  Quick-dry clothing and sandals that handle getting wet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  Waterproof phone case (especially for boat trips)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  Insect repellent (mosquitoes increase during rainy season)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-warm-100 rounded-xl p-4 mt-6">
            <p className="text-warm-600 text-sm">
              <strong className="text-warm-800">Local tip:</strong> You can buy cheap rain ponchos (ao mua) at any
              convenience store in Vietnam for about 10,000-30,000 VND ($0.40-1.20). Locals use them while
              riding motorbikes, and they work great. No need to pack a bulky rain jacket.
            </p>
          </div>
        </section>

        {/* Regional Highlights */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">Destination-Specific Weather Tips</h2>
          <div className="space-y-4">
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Ha Long Bay</h3>
              <p className="text-warm-600 text-sm">
                Best visited October-December and March-April. Summer cruises are hot and hazy.
                Winter (January-February) can be foggy with limited visibility, though fewer crowds.
                Cruise cancellations are possible during typhoon season and rough seas.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Sapa</h3>
              <p className="text-warm-600 text-sm">
                Rice terraces are greenest in September-October (just before harvest) and freshly planted
                in May-June. Winter brings cold fog and occasional frost but atmospheric trekking.
                March-May offers clear days and comfortable temperatures for hiking.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Hoi An</h3>
              <p className="text-warm-600 text-sm">
                February-May is peak beach season. The old town floods regularly in October-November.
                The Lantern Festival (full moon each month) is magical year-round. Summer is hot
                (35 C+) but dry.
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">Phu Quoc Island</h3>
              <p className="text-warm-600 text-sm">
                Best from November to March with calm seas and blue skies. The wet season (June-September)
                brings rough seas and some resorts close. April-May is the transition period with warm
                weather and smaller crowds.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
