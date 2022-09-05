import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../utils/hooks/useAuth.jsx';
import myPropTypes from '../../utils/propTypes.js';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  return auth.loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

PrivateRoute.propTypes = {
  children: myPropTypes.children.isRequired,
};

export default PrivateRoute;
