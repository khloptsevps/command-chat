import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './signUp/SignUpForm.jsx';
import initSchema from './signUp/signUpFormValidation.js';
import routes from '../../utils/routes.js';
import storage from '../../utils/storage.js';
import useAuth from '../../utils/hooks/useAuth.jsx';

const SignUp = () => {
  const [isUserExist, setIsUserExist] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const schema = initSchema();
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = async ({ username, password }) => {
    try {
      setIsUserExist(false);
      setIsDisabled(true);
      const resp = await axios.post(routes.signUpPath(), {
        username,
        password,
      });
      storage.setItem(resp.data);
      logIn();
      navigate('/');
    } catch (error) {
      const { data } = error.response;
      if (data.statusCode === 409) {
        setIsUserExist(true);
      }
      setIsDisabled(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <SignUpForm isUserExist={isUserExist} disabled={isDisabled} />
    </Formik>
  );
};

export default SignUp;
