import { Formik, Form } from 'formik';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { addMessage } from '../../../slices/messagesSlice.js';
import useAuth from '../../../utils/hooks/useAuth.jsx';
import socket from '../../../utils/socket.js';
import SendButton from './formElements/SendButton.jsx';
import InputMessage from './formElements/InputMessage.jsx';

const MessagesForm = () => {
  const { t } = useTranslation();
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const { username } = useAuth();
  const dispatch = useDispatch();
  const [inputDisabled, setInputDisabled] = useState(false);
  const element = useRef(null);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    const listener = (payload) => {
      dispatch(addMessage(payload));
      setInputDisabled(false);
      element.current?.reset();
    };
    socket.on('newMessage', listener);

    return () => {
      socket.off('newMessage', listener);
    };
  }, [socket]);

  useEffect(() => {
    const id = !networkError
      ? null
      : toast.loading(t('pages.chat.messages.form.errors.network'));
    socket.io.on('error', () => {
      setNetworkError(true);
    });
    socket.io.on('reconnect', () => {
      setNetworkError(false);
      setInputDisabled(false);
      toast.update(id, {
        render: t('pages.chat.messages.form.errors.reconnect'),
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    });
  }, [networkError]);

  const onSubmit = (v) => {
    const message = {
      ...v,
      channelId,
      username,
    };
    setInputDisabled(true);
    socket.volatile.emit('newMessage', message);
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
