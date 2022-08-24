/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import { useField } from 'formik';

const MyInput = ({ label, ...props }) => {
  const field = useField(props);
  return (
    <Container>
      <label htmlFor={props.id || props.name}>{label}</label>
    </Container>
  );
};

export default MyInput;
