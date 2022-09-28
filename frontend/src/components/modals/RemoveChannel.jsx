import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const RemoveChannel = () => {
  const { t } = useTranslation();
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('pages.chat.modals.removeChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('pages.chat.modals.removeChannel.message')}</p>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            {t('pages.chat.modals.buttons.chancel')}
          </Button>
          <Button variant="danger">
            {t('pages.chat.modals.buttons.remove')}
          </Button>
        </div>
      </Modal.Body>
    </>
  );
};

export default RemoveChannel;
