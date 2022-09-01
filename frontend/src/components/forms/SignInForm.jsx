import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyButton from './formsElements/MyButton.jsx';
import MyTextInput from './formsElements/MyInput.jsx';
import signInFormHandler from '../../utils/handlers.js';
import useAuth from '../../hooks/useAuth.jsx';

const SignInForm = () => {
  const [authFailed, setAuthFiled] = useState(false);
  const auth = useAuth();
  const ref = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    ref.current.select();
  }, [authFailed]);

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
      onSubmit={signInFormHandler(setAuthFiled, auth, navigate)}
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
          isInvalid={authFailed}
        />
        <MyTextInput
          autoComplete="password"
          label="Пароль"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          isInvalid={authFailed}
        >
          {authFailed ? <div className="invalid-tooltip">Неверные имя пользователя или пароль</div> : null}
        </MyTextInput>
        <MyButton>Войти</MyButton>
      </Form>
    </Formik>
  );
};

export default SignInForm;
