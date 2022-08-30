import React from 'react';
import {
  BrowserRouter,
  Navigate,
  useLocation,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthProvider from './components/authProvider/AuthProvider.jsx';
import useAuth from './hooks/useAuth.jsx';
import MyNavbar from './components/navbar/MyNavbar.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import ChatPage from './components/pages/ChatPage.jsx';
import NotFoundPage from './components/pages/NotFoundPage.jsx';
import Footer from './components/footer/Footer.jsx';

const ChatRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const App = () => (
  <AuthProvider>
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <MyNavbar />
        <Outlet />
        <Routes>
          <Route
            path="/"
            element={(
              <ChatRoute>
                <ChatPage />
              </ChatRoute>
            )}
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  </AuthProvider>
);

ChatRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default App;
