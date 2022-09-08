import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../../slices/messagesSlice.js';
import useAuth from '../../../utils/hooks/useAuth.jsx';
import socket from '../../../utils/socket.js';

const onSubmit = (username, channelId) => (v) => {
  const message = {
    ...v,
    channelId,
    username,
  };
  socket.emit('newMessage', message);
  // todo: сделать подтверждение доставки сообщений с сервера
};

const validationSchema = Yup.object({
  body: Yup.string().required('enterMessage'),
});

const MessagesForm = () => {
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const input = useRef();
  const { username } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    input.current.focus();
  }, [channelId]);

  useEffect(() => {
    const listener = (payload) => {
      dispatch(addMessage(payload));
    };

    socket.on('newMessage', listener);

    return () => {
      socket.off('newMessage', listener);
    };
  }, [socket]);

  const formik = useFormik({
    initialValues: { body: '' },
    validationSchema,
    onSubmit: onSubmit(username, channelId),
  });

  return (
    <div className="mt-auto px-5 py-3">
      <Form
        noValidate
        className="py-1 border rounded-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="input-group has-validation">
          <Form.Control
            ref={input}
            className="border-0 p-0 ps-2 form-control"
            name="body"
            aria-label="Новое сообщение"
            placeholder="Ведите сообщение..."
            {...formik.getFieldProps('body')}
          />
          <Button
            type="submit"
            size="sm"
            className="m-1"
            disabled={!(formik.dirty && formik.isValid)}
          >
            <span>Отправить</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MessagesForm;
