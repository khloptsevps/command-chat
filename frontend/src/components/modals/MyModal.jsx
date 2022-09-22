import React from 'react';
import { Modal } from 'react-bootstrap';
import useModal from '../../utils/hooks/useModal.jsx';
import myPropTypes from '../../utils/propTypes';
import renderModalContent from './renderModalContent';

const MyModal = ({ modal }) => {
  const { handleClose } = useModal();

  return (
    <Modal show={modal.isOpened} onHide={handleClose} size="lg" centered>
      {renderModalContent(modal.type)}
    </Modal>
  );
};

MyModal.propTypes = {
  modal: myPropTypes.object.isRequired,
};

export default MyModal;
