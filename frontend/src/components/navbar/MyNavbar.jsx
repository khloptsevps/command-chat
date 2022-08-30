import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth.jsx';

const MyNavbar = () => {
  const { loggedIn, logOut } = useAuth();
  return (
    <Navbar className="shadow-sm" bg="white" variant="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
      {loggedIn && <Button onClick={() => logOut()}>Выйти</Button>}
    </Container>
  </Navbar>
  );
};

export default MyNavbar;
