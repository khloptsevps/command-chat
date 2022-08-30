import React, { forwardRef } from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const MyTextInput = forwardRef(({
  label,
  children,
  ...props
}, ref) => {
  const [field] = useField(props);
  return (
    <FormGroup className="form-floating mb-3">
      <FormControl ref={ref} {...field} {...props} required />
      <FormLabel>{label}</FormLabel>
      {children}
    </FormGroup>
  );
});

MyTextInput.displayName = 'MyTextInput';

MyTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default MyTextInput;
