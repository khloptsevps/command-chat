import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modalSlice.js';
import renderModalContent from './renderModalContent.js';

const MyModal = ({ modal }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const { t } = useTranslation();
  return (
    <Modal show={modal.isOpened} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{t(`pages.chat.modals.${modal.type}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalContent(modal.type, handleClose)}</Modal.Body>
    </Modal>
  );
};

export default MyModal;
