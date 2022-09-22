/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'react-bootstrap';
import renderModalContent from './renderModalContent';

const MyModal = ({ modal, handleClose }) => {
  return (
    <Modal show={modal.isOpened} onHide={handleClose} size="lg" centered>
      {renderModalContent(modal.type, handleClose)}
    </Modal>
  );
};

export default MyModal;
