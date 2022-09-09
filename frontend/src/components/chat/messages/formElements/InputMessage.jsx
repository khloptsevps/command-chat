import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const InputMessage = ({ ...props }) => {
  const input = useRef(null);
  useEffect(() => {
    input.current?.focus();
  });
  const [field] = useField(props);
  return (
    <Form.Control
      className="border-0 p-0 ps-2"
      aria-label="Новое сообщение"
      placeholder="Ведите сообщение..."
      ref={input}
      {...field}
      {...props}
    />
  );
};

export default InputMessage;
