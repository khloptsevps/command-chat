import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useAuth from '../../utils/hooks/useAuth.jsx';

const MyNavbar = () => {
  const { t } = useTranslation();
  const { loggedIn, logOut } = useAuth();
  return (
    <Navbar className="shadow-sm" bg="white" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {t('navbar.title')}
        </Navbar.Brand>
        {loggedIn && (
          <Button onClick={() => logOut()}>{t('navbar.button')}</Button>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
