import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import SignUpForm from './signUp/SignUpForm.jsx';
import routes from '../../utils/routes.js';
import storage from '../../utils/storage.js';
import useAuth from '../../utils/hooks/useAuth.jsx';

const SignUp = () => {
  const { t } = useTranslation();
  const [isUserExist, setIsUserExist] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
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
      navigate(routes.chatPagePath(), { state: { from: location } });
    } catch (error) {
      setIsDisabled(false);
      const { data } = error.response;
      if (data.statusCode === 409) {
        setIsUserExist(true);
      }
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        username: Yup.string()
          .required(t('pages.signUp.form.errors.requared'))
          .min(3, t('pages.signUp.form.errors.minMax'))
          .max(20, t('pages.signUp.form.errors.minMax')),
        password: Yup.string()
          .required(t('pages.signUp.form.errors.requared'))
          .min(6, t('pages.signUp.form.errors.min')),
        confirmPassword: Yup.string()
          .required(t('pages.signUp.form.errors.requared'))
          .oneOf([Yup.ref('password'), null], t('pages.signUp.form.errors.passwordsDoesMutch')),
      })}
    >
      <SignUpForm isUserExist={isUserExist} disabled={isDisabled} />
    </Formik>
  );
};

export default SignUp;
