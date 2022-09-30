import React, { useEffect, useRef } from 'react';
import { Form as FormikForm } from 'formik';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SignUpField from './SignUpField.jsx';
import MyButton from '../MyButton.jsx';
import myPropTypes from '../../../utils/propTypes.js';

const SignUpForm = ({ isUserExist, ...props }) => {
  const { t } = useTranslation();
  const ref = useRef();
  useEffect(() => {
    ref.current?.select();
  }, [isUserExist]);
  return (
    <FormikForm className="col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">{t('pages.signUp.form.title')}</h1>
      <SignUpField
        ref={ref}
        label="Имя пользователя"
        name="username"
        type="text"
        placeholder="От 3 до 20 символов"
        isUserExist={isUserExist}
        {...props}
      />
      <SignUpField
        label="Пароль"
        name="password"
        type="password"
        placeholder="Не менее 6 символов"
        autoComplete="new-password"
        isUserExist={isUserExist}
        {...props}
      />
      <SignUpField
        label="Подтвердите пароль"
        name="confirmPassword"
        type="password"
        placeholder="Пароли должны совпадать"
        autoComplete="new-password"
        isUserExist={isUserExist}
        {...props}
      >
        {isUserExist && (
          <Form.Control.Feedback type="invalid" tooltip>
            {t('pages.signUp.form.errors.userExist')}
          </Form.Control.Feedback>
        )}
      </SignUpField>
      <MyButton className="w-100 mb-3 mt-4" {...props}>
        {t('pages.signUp.form.button')}
      </MyButton>
    </FormikForm>
  );
};

SignUpForm.propTypes = {
  isUserExist: myPropTypes.boolean,
};

export default SignUpForm;
