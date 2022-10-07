import React from 'react';
import { Formik } from 'formik';
import initSchema from './modalFormValidation';
import MyForm from './MyForm.jsx';

const ModalForm = ({ initValues, handleSubmit, disabled }) => {
  const schema = initSchema();
  return (
    <Formik
      initialValues={initValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => (
        <MyForm errors={errors} isValid={isValid} disabled={disabled} />
      )}
    </Formik>
  );
};

export default ModalForm;
