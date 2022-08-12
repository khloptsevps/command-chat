/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          name="username"
          placeholder="Ваш ник"
          autoComplete="username"
          required=""
          id="username"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Form.Label htmlFor="username">Ваш ник</Form.Label>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="w-100 mb-3 btn btn-primary"
      >
        Войти
      </Button>
    </Form>
  );
};

export default SignInForm;
