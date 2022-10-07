import React from 'react';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import leoProfanity from 'leo-profanity';
import { Provider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import store from './slices/store';
import ru from './locales/resources/ru';
import App from './App.js';

export default async () => {
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({
    fallbackLng: 'ru',
    debug: false,
    resources: {
      ru,
    },
  });
  leoProfanity.add(leoProfanity.getDictionary('en'));
  leoProfanity.add(leoProfanity.getDictionary('ru'));
  const isProduction = process.env.NODE_ENV === 'production';
  console.log(process.env);
  const rollbarConfig = {
    enabled: isProduction,
    accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  };
  const app = (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RollbarProvider config={rollbarConfig}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </RollbarProvider>
      </I18nextProvider>
    </Provider>
  );
  return app;
};
