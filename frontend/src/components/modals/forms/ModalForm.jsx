import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import MyForm from './MyForm.jsx';
import useModal from '../../../utils/hooks/useModal.jsx';

const ModalForm = ({ initValues, handleSubmit, disabled }) => {
  const { channelsNames } = useModal();
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .required(t('pages.chat.modals.addChannel.errors.required'))
          .min(3, t('pages.chat.modals.addChannel.errors.min'))
          .max(20, t('pages.chat.modals.addChannel.errors.max'))
          .notOneOf(channelsNames, t('pages.chat.modals.addChannel.errors.notOneOf')),
      })}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => <MyForm errors={errors} isValid={isValid} disabled={disabled} />}
    </Formik>
  );
};

export default ModalForm;
