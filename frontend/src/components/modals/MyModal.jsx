import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import myPropTypes from '../../utils/propTypes';
import renderModalContent from './renderModalContent';

const MyModal = ({ modal }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal({ isOpened: false, type: 'null' }));
  };
  return (
    <Modal show={modal.isOpened} onHide={handleClose} size="lg" centered>
      {renderModalContent(modal.type, handleClose)}
    </Modal>
  );
};

MyModal.propTypes = {
  modal: myPropTypes.object.isRequired,
};

export default MyModal;
