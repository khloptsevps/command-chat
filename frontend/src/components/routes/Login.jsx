import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../images/signin.svg';
import CardContainer from '../cardContainer/CardContainer.jsx';
import SignInForm from '../forms/SignInForm.jsx';
import MyImage from '../image/MyImage.jsx';

const Login = () => (
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

export default Login;
