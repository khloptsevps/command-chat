import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import Login from './components/routes/Login.jsx';
import NotFound from './components/routes/NotFound.jsx';
import MyNavbar from './components/navbar/MyNavbar.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => (
  <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <MyNavbar />
      <Outlet />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
