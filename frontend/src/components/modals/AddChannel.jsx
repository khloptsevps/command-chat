/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AddChannel = () => {
  const { t } = useTranslation();
  return (
    <>
      <Modal.Header closeButton>
        {t('pages.chat.modals.addChannel.title')}
      </Modal.Header>
      <Modal.Body>Форма добавлия канала!</Modal.Body>
    </>
  );
};

export default AddChannel;
