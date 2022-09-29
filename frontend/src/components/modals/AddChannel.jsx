import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../../utils/hooks/useModal.jsx';
import { switchChannel } from '../../slices/channelsSlice.js';
import ModalForm from './forms/ModalForm.jsx';
import socket from '../../utils/socket.js';
import myToasts from '../../utils/toasts.js';

const AddChannel = () => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { handleClose } = useModal();
  const initValues = {
    name: '',
  };
  const handleSubmit = (value) => {
    setDisabled(true);
    socket.volatile.emit('newChannel', value, ({ data, status }) => {
      if (status === 'ok') {
        const newChannelId = { id: data.id };
        dispatch(switchChannel(newChannelId));
        handleClose();
        myToasts({ type: 'success', text: 'Канал добавлен' });
      }
    });
  };
  return (
    <ModalForm
      initValues={initValues}
      handleSubmit={handleSubmit}
      disabled={disabled}
    />
  );
};

export default AddChannel;
