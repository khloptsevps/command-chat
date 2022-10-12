/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import leoProfanity from 'leo-profanity';
import { Provider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import store from './slices/store';
import ru from './locales/resources/ru';
import { addChannel, removeChannel, renameChannel } from './slices/channelsSlice.js';
import { addMessage } from './slices/messagesSlice.js';
import { SocketContext } from './utils/contexts/index.jsx';
import App from './App.js';

export default async (socket) => {
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
  const rollbarConfig = {
    enabled: isProduction,
    accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  };
  const addChannelListener = (payload) => {
    store.dispatch(addChannel(payload));
  };
  const messagesListener = (payload) => {
    store.dispatch(addMessage(payload));
  };
  const removeChannelListener = (payload) => {
    store.dispatch(removeChannel(payload.id));
  };
  const renameChannelListener = (payload) => {
    store.dispatch(renameChannel(payload));
  };
  socket.on('newMessage', messagesListener);
  socket.on('newChannel', addChannelListener);
  socket.on('removeChannel', removeChannelListener);
  socket.on('renameChannel', renameChannelListener);

  const confirmSocket = (socketFunc) => (value) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject();
    }, 3000);
    socketFunc(value, (response) => {
      if (response.status === 'ok') {
        clearTimeout(timer);
        resolve(response.data);
      }
      reject();
    });
  });

  const socketApi = {
    addNewChannel: confirmSocket((...value) => socket.volatile.emit('newChannel', ...value)),
  };

  const app = (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RollbarProvider config={rollbarConfig}>
          <ErrorBoundary>
            <SocketContext.Provider value={socketApi}>
              <App />
            </SocketContext.Provider>
          </ErrorBoundary>
        </RollbarProvider>
      </I18nextProvider>
    </Provider>
  );
  return app;
};
