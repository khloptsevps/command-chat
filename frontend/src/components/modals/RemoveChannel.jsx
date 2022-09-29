import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useModal from '../../utils/hooks/useModal.jsx';
import socket from '../../utils/socket.js';
import RemoveForm from './forms/RemoveForm.jsx';

const RemoveChannel = () => {
  const [disabled, setDisabled] = useState(false);
  const { extra } = useSelector((state) => state.modal);
  const { handleClose } = useModal();
  const buttonHandler = () => {
    setDisabled(true);
    const id = extra.currId;
    socket.volatile.emit('removeChannel', { id }, ({ status }) => {
      if (status === 'ok') {
        handleClose();
      }
    });
  };
  return (
    <RemoveForm onClick={buttonHandler} variant="danger" disabled={disabled} />
  );
};

export default RemoveChannel;
