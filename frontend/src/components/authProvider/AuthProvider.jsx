import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../contexts/index.jsx';
import storage from '../../helpers/storage.js';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(storage.hasToken('user'));
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default AuthProvider;
