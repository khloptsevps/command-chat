/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MyNavbar from './components/navbar/MyNavbar';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';

// Настройте роутинг для двух путей: / и /login.
// <Login />

const App = () => (
  <div className="d-flex flex-column h-100">
    <MyNavbar />
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
