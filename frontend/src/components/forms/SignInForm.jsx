/* eslint-disable no-console */
import React, { useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyButton from './formsElements/MyButton.jsx';
import MyTextInput from './formsElements/MyInput.jsx';

const formSubmit = (v, { resetForm }) => {
  console.log(v);
  resetForm();
};

const SignInForm = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const schema = Yup.object({
    username: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
  });
  const initFormValues = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initFormValues}
      validationSchema={schema}
      onSubmit={formSubmit}
    >
      <Form className="col-12 col-md-6 mt-3 mt-mb-0">
        <h1 className="text-center mb-4">Войти</h1>
        <MyTextInput
          ref={ref}
          autoComplete="username"
          label="Ваш ник"
          id="username"
          name="username"
          type="text"
          placeholder="Ваш ник"
        />
        <MyTextInput
          autoComplete="password"
          label="Пароль"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <MyButton>Войти</MyButton>
      </Form>
    </Formik>
  );
};

export default SignInForm;
