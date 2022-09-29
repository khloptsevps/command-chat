import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import ModalForm from './ModalForm.jsx';
import useModal from '../../../utils/hooks/useModal.jsx';
import socket from '../../../utils/socket.js';
import { switchChannel } from '../../../slices/channelsSlice.js';
import initSchema from './modalFormValidation.js';
import toasts from '../../../utils/toasts.js';

const AddChannelForm = () => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { handleClose } = useModal();
  const initValues = {
    name: '',
  };
  const handleForm = (value) => {
    setDisabled(true);
    socket.volatile.emit('newChannel', value, ({ data, status }) => {
      if (status === 'ok') {
        const newChannelId = { id: data.id };
        dispatch(switchChannel(newChannelId));
        handleClose();
        toasts.channelAdd();
      }
    });
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={initSchema()}
      onSubmit={handleForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => (
        <ModalForm errors={errors} isValid={isValid} disabled={disabled} />
      )}
    </Formik>
  );
};

export default AddChannelForm;
