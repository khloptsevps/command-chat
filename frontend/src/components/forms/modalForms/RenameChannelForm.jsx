import React, { useState } from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import initSchema from './modalFormValidation.js';
import useModal from '../../../utils/hooks/useModal.jsx';
import { channelsSelectors } from '../../../slices/channelsSlice';
import ModalForm from './ModalForm.jsx';
import socket from '../../../utils/socket.js';

const RenameChannelForm = () => {
  const [disabled, setDisabled] = useState(false);
  const { handleClose } = useModal();
  const { extra } = useSelector((state) => state.modal);
  const currentChannel = useSelector(channelsSelectors.selectAll).find(
    ({ id }) => id === extra.currId
  );
  const initValues = {
    name: currentChannel.name,
  };
  const handleForm = (v) => {
    setDisabled(true);
    const data = { ...v, id: extra.currId };
    socket.volatile.emit('renameChannel', data, ({ status }) => {
      if (status === 'ok') {
        handleClose();
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

export default RenameChannelForm;
