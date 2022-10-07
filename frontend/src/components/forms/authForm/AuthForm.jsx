import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import routes from '../../../utils/routes.js';
import useAuth from '../../../utils/hooks/useAuth.jsx';
import MyButton from '../MyButton.jsx';
import MyTextInput from '../MyTextInput.jsx';
import storage from '../../../utils/storage.js';
import myToasts from '../../../utils/toasts.js';

const AuthForm = () => {
  const [authFailed, setAuthFailed] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const initValues = {
    username: '',
    password: '',
  };
  const authHandler = async (values, { setSubmitting }) => {
    try {
      setAuthFailed(false);
      const response = await axios.post(routes.signInPath(), values);
      storage.setItem(response.data);
      auth.logIn();
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setSubmitting(false);
      if (error.response.status === 401) {
        setAuthFailed(true);
      }
      if (!error.response.status) {
        myToasts({
          type: 'netWorkError',
          text: t('pages.login.form.networkError'),
        });
      }
    }
  };
  return (
    <Formik initialValues={initValues} onSubmit={authHandler}>
      <Form className="col-12 col-md-6 mt-3 mt-mb-0">
        <h1 className="text-center mb-4">{t('pages.login.form.title')}</h1>
        <MyTextInput
          divGroupClasses="form-floating mb-3"
          label={t('pages.login.form.inputLabel')}
          name="username"
          type="text"
          autoComplete="username"
          isInvalid={authFailed}
        />
        <MyTextInput
          divGroupClasses="form-floating mb-3"
          label={t('pages.login.form.passwordLabel')}
          name="password"
          type="password"
          autoComplete="current-password"
          isInvalid={authFailed}
        >
          {authFailed ? (
            <div className="invalid-tooltip">{t('pages.login.form.error')}</div>
          ) : null}
        </MyTextInput>
        <MyButton className="w-100 mb-3 mt-5">
          {t('pages.login.form.button')}
        </MyButton>
      </Form>
    </Formik>
  );
};

export default AuthForm;
