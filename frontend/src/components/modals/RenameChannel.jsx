import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { channelsSelectors } from '../../slices/channelsSlice.js';
import useModal from '../../utils/hooks/useModal.jsx';
import socket from '../../utils/socket.js';
import ModalForm from './forms/ModalForm.jsx';
import myToasts from '../../utils/toasts.js';

const RenameChannel = () => {
  const { t } = useTranslation();
  const text = t('toasts.channelRenamed');
  const [disabled, setDisabled] = useState(false);
  const { handleClose } = useModal();
  const { extra } = useSelector((state) => state.modal);
  const currentChannel = useSelector(channelsSelectors.selectAll).find(
    ({ id }) => id === extra.currId
  );
  const initValues = {
    name: currentChannel.name,
  };
  const handleSubmit = (v) => {
    setDisabled(true);
    const data = { ...v, id: extra.currId };
    socket.volatile.emit('renameChannel', data, ({ status }) => {
      if (status === 'ok') {
        handleClose();
        myToasts({ type: 'success', text });
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

export default RenameChannel;
