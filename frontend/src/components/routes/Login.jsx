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

const Login = () => {
  return (
    <Container bsPrefix="container-fluid h-100">
      <Row bsPrefix="row justify-content-center align-content-center h-100">
        <Col bsPrefix="col-12 col-md-8 col-xxl-6">
          <Card bsPrefix="card shadow-sm">
            <Card.Body bsPrefix="card-body row p-5">
              <Container bsPrefix="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={loginImage} className="rounded-circle" alt="Войти" />
              </Container>
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
