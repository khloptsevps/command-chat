import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useModal from '../../utils/hooks/useModal.jsx';
import myPropTypes from '../../utils/propTypes';
import renderModalContent from './renderModalContent';

const MyModal = ({ modal }) => {
  const { handleClose, type } = useModal();
  const { t } = useTranslation();
  return (
    <Modal show={modal.isOpened} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{t(`pages.chat.modals.${type}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalContent(type)}</Modal.Body>
    </Modal>
  );
};

MyModal.propTypes = {
  modal: myPropTypes.object.isRequired,
};

export default MyModal;
