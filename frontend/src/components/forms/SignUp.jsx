import React from 'react';
import { Formik } from 'formik';
import SignUpForm from './signUp/SignUpForm.jsx';
import initSchema from './signUp/signUpFormValidation.js';

// TODO Create Form

const SignUp = () => {
  const schema = initSchema();
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = () => {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <SignUpForm />
    </Formik>
  );
};

export default SignUp;
