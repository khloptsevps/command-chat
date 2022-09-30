import React, { useEffect, useRef } from 'react';
import SignUpField from './SignUpField.jsx';

const SignUpFields = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <>
      <SignUpField
        ref={ref}
        label="Имя пользователя"
        name="username"
        id="username"
        type="text"
        placeholder="От 3 до 20 символов"
        required
      />
      <SignUpField
        label="Пароль"
        name="password"
        id="password"
        type="password"
        placeholder="Не менее 6 символов"
        autoComplete="new-password"
        required
      />
      <SignUpField
        label="Подтвердите пароль"
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Пароли должны совпадать"
        autoComplete="new-password"
        required
      />
    </>
  );
};

export default SignUpFields;
