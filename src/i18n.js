import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationYO from './locales/yo/translation.json';
import translationSW from './locales/sw/translation.json';
import translationIG from './locales/ig/translation.json';
import translationPidgin from './locales/pidgin/translation.json'
import translationPT from './locales/pt/translation.json'
import translationFR from './locales/fr/translation.json'
import translationHA from './locales/ha/translation.json'
import translationAR from './locales/ar/translation.json'

const resources = {
  en: { translation: translationEN },
  yo: { translation: translationYO },
  sw: { translation: translationSW },
  ig: { translation: translationIG },
  fr: { translation: translationFR},
  pidgin: { translation: translationPidgin},
  pt: { translation: translationPT},
  ha: { translation: translationHA},
  ar: { translation: translationAR},
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
