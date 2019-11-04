import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init(
    {
      fallbackLng: 'en',

      ns: ['translations'],
      defaultNS: 'translations',

      debug: false,

      interpolation: {
        escapeValue: false,
        format: (value, format, lng) => {
          console.log('lng of format:', {lng, value, format})
          if (format === 'big usd') return '$' + parseFloat(value).toFixed(0)

        }
      },
      detection: {
        lookupQuerystring: "lang",
      },
      saveMissing: true,

      react: {
        wait: true,
      },
    },
    err => {
      if (err) {
        console.error('error while initialising i18next ::: ' + JSON.stringify(err));
      }
    }
  );

export default i18n;
