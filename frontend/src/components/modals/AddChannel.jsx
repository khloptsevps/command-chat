import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import myPropTypes from '../../utils/propTypes';
import AddChannelForm from '../forms/modalForms/addChannelForm/AddChannelForm.jsx';

const AddChannel = ({ handleClose }) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('pages.chat.modals.addChannel.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddChannelForm closeModal={handleClose} />
      </Modal.Body>
    </>
  );
};

AddChannel.propTypes = {
  handleClose: myPropTypes.func.isRequired,
};

export default AddChannel;
