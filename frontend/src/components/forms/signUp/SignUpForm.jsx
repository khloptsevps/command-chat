import React from 'react';
import { Form } from 'formik';
import { useTranslation } from 'react-i18next';
import SignUpFields from './SignUpFields.jsx';
import MyButton from '../MyButton.jsx';

const SignUpForm = () => {
  const { t } = useTranslation();
  return (
    <Form className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">{t('pages.signUp.form.title')}</h1>
      <SignUpFields />
      <MyButton className="w-100 mb-3 mt-3">
        {t('pages.signUp.form.button')}
      </MyButton>
    </Form>
  );
};

export default SignUpForm;
