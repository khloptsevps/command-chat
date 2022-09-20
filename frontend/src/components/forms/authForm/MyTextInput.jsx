import React, { useRef, useEffect } from 'react';
import { useField } from 'formik';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import myPropTypes from '../../../utils/propTypes.js';

const MyTextInput = ({ label, children, ...props }) => {
  const [field] = useField(props);
  const id = props.name;
  const input = useRef(null);
  useEffect(() => {
    if (props.type === 'text') {
      input.current?.select();
    }
  }, []);
  return (
    <FormGroup className="form-floating mb-3">
      <FormControl
        ref={input}
        id={id}
        {...field}
        {...props}
        placeholder={label}
      />
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      {children}
    </FormGroup>
  );
};

MyTextInput.propTypes = {
  label: myPropTypes.string.isRequired,
  name: myPropTypes.string.isRequired,
  type: myPropTypes.string.isRequired,
  children: myPropTypes.children,
};

export default MyTextInput;
