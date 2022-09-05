import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './slices/store.js';

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(<Provider store={store}><App /></Provider>);
