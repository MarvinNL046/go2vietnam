import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig, getOtherSisterSites } from '../site.config';
import { useNewsletterForm } from '../hooks/useNewsletterForm';
import { useToast } from './Toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('common');
  const sisterSites = getOtherSisterSites();
  const { email, setEmail, status, handleSubmit } = useNewsletterForm();
  const toast = useToast();

  return (
    <footer className="bg-gradient-to-b from-brand-secondary-900 to-brand-secondary text-white">
      {/* ---------------------------------------------------------------- */}
      {/* Top brand section                                                */}
      {/* ---------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">
            {siteConfig.name}
          </h2>
          <div className="mt-3 w-12 h-1 rounded-full bg-brand-accent" />
          <p className="mt-4 text-warm-300 text-base leading-relaxed">
            {t('footer.aboutText')}
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Newsletter Section                                               */}
      {/* ---------------------------------------------------------------- */}
      <div className="border-b border-warm-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t('newsletter.footerTitle')}
              </h3>
              <p className="text-warm-300 max-w-md">
                {t('newsletter.footerBody')}
              </p>
            </div>
            {status === 'success' ? (
              <div className="flex items-center gap-3 bg-green-500/20 px-6 py-3 rounded-lg">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-300 text-sm font-medium">{t('newsletter.successTitle')}</span>
              </div>
            ) : (
              <form
                className="flex w-full max-w-md"
                onSubmit={async (e) => {
                  await handleSubmit(e);
                  if (status !== 'error') {
                    toast.success(t('newsletter.successBody'));
                  }
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  required
                  className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-warm-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-brand-accent hover:bg-brand-accent/90 text-brand-secondary font-semibold rounded-r-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {status === 'loading' ? t('newsletter.subscribing') : t('newsletter.subscribe')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Main link grid                                                   */}
      {/* ---------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-brand-accent font-display font-semibold uppercase tracking-wider text-xs mb-5">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/city/">{t('nav.cities')}</FooterLink>
              <FooterLink href="/islands/">{t('nav.islands')}</FooterLink>
              <FooterLink href="/region/">{t('nav.regions')}</FooterLink>
              <FooterLink href="/food/">{t('nav.food')}</FooterLink>
              <FooterLink href="/drinks/">{t('nav.drinks')}</FooterLink>
              <FooterLink href="/visa/">{t('nav.visaGuide')}</FooterLink>
              <FooterLink href="/weather/">{t('nav.weather')}</FooterLink>
              <FooterLink href="/transport/">{t('nav.transport')}</FooterLink>
              <FooterLink href="/blog/">{t('nav.blog')}</FooterLink>
            </ul>
          </div>

          {/* Travel Resources */}
          <div>
            <h3 className="text-brand-accent font-display font-semibold uppercase tracking-wider text-xs mb-5">
              {t('footer.travelResources')}
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/esim/">{t('nav.esim')}</FooterLink>
              <FooterLink href="/travel-insurance/">{t('nav.insurance')}</FooterLink>
              <FooterLink href="/practical-info/">{t('nav.practicalInfo')}</FooterLink>
            </ul>
          </div>

          {/* Sister Sites */}
          <div>
            <h3 className="text-brand-accent font-display font-semibold uppercase tracking-wider text-xs mb-5">
              {t('footer.sisterSites')}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {sisterSites.map((site) => (
                <a
                  key={site.domain}
                  href={`https://${site.domain}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                    bg-white/5 text-warm-300 hover:bg-white/10 hover:text-white
                    transition-colors duration-200 truncate"
                  target="_blank"
                  rel="noopener"
                  title={`${site.name} - ${site.destination}`}
                >
                  {site.destination}
                </a>
              ))}
            </div>
          </div>

          {/* About / Brand */}
          <div>
            <h3 className="text-brand-accent font-display font-semibold uppercase tracking-wider text-xs mb-5">
              {siteConfig.destination}
            </h3>
            <p className="text-warm-300 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <p className="mt-6 text-xs text-warm-500">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Bottom bar                                                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="border-t border-warm-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <p className="text-warm-400 text-sm">
                &copy; {currentYear} {siteConfig.domain}. {t('footer.rights')}.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <Link
                  href="/privacy"
                  className="text-warm-400 hover:text-white transition-colors duration-200"
                >
                  {t('footer.privacy')}
                </Link>
                <span className="text-warm-600">|</span>
                <Link
                  href="/terms"
                  className="text-warm-400 hover:text-white transition-colors duration-200"
                >
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
            <p className="text-xs text-warm-500 text-center md:text-right">
              {t('footer.travelDisclaimer')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ====================================================================== */
/* Sub-component                                                          */
/* ====================================================================== */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-warm-300 hover:text-white text-sm transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

export default Footer;
