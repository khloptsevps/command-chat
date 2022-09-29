import React from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import initSchema from './modalFormValidation.js';
import useModal from '../../../utils/hooks/useModal.jsx';
import { channelsSelectors } from '../../../slices/channelsSlice';
import ModalForm from './ModalForm.jsx';
import socket from '../../../utils/socket.js';

const RenameChannelForm = () => {
  const { handleClose } = useModal();
  const { extra } = useSelector((state) => state.modal);
  const currentChannel = useSelector(channelsSelectors.selectAll).find(
    ({ id }) => id === extra.currId
  );
  const initValues = {
    name: currentChannel.name,
  };
  const handleForm = (v) => {
    const data = { ...v, id: extra.currId };
    socket.volatile.emit('renameChannel', data);
    handleClose();
  };
  return (
    <Formik
      initialValues={initValues}
      validationSchema={initSchema()}
      onSubmit={handleForm}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, isValid }) => <ModalForm errors={errors} isValid={isValid} />}
    </Formik>
  );
};

export default RenameChannelForm;
