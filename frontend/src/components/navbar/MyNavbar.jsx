import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

// <Link to="/login">{login}</Link>

const MyNavbar = () => (
  <Navbar className="shadow-sm" bg="white" variant="white">
    <Container>
      <Navbar.Brand href="/">Slack chat</Navbar.Brand>
    </Container>
  </Navbar>
);

export default MyNavbar;
