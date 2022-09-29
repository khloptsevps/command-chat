import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AddChannelForm from '../forms/modalForms/AddChannelForm.jsx';

const AddChannel = () => {
  const { t } = useTranslation();
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('pages.chat.modals.addChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddChannelForm />
      </Modal.Body>
    </>
  );
};

export default AddChannel;
