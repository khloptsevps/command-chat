/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line arrow-body-style
const MessagesForm = () => {
  const initFormValues = { body: '' };
  return (
    <div className="mt-auto px-5 py-3">
      <Formik
        initialValues={initFormValues}
        onSubmit={(v) => console.log(v)}
      >
        <Form noValidate className="py-1 border rounded-2">
          <div className="input-group has-validation">
            <Field
              className="border-0 p-0 ps-2 form-control"
              name="body"
              aria-label="Новое сообщение"
              placeholder="Ведите сообщение..."
            />
            <Button type="submit" size="sm" disabled>
              Отправить сообщение
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MessagesForm;
