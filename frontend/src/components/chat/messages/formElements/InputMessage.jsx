/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const InputMessage = ({ ...props }) => {
  const { body, disabled } = props;
  const { t } = useTranslation();
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const input = useRef(null);
  useEffect(() => {
    if (!props.disabled) {
      input.current?.focus();
    }
  }, [props.disabled]);
  useEffect(() => {
    input.current?.focus();
  }, [currentChannelId]);
  const [field] = useField(props);
  return (
    <Form.Control
      className="border-0 p-0 ps-2"
      aria-label={t('pages.chat.messages.form.input.ariaLabel')}
      placeholder={t('pages.chat.messages.form.input.placeholder')}
      ref={input}
      body={body}
      disabled={disabled}
      {...field}
    />
  );
};

export default InputMessage;
