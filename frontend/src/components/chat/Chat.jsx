import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Chat = () => (
  <Container
    className="h-100 my-4 overflow-hidden rounded shadow"
  >
    <Row
      className="h-100 bg-white flex-md-row"
    >
      <Col className="col-4 col-md-2 border-end pt-5 px-0 bg-light" />
      <Col className="col p-0 h-100" />
    </Row>
  </Container>
);

export default Chat;
