'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 glass transition-all duration-300 ${
        scrolled ? 'shadow-soft' : 'shadow-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo -- left */}
          <Link href="/" className="flex items-center shrink-0 group transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/images/logo-go2vietnam-cropped.png"
              alt={siteConfig.name}
              height={40}
              width={176}
              className="object-contain h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav -- center */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">{t('nav.home')}</NavLink>
            <NavLink href="/city/">{t('nav.cities')}</NavLink>
            <NavLink href="/islands/">{t('nav.islands')}</NavLink>
            <NavLink href="/region/">{t('nav.regions')}</NavLink>

            {/* Food & Drinks Dropdown */}
            <Dropdown label={t('nav.foodDrinks')}>
              <DropdownItem href="/food/">{t('nav.food')}</DropdownItem>
              <DropdownItem href="/drinks/">{t('nav.drinks')}</DropdownItem>
            </Dropdown>

            {/* Travel Info Dropdown */}
            <Dropdown label={t('nav.travelNeeds')}>
              <DropdownItem href="/visa/">{t('nav.visaGuide')}</DropdownItem>
              <DropdownItem href="/practical-info/">{t('nav.practicalInfo')}</DropdownItem>
              <DropdownItem href="/weather/">{t('nav.weather')}</DropdownItem>
              <DropdownItem href="/transport/">{t('nav.transport')}</DropdownItem>
              <div className="my-1 border-t border-warm-100" />
              <DropdownItem href="/esim/">{t('nav.esim')}</DropdownItem>
              <DropdownItem href="/travel-insurance/">{t('nav.insurance')}</DropdownItem>
            </Dropdown>

            <NavLink href="/blog/">{t('nav.blog')}</NavLink>
          </div>

          {/* CTA + Language -- right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/city/" className="btn-primary !py-2 !px-5 !text-xs">
              {t('nav.exploreNow')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-brand-secondary hover:bg-warm-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={t('nav.openMainMenu')}
          >
            <span className="sr-only">{t('nav.openMainMenu')}</span>
            {/* Animated hamburger / X */}
            <span className="absolute block w-5 h-[2px] bg-current transition-all duration-300"
              style={{
                transform: isMobileMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)',
              }}
            />
            <span className="absolute block w-5 h-[2px] bg-current transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span className="absolute block w-5 h-[2px] bg-current transition-all duration-300"
              style={{
                transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)',
              }}
            />
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* Mobile full-screen overlay                                         */}
      {/* ------------------------------------------------------------------ */}
      <div
        className={`fixed inset-0 top-16 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobile}
        />

        {/* Panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-soft-xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex-1 px-6 pt-8 pb-6 space-y-1">
              <MobileLink href="/" onClick={closeMobile}>{t('nav.home')}</MobileLink>
              <MobileLink href="/city/" onClick={closeMobile}>{t('nav.cities')}</MobileLink>
              <MobileLink href="/islands/" onClick={closeMobile}>{t('nav.islands')}</MobileLink>
              <MobileLink href="/region/" onClick={closeMobile}>{t('nav.regions')}</MobileLink>

              <div className="pt-3 pb-1">
                <span className="text-xs font-display font-semibold uppercase tracking-wider text-warm-400 px-3">
                  {t('nav.foodDrinks')}
                </span>
              </div>
              <MobileLink href="/food/" onClick={closeMobile}>{t('nav.food')}</MobileLink>
              <MobileLink href="/drinks/" onClick={closeMobile}>{t('nav.drinks')}</MobileLink>

              <div className="pt-3 pb-1">
                <span className="text-xs font-display font-semibold uppercase tracking-wider text-warm-400 px-3">
                  {t('nav.travelNeeds')}
                </span>
              </div>
              <MobileLink href="/visa/" onClick={closeMobile}>{t('nav.visaGuide')}</MobileLink>
              <MobileLink href="/practical-info/" onClick={closeMobile}>{t('nav.practicalInfo')}</MobileLink>
              <MobileLink href="/weather/" onClick={closeMobile}>{t('nav.weather')}</MobileLink>
              <MobileLink href="/transport/" onClick={closeMobile}>{t('nav.transport')}</MobileLink>

              <div className="my-3 border-t border-warm-100" />

              <MobileLink href="/esim/" onClick={closeMobile}>{t('nav.esim')}</MobileLink>
              <MobileLink href="/travel-insurance/" onClick={closeMobile}>{t('nav.insurance')}</MobileLink>
              <MobileLink href="/blog/" onClick={closeMobile}>{t('nav.blog')}</MobileLink>
            </div>

            {/* Mobile CTA + Language at bottom */}
            <div className="px-6 py-6 border-t border-warm-100 space-y-4">
              <Link
                href="/city/"
                className="btn-primary w-full text-center"
                onClick={closeMobile}
              >
                {t('nav.exploreNow')}
              </Link>
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ====================================================================== */
/* Sub-components                                                         */
/* ====================================================================== */

/** Desktop nav link with subtle underline hover */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-warm-700 hover:text-brand-secondary transition-colors duration-200
        after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px] after:bg-brand-primary after:rounded-full
        after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
    >
      {children}
    </Link>
  );
}

/** Desktop dropdown wrapper with floating card */
function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button
        className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-warm-700 hover:text-brand-secondary transition-colors duration-200
          after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px] after:bg-brand-primary after:rounded-full
          after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-200"
      >
        <span>{label}</span>
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Floating card */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pt-2
          opacity-0 invisible translate-y-2
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          transition-all duration-200 ease-out z-50"
      >
        <div className="w-56 bg-white rounded-2xl shadow-soft-xl border border-warm-100 overflow-hidden py-2">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Dropdown menu item */
function DropdownItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2.5 text-sm text-warm-600 hover:text-brand-secondary hover:bg-warm-50 transition-colors duration-150"
    >
      {children}
    </Link>
  );
}

/** Mobile menu link */
function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 text-base font-medium text-warm-700 hover:text-brand-secondary rounded-xl hover:bg-warm-50 transition-colors duration-150"
    >
      {children}
    </Link>
  );
}

export default Header;
