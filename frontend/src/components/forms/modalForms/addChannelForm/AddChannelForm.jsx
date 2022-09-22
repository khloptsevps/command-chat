/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import myPropTypes from '../../../../utils/propTypes.js';
import ModalForm from '../ModalForm.jsx';

const validationSchema = Yup.object({
  name: Yup.string().required('Обязательное поле'),
});

const AddChannelForm = ({ closeModal }) => {
  const initValues = {
    name: '',
  };
  const handleAddChannel = () => {};
  return (
    <Formik initialValues={initValues} onSubmit={handleAddChannel}>
      <ModalForm type="addChannel" closeModal={closeModal} />
    </Formik>
  );
};

AddChannelForm.propTypes = {
  closeModal: myPropTypes.func.isRequired,
};

export default AddChannelForm;
