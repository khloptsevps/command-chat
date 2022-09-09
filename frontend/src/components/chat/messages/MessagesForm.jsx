import { Formik, Form } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../../slices/messagesSlice.js';
import useAuth from '../../../utils/hooks/useAuth.jsx';
import socket from '../../../utils/socket.js';
import SendButton from './formElements/SendButton.jsx';
import InputMessage from './formElements/InputMessage.jsx';

const MessagesForm = () => {
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const { username } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = (payload) => {
      dispatch(addMessage(payload));
    };

    socket.on('newMessage', listener);

    return () => {
      socket.off('newMessage', listener);
    };
  }, [socket]);

  const onSubmit = (v, actions) => {
    const message = {
      ...v,
      channelId,
      username,
    };
    socket.emit('newMessage', message);
    // todo: сделать подтверждение доставки сообщений с сервера
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ body: '' }} onSubmit={onSubmit}>
      <div className="mt-auto px-5 py-3">
        <Form noValidate className="py-1 border rounded-2">
          <div className="input-group has-validation">
            <InputMessage name="body" />
            <SendButton />
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default MessagesForm;
