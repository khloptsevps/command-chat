import React from 'react';
import { Formik } from 'formik';

// TODO Create Form

const SignUp = () => {
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = () => {};
  return <Formik initialValues={initialValues} onSubmit={onSubmit} />;
};

export default SignUp;
