import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import commonNl from '../translations/nl/common.json';
import commonEn from '../translations/en/common.json';
import guidesNl from '../translations/nl/guides.json';
import guidesEn from '../translations/en/guides.json';

const allTranslations: Record<string, Record<string, any>> = {
  nl: { common: commonNl, guides: guidesNl },
  en: { common: commonEn, guides: guidesEn },
};

type TranslationFile = 'common' | 'guides';

export function useTranslation(file: TranslationFile = 'common') {
  const router = useRouter();
  const locale = router.locale || 'nl';
  const [translations, setTranslations] = useState<any>(
    allTranslations[locale]?.[file] || allTranslations['nl'][file] || {}
  );

  useEffect(() => {
    const t = allTranslations[locale]?.[file];
    if (t) {
      setTranslations(t);
      return;
    }

    // Dynamic import fallback
    async function loadTranslations() {
      try {
        const translationModule = await import(`../translations/${locale}/${file}.json`);
        setTranslations(translationModule.default || translationModule);
      } catch (error) {
        // Fallback to nl
        const fallback = allTranslations['nl']?.[file];
        if (fallback) {
          setTranslations(fallback);
        } else {
          console.error(`Translation file not found: ${locale}/${file}`, error);
          setTranslations({});
        }
      }
    }

    loadTranslations();
  }, [locale, file]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    return value || key;
  };

  return { t, locale };
}
