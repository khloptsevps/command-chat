import React, { forwardRef } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useField } from 'formik';

const SignUpField = forwardRef(
  ({ label, isUserExist, children, ...props }, ref) => {
    const [field, meta] = useField(props);
    const { name } = field;
    return (
      <FloatingLabel controlId={name} label={label} className="mb-3">
        <Form.Control
          required={true}
          ref={ref}
          {...field}
          {...props}
          isInvalid={(meta.touched && meta.error) || isUserExist}
        />
        {meta.error && (
          <Form.Control.Feedback type="invalid" tooltip>
            {meta.error}
          </Form.Control.Feedback>
        )}
        {children}
      </FloatingLabel>
    );
  }
);

SignUpField.displayName = 'SignUpField';

export default SignUpField;
