/* eslint-disable arrow-body-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer.jsx';
import MyNavbar from '../navbar/MyNavbar.jsx';

const Main = () => {
  return (
    <div className="d-flex flex-column h-100">
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
