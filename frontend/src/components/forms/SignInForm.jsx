/* eslint-disable no-console */
import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import MyInput from '../input/MyInput.jsx';

const SignInForm = () => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validationSchema={Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    })}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <Form className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">Войти</h1>
      <MyInput
        name="username"
        id="username"
        label="Ваш ник"
        type="text"
        placeholder="Ваш ник"
      />

      <MyInput
        name="password"
        id="password"
        autoComplete="current-password"
        label="Пароль"
        type="password"
        placeholder="Пароль"
        mb="mb-4"
      />
      <Button className="w-100 mb-3" variant="primary" type="submit">Войти</Button>
    </Form>
  </Formik>
);

export default SignInForm;
