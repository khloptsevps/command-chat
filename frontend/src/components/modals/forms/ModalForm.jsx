import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import MyForm from './MyForm.jsx';
import { channelsSelectors } from '../../../slices/channelsSlice.js';

const ModalForm = ({ initValues, handleSubmit, disabled }) => {
  const channelsNames = useSelector(channelsSelectors.selectAll).map((c) => c.name);
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
