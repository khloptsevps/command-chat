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
import routes from '../../utils/routes.js';

const MyRoutes = ({ children }) => (
  <BrowserRouter>
    {children}
    <Outlet />
    <Routes>
      <Route
        path={routes.chatPagePath()}
        element={(
          <PrivateRoute>
            <ChatPage />
          </PrivateRoute>
        )}
      />
      <Route path={routes.loginPagePath()} element={<LoginPage />} />
      <Route path={routes.signupPagePath()} element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
