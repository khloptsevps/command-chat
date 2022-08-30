/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import storage from '../../utils/storage.js';

const ChatPage = () => {
  const { username, token } = storage.getItemData();
  return (
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
};

export default ChatPage;
