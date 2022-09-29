import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useModal from '../../utils/hooks/useModal.jsx';
import socket from '../../utils/socket.js';

const RemoveChannel = () => {
  const [disabled, setDisabled] = useState(false);
  const { extra } = useSelector((state) => state.modal);
  const { t } = useTranslation();
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
    <>
      <p>{t('pages.chat.modals.removeChannel.message')}</p>
      <div className="d-flex justify-content-end">
        <Button onClick={handleClose} variant="secondary" className="me-2">
          {t('pages.chat.modals.buttons.chancel')}
        </Button>
        <Button onClick={buttonHandler} variant="danger" disabled={disabled}>
          {t('pages.chat.modals.buttons.remove')}
        </Button>
      </div>
    </>
  );
};

export default RemoveChannel;
