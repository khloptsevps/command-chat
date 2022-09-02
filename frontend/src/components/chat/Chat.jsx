/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container, Row,
} from 'react-bootstrap';
import ChannelsList from './channels/ChannelsList.jsx';
import MessagesList from './messages/MessagesList.jsx';

const Chat = () => (
  <Container className="h-100 my-4 overflow-hidden rounded shadow">
    <Row className="h-100 bg-white flex-md-row">
      <ChannelsList />
      <MessagesList />
    </Row>
  </Container>
);

export default Chat;
