import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function WeatherGuide() {
  const { t } = useTranslation('common');
  const { t: tg } = useTranslation('guides');

  const months = [
    { name: 'Jan', north: { temp: '14-20', rain: 'Low', icon: '\u{1F325}\u{FE0F}' }, central: { temp: '20-25', rain: 'Low', icon: '\u{2600}\u{FE0F}' }, south: { temp: '26-32', rain: 'Low', icon: '\u{2600}\u{FE0F}' } },
    { name: 'Feb', north: { temp: '15-21', rain: 'Low', icon: '\u{1F325}\u{FE0F}' }, central: { temp: '21-27', rain: 'Low', icon: '\u{2600}\u{FE0F}' }, south: { temp: '27-33', rain: 'Low', icon: '\u{2600}\u{FE0F}' } },
    { name: 'Mar', north: { temp: '18-24', rain: 'Low', icon: '\u{1F324}\u{FE0F}' }, central: { temp: '23-30', rain: 'Low', icon: '\u{2600}\u{FE0F}' }, south: { temp: '28-34', rain: 'Low', icon: '\u{2600}\u{FE0F}' } },
    { name: 'Apr', north: { temp: '22-28', rain: 'Med', icon: '\u{1F324}\u{FE0F}' }, central: { temp: '25-33', rain: 'Low', icon: '\u{2600}\u{FE0F}' }, south: { temp: '29-35', rain: 'Med', icon: '\u{1F324}\u{FE0F}' } },
    { name: 'May', north: { temp: '26-32', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, central: { temp: '27-35', rain: 'Med', icon: '\u{1F324}\u{FE0F}' }, south: { temp: '28-34', rain: 'High', icon: '\u{1F327}\u{FE0F}' } },
    { name: 'Jun', north: { temp: '28-34', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, central: { temp: '28-36', rain: 'Med', icon: '\u{2600}\u{FE0F}' }, south: { temp: '27-33', rain: 'High', icon: '\u{1F327}\u{FE0F}' } },
    { name: 'Jul', north: { temp: '28-34', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, central: { temp: '28-36', rain: 'Low', icon: '\u{2600}\u{FE0F}' }, south: { temp: '27-32', rain: 'High', icon: '\u{1F327}\u{FE0F}' } },
    { name: 'Aug', north: { temp: '27-33', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, central: { temp: '27-35', rain: 'Med', icon: '\u{1F324}\u{FE0F}' }, south: { temp: '27-32', rain: 'High', icon: '\u{1F327}\u{FE0F}' } },
    { name: 'Sep', north: { temp: '25-31', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, central: { temp: '25-32', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, south: { temp: '27-32', rain: 'High', icon: '\u{1F327}\u{FE0F}' } },
    { name: 'Oct', north: { temp: '22-28', rain: 'Med', icon: '\u{1F324}\u{FE0F}' }, central: { temp: '23-29', rain: 'V.High', icon: '\u{26C8}\u{FE0F}' }, south: { temp: '27-32', rain: 'High', icon: '\u{1F327}\u{FE0F}' } },
    { name: 'Nov', north: { temp: '18-24', rain: 'Low', icon: '\u{1F325}\u{FE0F}' }, central: { temp: '22-27', rain: 'V.High', icon: '\u{26C8}\u{FE0F}' }, south: { temp: '27-32', rain: 'Med', icon: '\u{1F324}\u{FE0F}' } },
    { name: 'Dec', north: { temp: '14-20', rain: 'Low', icon: '\u{1F325}\u{FE0F}' }, central: { temp: '20-25', rain: 'High', icon: '\u{1F327}\u{FE0F}' }, south: { temp: '26-31', rain: 'Low', icon: '\u{2600}\u{FE0F}' } },
  ];

  return (
    <>
      <SEOHead
        title={`${tg('weather.seoTitle')} | ${siteConfig.name}`}
        description={tg('weather.seoDescription')}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: tg('weather.breadcrumb'), href: '/weather/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {tg('weather.title')}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {tg('weather.intro')}
          </p>
        </div>

        {/* Climate Overview */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('weather.climateOverview')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {tg('weather.climateOverviewIntro')}
              </p>
              <ul>
                <li>{tg('weather.climateNorth')}</li>
                <li>{tg('weather.climateCentral')}</li>
                <li>{tg('weather.climateSouth')}</li>
              </ul>
              <p>
                {tg('weather.climateNoBestTime')}
              </p>
            </div>
          </div>
        </section>

        {/* Best Time Cards */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('weather.bestTimeTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-flat p-6 border-t-4 border-t-brand-primary">
              <h3 className="font-display text-lg text-warm-900 mb-1">{tg('weather.northernVietnam')}</h3>
              <p className="text-warm-400 text-sm mb-4">{tg('weather.northernCities')}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-primary">{tg('weather.northernBest')}</span>
              </div>
              <div className="prose-custom text-sm">
                <p>
                  {tg('weather.northernDesc')}
                </p>
                <p>
                  <strong>{tg('weather.northernAvoid')}</strong> {tg('weather.northernAvoidText')}
                </p>
              </div>
            </div>

            <div className="card-flat p-6 border-t-4 border-t-brand-accent">
              <h3 className="font-display text-lg text-warm-900 mb-1">{tg('weather.centralVietnam')}</h3>
              <p className="text-warm-400 text-sm mb-4">{tg('weather.centralCities')}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-accent">{tg('weather.centralBest')}</span>
              </div>
              <div className="prose-custom text-sm">
                <p>
                  {tg('weather.centralDesc')}
                </p>
                <p>
                  <strong>{tg('weather.centralAvoid')}</strong> {tg('weather.centralAvoidText')}
                </p>
              </div>
            </div>

            <div className="card-flat p-6 border-t-4 border-t-brand-secondary">
              <h3 className="font-display text-lg text-warm-900 mb-1">{tg('weather.southernVietnam')}</h3>
              <p className="text-warm-400 text-sm mb-4">{tg('weather.southernCities')}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-secondary">{tg('weather.southernBest')}</span>
              </div>
              <div className="prose-custom text-sm">
                <p>
                  {tg('weather.southernDesc')}
                </p>
                <p>
                  <strong>{tg('weather.southernWetSeason')}</strong> {tg('weather.southernWetText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Weather Table */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('weather.monthlyTitle')}</h2>
          <div className="card-flat overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-4 py-3 font-display text-warm-900 sticky left-0 bg-warm-100">{tg('weather.tableMonth')}</th>
                    <th className="px-4 py-3 font-display text-warm-900 text-center" colSpan={2}>{tg('weather.tableNorth')}</th>
                    <th className="px-4 py-3 font-display text-warm-900 text-center" colSpan={2}>{tg('weather.tableCentral')}</th>
                    <th className="px-4 py-3 font-display text-warm-900 text-center" colSpan={2}>{tg('weather.tableSouth')}</th>
                  </tr>
                  <tr className="bg-warm-50">
                    <th className="px-4 py-2 text-warm-500 text-xs sticky left-0 bg-warm-50"></th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">{tg('weather.tableTempC')}</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">{tg('weather.tableRain')}</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">{tg('weather.tableTempC')}</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">{tg('weather.tableRain')}</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">{tg('weather.tableTempC')}</th>
                    <th className="px-4 py-2 text-warm-500 text-xs text-center">{tg('weather.tableRain')}</th>
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
              {tg('weather.tableFootnote')}
            </div>
          </div>
        </section>

        {/* Typhoon Season */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('weather.typhoonTitle')}</h2>
          <div className="card-flat p-6 lg:p-8 border-l-4 border-l-brand-primary">
            <div className="prose-custom">
              <p>
                {tg('weather.typhoonIntro')}
              </p>
              <h3>{tg('weather.typhoonExpect')}</h3>
              <ul>
                <li>{tg('weather.typhoonCentral')}</li>
                <li>{tg('weather.typhoonNorth')}</li>
                <li>{tg('weather.typhoonEffects')}</li>
                <li>{tg('weather.typhoonWarning')}</li>
              </ul>
              <h3>{tg('weather.typhoonTravelTitle')}</h3>
              <ul>
                <li>{tg('weather.typhoonMonitor')}</li>
                <li>{tg('weather.typhoonInsurance')}</li>
                <li>{tg('weather.typhoonAvoidCruises')}</li>
                <li>{tg('weather.typhoonBackupPlan')}</li>
                <li>{tg('weather.typhoonDuration')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What to Pack */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('weather.packingTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">{tg('weather.drySeasonTitle')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  {tg('weather.dryLight')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  {tg('weather.dryJacket')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  {tg('weather.dryWarmLayers')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  {tg('weather.dryShoes')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  {tg('weather.drySunscreen')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-primary font-bold flex-shrink-0">+</span>
                  {tg('weather.dryScarf')}
                </li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-4">{tg('weather.wetSeasonTitle')}</h3>
              <ul className="space-y-2 text-warm-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  {tg('weather.wetEverything')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  {tg('weather.wetRainJacket')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  {tg('weather.wetDryBag')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  {tg('weather.wetQuickDry')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  {tg('weather.wetPhoneCase')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent-600 font-bold flex-shrink-0">+</span>
                  {tg('weather.wetRepellent')}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-warm-100 rounded-xl p-4 mt-6">
            <p className="text-warm-600 text-sm">
              <strong className="text-warm-800">{tg('weather.localPackingTip')}</strong> {tg('weather.localPackingTipText')}
            </p>
          </div>
        </section>

        {/* Regional Highlights */}
        <section className="mb-8">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('weather.destinationTipsTitle')}</h2>
          <div className="space-y-4">
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{tg('weather.haLongBay')}</h3>
              <p className="text-warm-600 text-sm">
                {tg('weather.haLongBayTip')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{tg('weather.sapa')}</h3>
              <p className="text-warm-600 text-sm">
                {tg('weather.sapaTip')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{tg('weather.hoiAn')}</h3>
              <p className="text-warm-600 text-sm">
                {tg('weather.hoiAnTip')}
              </p>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-base text-warm-900 mb-2">{tg('weather.phuQuoc')}</h3>
              <p className="text-warm-600 text-sm">
                {tg('weather.phuQuocTip')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
