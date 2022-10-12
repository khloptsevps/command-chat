import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import RemoveForm from './forms/RemoveForm.jsx';
import myToasts from '../../utils/toasts.js';
import useSocket from '../../utils/hooks/useSocket.jsx';

const RemoveChannel = ({ handleClose }) => {
  const socketApi = useSocket();
  const { t } = useTranslation();
  const text = t('toasts.channelRemoved');
  const [isDisabled, setIsDisabled] = useState(false);
  const { extra } = useSelector((state) => state.modal);
  const buttonHandler = async () => {
    try {
      setIsDisabled(true);
      const id = extra.currId;
      await socketApi.removeChannel({ id });
      handleClose();
      myToasts({ type: 'success', text });
    } catch {
      setIsDisabled(false);
    }
  };
  return <RemoveForm onClick={buttonHandler} variant="danger" disabled={isDisabled} />;
};

export default RemoveChannel;
