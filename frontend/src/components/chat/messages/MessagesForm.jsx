import { Formik, Form } from 'formik';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../../utils/hooks/useAuth.jsx';
import socket from '../../../utils/socket.js';
import SendButton from './formElements/SendButton.jsx';
import InputMessage from './formElements/InputMessage.jsx';

const MessagesForm = () => {
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const { username } = useAuth();
  const [inputDisabled, setInputDisabled] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    element.current?.reset();
  }, [inputDisabled]);

  const onSubmit = (v) => {
    const message = {
      ...v,
      channelId,
      username,
    };
    setInputDisabled(true);
    socket.volatile.emit('newMessage', message, ({ status }) => {
      if (status === 'ok') {
        setInputDisabled(false);
      }
    });
  };

  return (
    <Formik initialValues={{ body: '' }} onSubmit={onSubmit}>
      <div className="mt-auto px-5 py-3">
        <Form ref={element} noValidate className="py-1 border rounded-2">
          <div className="input-group has-validation">
            <InputMessage name="body" disabled={inputDisabled} />
            <SendButton />
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default MessagesForm;
