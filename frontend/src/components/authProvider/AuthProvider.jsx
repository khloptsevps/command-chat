import React, { useState } from 'react';
import myPropTypes from '../../utils/propTypes.js';
import AuthContext from '../../contexts/index.jsx';
import storage from '../../utils/storage.js';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(storage.hasToken());
  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: myPropTypes.children,
};

export default AuthProvider;
