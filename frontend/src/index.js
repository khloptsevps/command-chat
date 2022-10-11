import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { io } from 'socket.io-client';
import initApp from './initApp.jsx';

const app = async () => {
  const socket = io();
  const root = ReactDOM.createRoot(document.getElementById('chat'));
  const myApp = await initApp(socket);
  root.render(<React.StrictMode>{myApp}</React.StrictMode>);
};

app();
