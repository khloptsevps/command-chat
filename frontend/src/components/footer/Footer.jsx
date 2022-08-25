import React from 'react';
import { Container, Col } from 'react-bootstrap';

const Footer = () => (
  <Container bsPrefix="footer" className="border-top bg-white shadow-sm row">
    <Container className="row p-2">
      <Col className="text-center">
        <a
          href="https://storyset.com/web"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary"
        >
          Web illustrations by Storyset
        </a>
      </Col>
    </Container>
  </Container>
);

export default Footer;
