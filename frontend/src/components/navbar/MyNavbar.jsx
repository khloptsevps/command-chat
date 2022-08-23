import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar className="shadow-sm" bg="white" variant="light" expand="lg">
    <Container>
      <Link className="navbar-brand" to="/">Hexlet Chat</Link>
    </Container>
  </Navbar>
);

export default MyNavbar;
