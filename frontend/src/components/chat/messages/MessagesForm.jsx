/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';

const MessagesForm = () => {
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  }, []);
  const initialValues = { body: '' };
  const validationSchema = Yup.object({
    body: Yup.string().required('enterMessage'),
  });
  const onSubmit = (v, actions) => {
    console.log(v);
    actions.resetForm();
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <div className="mt-auto px-5 py-3">
      <Form noValidate className="py-1 border rounded-2" onSubmit={formik.handleSubmit}>
        <div className="input-group has-validation">
          <Form.Control
            ref={input}
            className="border-0 p-0 ps-2 form-control"
            name="body"
            aria-label="Новое сообщение"
            placeholder="Ведите сообщение..."
            {...formik.getFieldProps('body')}
          />
          <Button type="submit" size="sm" className="m-1" disabled={!(formik.dirty && formik.isValid)}>
            <span>Отпрвить</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MessagesForm;
