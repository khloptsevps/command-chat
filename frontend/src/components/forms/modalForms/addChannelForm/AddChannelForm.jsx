import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalForm from '../ModalForm.jsx';
import useModal from '../../../../utils/hooks/useModal.jsx';
import socket from '../../../../utils/socket.js';
import {
  channelsSelectors,
  switchChannel,
} from '../../../../slices/channelsSlice.js';
import toasts from '../../../../utils/toasts.js';

/* TODO 1
 **  Реализуйте добавление нового канала.
 **  Имена каналов не должны повторяться.
 **  Создатель канала должен быть перемещён в добавленный канал;
 */

const initSchema = (t, channelsNames) =>
  Yup.object({
    name: Yup.string()
      .required(t('pages.chat.modals.addChannel.errors.required'))
      .min(3, t('pages.chat.modals.addChannel.errors.min'))
      .max(20, t('pages.chat.modals.addChannel.errors.max'))
      .notOneOf(
        channelsNames,
        t('pages.chat.modals.addChannel.errors.notOneOf')
      ),
  });

const AddChannelForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channelsNames = useSelector(channelsSelectors.selectAll).map(
    (channel) => channel.name
  );
  const { handleClose } = useModal();
  const initValues = {
    name: '',
  };
  const handleForm = (value, { resetForm }) => {
    resetForm();
    socket.volatile.emit('newChannel', value, ({ data }) => {
      const newChannelId = { id: data.id };
      dispatch(switchChannel(newChannelId));
      handleClose();
      toasts.channelAdd();
    });
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={initSchema(t, channelsNames)}
      onSubmit={handleForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => <ModalForm errors={errors} isValid={isValid} />}
    </Formik>
  );
};

export default AddChannelForm;
