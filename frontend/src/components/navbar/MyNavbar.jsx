import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar className="shadow-sm" bg="white" variant="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
    </Container>
  </Navbar>
);

export default MyNavbar;
