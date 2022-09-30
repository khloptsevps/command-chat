import React, { useEffect, useRef } from 'react';
import { Form } from 'formik';
import { useTranslation } from 'react-i18next';
import SignUpField from './SignUpField.jsx';
import MyButton from '../MyButton.jsx';

const SignUpForm = () => {
  const { t } = useTranslation();
  const ref = useRef();
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <Form className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">{t('pages.signUp.form.title')}</h1>
      <SignUpField
        ref={ref}
        label="Имя пользователя"
        name="username"
        type="text"
        placeholder="От 3 до 20 символов"
      />
      <SignUpField
        label="Пароль"
        name="password"
        type="password"
        placeholder="Не менее 6 символов"
        autoComplete="new-password"
      />
      <SignUpField
        label="Подтвердите пароль"
        name="confirmPassword"
        type="password"
        placeholder="Пароли должны совпадать"
        autoComplete="new-password"
      />
      <MyButton className="w-100 mb-3 mt-3">
        {t('pages.signUp.form.button')}
      </MyButton>
    </Form>
  );
};

export default SignUpForm;
