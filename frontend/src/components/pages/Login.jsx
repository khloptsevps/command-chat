import React from 'react';
import {
  Col,
  Container,
  Row,
  Card,
} from 'react-bootstrap';
import signin from '../../images/signin.svg';
import SignInForm from '../UI/signInForm/SignInForm';

const Login = () => (
  <Container fluid className="h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col className="col-12 col-md-8 col-xxl-6">
        <Card className="shadow-sm">
          <Card.Body className="row p-5">
            <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <img src={signin} className="rounded-circle" alt="Войти" />
            </Col>
            <SignInForm />
          </Card.Body>
          <Card.Footer className="p-4">
            <div className="text-center">
              <span>Нет аккауна? </span>
              <a href="/signup">Зарегистрируйтесь!</a>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Login;
