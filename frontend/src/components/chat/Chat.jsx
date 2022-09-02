/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import ChannelsList from './channels/ChannelsList.jsx';

// eslint-disable-next-line arrow-body-style
const Chat = () => {
  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <ChannelsList />
        <Col className="col p-0 h-100" />
      </Row>
    </Container>
  );
};

export default Chat;
