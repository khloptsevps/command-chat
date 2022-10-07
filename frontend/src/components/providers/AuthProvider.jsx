import React, { useState, useMemo } from 'react';
import AuthContext from '../../utils/contexts/index.jsx';
import storage from '../../utils/storage.js';

const getAuthHeader = () => {
  const userToken = storage.getItemData().token;
  return {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
};

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(storage.hasToken());

  const logIn = () => {
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const contextValue = useMemo(
    () => ({
      loggedIn,
      getAuthHeader,
      logIn,
      logOut,
      username: storage.getItemData().username,
    }),
    [loggedIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
