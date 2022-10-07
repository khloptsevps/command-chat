/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { useField } from 'formik';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const MyTextInput = ({
  label,
  hideLabel,
  divGroupClasses,
  children,
  ...props
}) => {
  const [field] = useField(props);
  const id = props.name;
  const input = useRef(null);
  useEffect(() => {
    if (props.type === 'text') {
      input.current?.select();
    }
  }, []);
  return (
    <FormGroup className={divGroupClasses}>
      <FormControl
        ref={input}
        id={id}
        {...field}
        {...props}
        placeholder={label}
      />
      <FormLabel visuallyHidden={hideLabel} htmlFor={props.name}>
        {label}
      </FormLabel>
      {children}
    </FormGroup>
  );
};

export default MyTextInput;
