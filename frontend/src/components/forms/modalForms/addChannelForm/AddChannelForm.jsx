import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import ModalForm from '../ModalForm.jsx';

const initSchema = (t) =>
  Yup.object({
    name: Yup.string()
      .required(t('pages.chat.modals.addChannel.errors.required'))
      .min(3, t('pages.chat.modals.addChannel.errors.min'))
      .max(20, t('pages.chat.modals.addChannel.errors.max')),
  });

const AddChannelForm = () => {
  const { t } = useTranslation();
  const initValues = {
    name: '',
  };
  // todo сделать обработчик формы
  const handleAddChannel = (v) => {
    console.log(v);
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={initSchema(t)}
      onSubmit={handleAddChannel}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => <ModalForm errors={errors} isValid={isValid} />}
    </Formik>
  );
};

export default AddChannelForm;
