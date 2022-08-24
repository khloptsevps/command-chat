/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cn from 'classnames';

const MyInput = ({ label, mb, ...props }) => {
  // console.log(props);
  const [field, meta] = useField(props);
  const fromGroupClasses = cn('form-floating', mb);
  // console.log(meta);
  const inputClasses = cn('form-control');
  return (
    <Form.Group className={fromGroupClasses}>
      <Form.Control {...field} {...props} />
      <Form.Label htmlFor={props.id}>{label}</Form.Label>
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
