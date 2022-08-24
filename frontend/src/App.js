/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Main from './components/routes/Main.jsx';
import Login from './components/routes/Login.jsx';
import NotFound from './components/routes/NotFound.jsx';

// Настройте роутинг для двух путей: / и /login.

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="signup" element={<SignUp />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
