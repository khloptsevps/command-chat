import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './resources/ru.js';

i18next.use(initReactI18next).init({
  lng: 'ru',
  debug: true,
  resources: {
    ru,
  },
});
