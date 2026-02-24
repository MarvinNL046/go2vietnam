import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

export default function TransportGuide() {
  const { t } = useTranslation('common');
  const { t: tg } = useTranslation('guides');

  return (
    <>
      <SEOHead
        title={`${tg('transport.seoTitle')} | ${siteConfig.name}`}
        description={tg('transport.seoDescription')}
      />

      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: tg('transport.breadcrumb'), href: '/transport/' },
        ]} />

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-display text-display-sm text-warm-900 mb-4">
            {tg('transport.title')}
          </h1>
          <p className="text-warm-500 text-lg max-w-3xl">
            {tg('transport.intro')}
          </p>
        </div>

        {/* Quick Cost Comparison */}
        <div className="card-flat p-6 lg:p-8 mb-16">
          <h2 className="font-display text-xl text-warm-900 mb-4">{tg('transport.quickComparison')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-warm-100">
                <tr>
                  <th className="px-4 py-3 font-display text-warm-900">{tg('transport.tableMode')}</th>
                  <th className="px-4 py-3 font-display text-warm-900">{tg('transport.tableDuration')}</th>
                  <th className="px-4 py-3 font-display text-warm-900">{tg('transport.tablePriceRange')}</th>
                  <th className="px-4 py-3 font-display text-warm-900">{tg('transport.tableComfort')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-100">
                <tr>
                  <td className="px-4 py-3 text-warm-700 font-medium">{tg('transport.flight')}</td>
                  <td className="px-4 py-3 text-warm-600">{tg('transport.flightDuration')}</td>
                  <td className="px-4 py-3 text-warm-600">{tg('transport.flightPrice')}</td>
                  <td className="px-4 py-3"><span className="badge-primary">{tg('transport.flightComfort')}</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-warm-700 font-medium">{tg('transport.trainSleeper')}</td>
                  <td className="px-4 py-3 text-warm-600">{tg('transport.trainSleeperDuration')}</td>
                  <td className="px-4 py-3 text-warm-600">{tg('transport.trainSleeperPrice')}</td>
                  <td className="px-4 py-3"><span className="badge-accent">{tg('transport.trainSleeperComfort')}</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-warm-700 font-medium">{tg('transport.sleeperBusMode')}</td>
                  <td className="px-4 py-3 text-warm-600">{tg('transport.sleeperBusDuration')}</td>
                  <td className="px-4 py-3 text-warm-600">{tg('transport.sleeperBusPrice')}</td>
                  <td className="px-4 py-3"><span className="badge-secondary">{tg('transport.sleeperBusComfort')}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Domestic Flights */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('transport.domesticFlights')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {tg('transport.domesticFlightsIntro')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.vietnamAirlines')}</h3>
                <span className="badge-primary mb-3">{tg('transport.fullService')}</span>
                <p className="text-warm-600 text-sm mt-3">
                  {tg('transport.vietnamAirlinesDesc')}{' '}
                  <a href="https://www.vietnamairlines.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    vietnamairlines.com
                  </a>
                </p>
                <p className="text-warm-500 text-xs mt-2">{tg('transport.vietnamAirlinesPrice')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.vietJet')}</h3>
                <span className="badge-accent mb-3">{tg('transport.budget')}</span>
                <p className="text-warm-600 text-sm mt-3">
                  {tg('transport.vietJetDesc')}{' '}
                  <a href="https://www.vietjetair.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    vietjetair.com
                  </a>
                </p>
                <p className="text-warm-500 text-xs mt-2">{tg('transport.vietJetPrice')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-5">
                <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.bambooAirways')}</h3>
                <span className="badge-secondary mb-3">{tg('transport.hybrid')}</span>
                <p className="text-warm-600 text-sm mt-3">
                  {tg('transport.bambooDesc')}{' '}
                  <a href="https://www.bambooairways.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                    bambooairways.com
                  </a>
                </p>
                <p className="text-warm-500 text-xs mt-2">{tg('transport.bambooPrice')}</p>
              </div>
            </div>

            <div className="bg-brand-accent-50 border border-brand-accent-200 rounded-xl p-4 mt-6">
              <p className="text-brand-accent-800 font-medium text-sm">
                <strong>{tg('transport.bookingTip')}</strong> {tg('transport.bookingTipText')}
              </p>
            </div>
          </div>
        </section>

        {/* Trains */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('transport.trains')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {tg('transport.trainsIntro')}
              </p>

              <h3>{tg('transport.popularTrainRoutes')}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.hanoiDaNang')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.hanoiDaNangDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.hanoiSapa')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.hanoiSapaDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.daNangHue')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.daNangHueDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.hcmcNhaTrang')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.hcmcNhaTrangDetails')}</p>
              </div>
            </div>

            <div className="prose-custom">
              <h3>{tg('transport.seatClasses')}</h3>
              <ul>
                <li><strong>{tg('transport.hardSeat')}</strong> {tg('transport.hardSeatDesc')}</li>
                <li><strong>{tg('transport.softSeat')}</strong> {tg('transport.softSeatDesc')}</li>
                <li><strong>{tg('transport.hardSleeper')}</strong> {tg('transport.hardSleeperDesc')}</li>
                <li><strong>{tg('transport.softSleeperClass')}</strong> {tg('transport.softSleeperDesc')}</li>
              </ul>

              <h3>{tg('transport.howToBook')}</h3>
              <p>
                {tg('transport.howToBookText')}
              </p>
            </div>

            <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 mt-6">
              <p className="text-brand-primary-800 font-medium text-sm">
                <strong>{tg('transport.mustDo')}</strong> {tg('transport.mustDoText')}
              </p>
            </div>
          </div>
        </section>

        {/* Sleeper Buses */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('transport.sleeperBuses')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {tg('transport.sleeperBusesIntro')}
              </p>

              <h3>{tg('transport.majorBusOperators')}</h3>
              <ul>
                <li><strong>{tg('transport.sinhTourist')}</strong> {tg('transport.sinhTouristDesc')}</li>
                <li><strong>{tg('transport.futaBus')}</strong> {tg('transport.futaBusDesc')}</li>
                <li><strong>{tg('transport.hoangLong')}</strong> {tg('transport.hoangLongDesc')}</li>
                <li><strong>{tg('transport.camelTravel')}</strong> {tg('transport.camelTravelDesc')}</li>
              </ul>

              <h3>{tg('transport.popularBusRoutes')}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.busHanoiSapa')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.busHanoiSapaDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.busHanoiNinhBinh')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.busHanoiNinhBinhDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.busHueHoiAn')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.busHueHoiAnDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.busNhaTrangDaLat')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.busNhaTrangDaLatDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.busHcmcMuiNe')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.busHcmcMuiNeDetails')}</p>
              </div>
              <div className="bg-warm-50 rounded-xl p-4">
                <p className="font-medium text-warm-900">{tg('transport.busHcmcCanTho')}</p>
                <p className="text-warm-500 text-sm">{tg('transport.busHcmcCanThoDetails')}</p>
              </div>
            </div>

            <div className="prose-custom">
              <p>
                {tg('transport.busBookingText')}
              </p>
            </div>

            <div className="bg-warm-100 rounded-xl p-4 mt-6">
              <p className="text-warm-600 text-sm">
                <strong className="text-warm-800">{tg('transport.tallTip')}</strong> {tg('transport.tallTipText')}
              </p>
            </div>
          </div>
        </section>

        {/* Local Transport */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('transport.localTransport')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.grab')}</h3>
              <span className="badge-primary mb-3">{tg('transport.recommended')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {tg('transport.grabDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{tg('transport.grabBikePrice')}</li>
                <li>{tg('transport.grabCarPrice')}</li>
                <li>{tg('transport.grabDownload')}</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.xeOm')}</h3>
              <span className="badge-accent mb-3">{tg('transport.traditional')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {tg('transport.xeOmDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{tg('transport.xeOmNegotiate')}</li>
                <li>{tg('transport.xeOmBenchmark')}</li>
                <li>{tg('transport.xeOmNoData')}</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.meteredTaxis')}</h3>
              <span className="badge-secondary mb-3">{tg('transport.reliable')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {tg('transport.meteredTaxisDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{tg('transport.taxiFlagFall')}</li>
                <li>{tg('transport.taxiPerKm')}</li>
                <li>{tg('transport.taxiAvoidUnmarked')}</li>
              </ul>
            </div>
            <div className="card-flat p-6">
              <h3 className="font-display text-lg text-warm-900 mb-2">{tg('transport.cityBuses')}</h3>
              <span className="badge-secondary mb-3">{tg('transport.cheapest')}</span>
              <p className="text-warm-600 text-sm mt-3">
                {tg('transport.cityBusesDesc')}
              </p>
              <ul className="text-warm-500 text-xs mt-3 space-y-1">
                <li>{tg('transport.busGoogleMaps')}</li>
                <li>{tg('transport.busMetro')}</li>
                <li>{tg('transport.busAirport')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Motorbike Rental */}
        <section className="mb-16">
          <h2 className="font-display text-2xl text-warm-900 mb-6">{tg('transport.motorbikeRental')}</h2>
          <div className="card-flat p-6 lg:p-8">
            <div className="prose-custom">
              <p>
                {tg('transport.motorbikeIntro')}
              </p>

              <h3>{tg('transport.costs')}</h3>
              <ul>
                <li><strong>{tg('transport.automaticScooter')}</strong> {tg('transport.automaticScooterPrice')}</li>
                <li><strong>{tg('transport.semiAutomatic')}</strong> {tg('transport.semiAutomaticPrice')}</li>
                <li><strong>{tg('transport.monthlyRental')}</strong> {tg('transport.monthlyRentalPrice')}</li>
                <li><strong>{tg('transport.fuel')}</strong> {tg('transport.fuelPrice')}</li>
              </ul>

              <h3>{tg('transport.licenseRequirements')}</h3>
              <p>
                {tg('transport.licenseText')}
              </p>

              <h3>{tg('transport.safetyTips')}</h3>
              <ul>
                <li>{tg('transport.safetyHelmet')}</li>
                <li>{tg('transport.safetyStartQuiet')}</li>
                <li>{tg('transport.safetyDriveSlower')}</li>
                <li>{tg('transport.safetyWatchRoad')}</li>
                <li>{tg('transport.safetyHonk')}</li>
                <li>{tg('transport.safetyNight')}</li>
                <li>{tg('transport.safetyCheckBike')}</li>
              </ul>
            </div>

            <div className="bg-brand-primary-50 border border-brand-primary-200 rounded-xl p-4 mt-6">
              <p className="text-brand-primary-800 font-medium text-sm">
                <strong>{tg('transport.insuranceWarning')}</strong> {tg('transport.insuranceWarningText')}
              </p>
            </div>
          </div>
        </section>

        {/* Book Transport CTA */}
        <section className="mb-8">
          <div className="bg-brand-secondary-900 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="font-display text-2xl text-white mb-4">{tg('transport.bookTransport')}</h2>
            <p className="text-warm-400 mb-6 max-w-xl mx-auto">
              {tg('transport.bookTransportDesc')}
            </p>
            <a
              href={siteConfig.affiliateLinks.transport}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              {tg('transport.searchRoutes')}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
