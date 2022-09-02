/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const Chat = () => (
  <Container
    className="h-100 my-4 overflow-hidden rounded shadow"
  >
    <Row
      className="h-100 bg-white flex-md-row"
    >
      <Col className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
        <Container className="d-flex justify-content-between mb-2 ps-4 pe-2">
          <span>Каналы</span>
          <Button variant="outline-primary" size="sm">
            <span>+</span>
          </Button>
        </Container>
      </Col>
      <Col className="col p-0 h-100" />
    </Row>
  </Container>
);

export default Chat;
