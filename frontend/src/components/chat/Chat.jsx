/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ChannelsList from './channels/ChannelsList.jsx';
import MessagesList from './messages/MessagesList.jsx';
import MessagesForm from './messages/MessagesForm.jsx';
import { closeModal } from '../../slices/modalsSlice.js';
import MyModal from '../modals/MyModal.jsx';

const Chat = () => {
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(closeModal({ isOpened: false, type: null }));
  };
  const modal = useSelector((state) => state.modal);
  console.log(modal);
  return (
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
      <MyModal modal={modal} handleClose={hideModal} />
    </Container>
  );
};

export default Chat;
