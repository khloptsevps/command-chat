import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cn from 'classnames';

const MyInput = ({ label, mb, ...props }) => {
  const [field, meta] = useField(props);
  const fromGroupClasses = cn('form-floating', mb);
  const isTouchedAndRequired = meta.touched && meta.error === 'Required';
  const inputClasses = cn('form-control', { 'is-invalid': isTouchedAndRequired });
  return (
    <Form.Group className={fromGroupClasses}>
      <Form.Control className={inputClasses} {...field} {...props} />
      <Form.Label htmlFor={props.id}>{label}</Form.Label>
      {
      isTouchedAndRequired
        ? (
          <div
            placement="left"
            className="invalid-tooltip"
          >
            Обязательное поле
          </div>
        )
        : null
      }
    </Form.Group>
  );
};

MyInput.defaultProps = {
  mb: 'mb-3',
};

MyInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mb: PropTypes.string,
};

export default MyInput;
