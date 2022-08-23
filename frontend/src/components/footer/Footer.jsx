/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container bsPrefix="footer" className="border-top bg-white shadow-sm text-center">
      <Container className="p-2 m-2">
        <a
          href="https://storyset.com/web"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
        >
          Web illustrations by Storyset
        </a>
      </Container>
    </Container>
  );
};

export default Footer;
