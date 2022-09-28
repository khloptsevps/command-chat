import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChannelsList from './channels/ChannelsList.jsx';
import MessagesList from './messages/MessagesList.jsx';
import MessagesForm from './messages/MessagesForm.jsx';
import MyModal from '../modals/MyModal.jsx';
import ModalProvider from '../providers/ModalProvider.jsx';
import socket from '../../utils/socket.js';
import { addChannel, removeChannel } from '../../slices/channelsSlice.js';
import { addMessage } from '../../slices/messagesSlice.js';

const setSubscribes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const channelsListener = (payload) => {
      dispatch(addChannel(payload));
    };
    const messagesListener = (payload) => {
      dispatch(addMessage(payload));
    };
    const removeChannelListener = (payload) => {
      dispatch(removeChannel(payload.id));
    };
    socket.on('newMessage', messagesListener);
    socket.on('newChannel', channelsListener);
    socket.on('removeChannel', removeChannelListener);
    return () => {
      socket.off('newMessage', messagesListener);
      socket.off('newChannel', channelsListener);
      socket.off('removeChannel', removeChannelListener);
    };
  }, [socket]);
};

const Chat = () => {
  const modal = useSelector((state) => state.modal);
  setSubscribes();
  return (
    <ModalProvider>
      <Container className="h-100 my-4 overflow-hidden rounded shadow">
        <Row className="h-100 bg-white flex-md-row">
          <ChannelsList />
          <div className="col p-0 h-100">
            <div className="d-flex flex-column h-100 p-0">
              <MessagesList />
              <MessagesForm />
            </div>
          </div>
        </Row>
        <MyModal modal={modal} />
      </Container>
    </ModalProvider>
  );
};

export default Chat;
