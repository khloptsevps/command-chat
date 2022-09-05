import React from 'react';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.jsx';
import ChatPage from '../../pages/ChatPage.jsx';
import LoginPage from '../../pages/LoginPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage.jsx';
import myPropTypes from '../../utils/propTypes.js';

const MyRoutes = ({ children }) => (
  <BrowserRouter>
    {children}
    <Outlet />
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

MyRoutes.defaultProps = {
  children: null,
};

MyRoutes.propTypes = {
  children: myPropTypes.children,
};

export default MyRoutes;
