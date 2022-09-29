import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import RenameChannelForm from '../forms/modalForms/RenameChannelForm.jsx';

const RenameChannel = () => {
  const { t } = useTranslation();
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('pages.chat.modals.renameChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RenameChannelForm />
      </Modal.Body>
    </>
  );
};

export default RenameChannel;
