import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { switchChannel } from '../../slices/channelsSlice.js';
import ModalForm from './forms/ModalForm.jsx';
import myToasts from '../../utils/toasts.js';
import useSocket from '../../utils/hooks/useSocket.jsx';

const AddChannel = ({ handleClose }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const socketApi = useSocket();
  const { t } = useTranslation();
  const text = t('toasts.channelAdded');
  const dispatch = useDispatch();
  const initValues = {
    name: '',
  };
  const handleSubmit = async (value) => {
    try {
      setIsDisabled(true);
      const response = await socketApi.addNewChannel(value);
      dispatch(switchChannel({ id: response.id }));
      handleClose();
      myToasts({ type: 'success', text });
    } catch {
      setIsDisabled(false);
    }
  };
  return <ModalForm initValues={initValues} handleSubmit={handleSubmit} disabled={isDisabled} />;
};

export default AddChannel;
