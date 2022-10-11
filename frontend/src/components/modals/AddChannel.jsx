import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { switchChannel } from '../../slices/channelsSlice.js';
import ModalForm from './forms/ModalForm.jsx';
import socket from '../../utils/socket.js';
import myToasts from '../../utils/toasts.js';

const AddChannel = ({ handleClose }) => {
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  const text = t('toasts.channelAdded');
  const dispatch = useDispatch();
  const initValues = {
    name: '',
  };
  const handleSubmit = (value) => {
    setDisabled(true);
    socket.volatile.emit('newChannel', value, ({ data, status }) => {
      if (status === 'ok') {
        dispatch(switchChannel({ id: data.id }));
        handleClose();
        myToasts({ type: 'success', text });
      }
    });
  };
  return <ModalForm initValues={initValues} handleSubmit={handleSubmit} disabled={disabled} />;
};

export default AddChannel;
