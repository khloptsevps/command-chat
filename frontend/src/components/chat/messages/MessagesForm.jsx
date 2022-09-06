import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useAuth from '../../../utils/hooks/useAuth.jsx';

const onSubmit = (username, channelId) => (v, actions) => {
  const message = {
    ...v,
    channelId,
    username,
  };
  console.log(message);
  actions.resetForm();
};

const MessagesForm = () => {
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const input = useRef();
  const { username } = useAuth();
  useEffect(() => {
    input.current.focus();
  }, [channelId]);
  const initialValues = { body: '' };
  const validationSchema = Yup.object({
    body: Yup.string().required('enterMessage'),
  });
  const formik = useFormik({
    initialValues,
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
