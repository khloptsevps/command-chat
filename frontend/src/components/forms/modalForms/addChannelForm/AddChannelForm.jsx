import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import ModalForm from '../ModalForm.jsx';
import useModal from '../../../../utils/hooks/useModal.jsx';
import socket from '../../../../utils/socket.js';

const initSchema = (t) =>
  Yup.object({
    name: Yup.string()
      .required(t('pages.chat.modals.addChannel.errors.required'))
      .min(3, t('pages.chat.modals.addChannel.errors.min'))
      .max(20, t('pages.chat.modals.addChannel.errors.max')),
  });

const AddChannelForm = () => {
  const { t } = useTranslation();
  const { handleClose } = useModal();
  const initValues = {
    name: '',
  };

  const handleForm = (value, { resetForm }) => {
    resetForm();
    handleClose();
    // todo прежде чем добавить канал, проверить на уникальность имени
    socket.volatile.emit('newChannel', value);
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={initSchema(t)}
      onSubmit={handleForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => <ModalForm errors={errors} isValid={isValid} />}
    </Formik>
  );
};

export default AddChannelForm;
