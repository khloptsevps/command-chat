import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation, Navigate } from 'react-router-dom';
import loginImage from '../__assets__/images/signIn.svg';
import CardContainer from '../components/cardContainer/CardContainer.jsx';
import SignInForm from '../components/forms/SignInForm.jsx';
import MyImage from '../components/image/MyImage.jsx';
import useAuth from '../utils/hooks/useAuth.jsx';

const LoginPage = () => {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    <CardContainer>
      <Card.Body className="row p-5 pb-0">
        <MyImage imagePath={loginImage} text="Войти" />
        <SignInForm />
      </Card.Body>
      <Card.Footer className="p-4">
        <div className="text-center">
          <span>Нет аккаунта? </span>
          <Link to="../signup">Регистрация</Link>
        </div>
      </Card.Footer>
    </CardContainer>
  );
};

export default LoginPage;
