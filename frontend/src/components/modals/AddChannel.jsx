/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import myPropTypes from '../../utils/propTypes';

const AddChannel = ({ handleClose }) => {
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

AddChannel.propTypes = {
  handleClose: myPropTypes.func.isRequired,
};

export default AddChannel;
