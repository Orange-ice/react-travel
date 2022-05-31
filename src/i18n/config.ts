import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import zh from './zh.json';
import en from './en.json';

const resources = {
  zh: {
    translation: zh
  },
  en: {
    translation: en
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    interpolation: {escapeValue: false},
  });


export default i18next;