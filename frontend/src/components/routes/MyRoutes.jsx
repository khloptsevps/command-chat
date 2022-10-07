import React from 'react';
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.jsx';
import ChatPage from '../../pages/ChatPage.jsx';
import LoginPage from '../../pages/LoginPage.jsx';
import SignUpPage from '../../pages/SignUpPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage.jsx';

const MyRoutes = ({ children }) => (
  <BrowserRouter>
    {children}
    <Outlet />
    <Routes>
      <Route
        path="/"
        element={(
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        )}
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
