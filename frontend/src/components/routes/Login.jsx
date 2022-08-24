/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Col,
  Container,
  Row,
  Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../images/signin.svg';
import SignInForm from '../forms/SignInForm.jsx';
import MyImage from '../image/MyImage.jsx';

const Login = () => {
  return (
    <Container bsPrefix="container-fluid h-100">
      <Row bsPrefix="row justify-content-center align-content-center h-100">
        <Col bsPrefix="col-12 col-md-8 col-xxl-6">
          <Card bsPrefix="card shadow-sm">
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
