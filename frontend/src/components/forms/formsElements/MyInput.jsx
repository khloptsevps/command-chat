import React, { forwardRef } from 'react';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useField } from 'formik';
import myPropTypes from '../../../utils/propTypes.js';

const MyTextInput = forwardRef(({ label, children, ...props }, ref) => {
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

MyTextInput.defaultProps = {
  children: null,
};

MyTextInput.propTypes = {
  label: myPropTypes.string.isRequired,
  children: myPropTypes.children,
};

export default MyTextInput;
