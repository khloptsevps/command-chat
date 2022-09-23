import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import myPropTypes from '../../../../utils/propTypes';

const InputMessage = ({ ...props }) => {
  const { t } = useTranslation();
  const input = useRef(null);
  useEffect(() => {
    if (!props.disabled) {
      input.current?.focus();
    }
  }, [props.disabled]);
  const [field] = useField(props);
  return (
    <Form.Control
      className="border-0 p-0 ps-2"
      aria-label={t('pages.chat.messages.form.input.ariaLabel')}
      placeholder={t('pages.chat.messages.form.input.placeholder')}
      ref={input}
      {...field}
      {...props}
    />
  );
};

InputMessage.propTypes = {
  disabled: myPropTypes.boolean.isRequired,
};

export default InputMessage;
