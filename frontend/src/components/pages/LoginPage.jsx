import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation, Navigate } from 'react-router-dom';
import loginImage from '../../images/signin.svg';
import CardContainer from '../cardContainer/CardContainer.jsx';
import SignInForm from '../forms/SignInForm.jsx';
import MyImage from '../image/MyImage.jsx';
import useAuth from '../../hooks/useAuth.jsx';

const LoginPage = () => {
  const { loggedIn } = useAuth();
  const location = useLocation();
  if (loggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    <CardContainer>
      <Card.Body bsPrefix="card-body row p-5">
        <MyImage imagePath={loginImage} text="Войти" />
        <SignInForm />
      </Card.Body>
      <Card.Footer bsPrefix="card-footer p-4">
        <div className="text-center">
          <span>Нет аккаунта? </span>
          <Link to="../signup">Регистрация</Link>
        </div>
      </Card.Footer>
    </CardContainer>
  );
};

export default LoginPage;
