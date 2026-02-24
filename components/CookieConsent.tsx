import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const CookieConsent = () => {
  const { t } = useTranslation('common');
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in-up">
      <div className="card shadow-soft-xl border border-warm-200 rounded-2xl p-5">
        <div className="flex items-start gap-3 mb-4">
          <svg className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-display font-semibold text-warm-900 text-sm mb-1">{t('cookie.title')}</h3>
            <p className="text-xs text-warm-500 leading-relaxed">
              {t('cookie.description')}
              {!showDetails && (
                <button onClick={() => setShowDetails(true)} className="text-brand-primary hover:underline ml-1 font-medium">
                  {t('cookie.learnMore')}
                </button>
              )}
            </p>
            {showDetails && (
              <div className="mt-2.5 text-xs text-warm-500 space-y-1.5">
                <p><strong className="text-warm-700">{t('cookie.necessary')}</strong> {t('cookie.necessaryDesc')}</p>
                <p><strong className="text-warm-700">{t('cookie.analytics')}</strong> {t('cookie.analyticsDesc')}</p>
                <p><strong className="text-warm-700">{t('cookie.marketing')}</strong> {t('cookie.marketingDesc')}</p>
                <button onClick={() => setShowDetails(false)} className="text-brand-primary hover:underline font-medium">{t('cookie.showLess')}</button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={acceptNecessary}
            className="flex-1 px-4 py-2 text-xs font-medium text-warm-600 hover:text-warm-900 bg-warm-100 hover:bg-warm-200 rounded-xl transition-colors"
          >
            {t('cookie.necessaryOnly')}
          </button>
          <button
            onClick={acceptAll}
            className="btn-primary flex-1 px-4 py-2 text-xs"
          >
            {t('cookie.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
