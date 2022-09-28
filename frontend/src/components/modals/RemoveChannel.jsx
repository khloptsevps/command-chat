import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useModal from '../../utils/hooks/useModal.jsx';
import socket from '../../utils/socket.js';

const RemoveChannel = () => {
  const { extra } = useSelector((state) => state.modal);
  const { t } = useTranslation();
  const { handleClose } = useModal();
  const buttonHandler = () => {
    socket.volatile.emit('removeChannel', { id: extra.currId });
    handleClose();
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('pages.chat.modals.removeChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('pages.chat.modals.removeChannel.message')}</p>
        <div className="d-flex justify-content-end">
          <Button onClick={handleClose} variant="secondary" className="me-2">
            {t('pages.chat.modals.buttons.chancel')}
          </Button>
          <Button onClick={buttonHandler} variant="danger">
            {t('pages.chat.modals.buttons.remove')}
          </Button>
        </div>
      </Modal.Body>
    </>
  );
};

export default RemoveChannel;
