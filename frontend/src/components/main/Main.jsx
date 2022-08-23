/* eslint-disable arrow-body-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import MyNavbar from '../navbar/MyNavbar';

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
