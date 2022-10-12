import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { channelsSelectors } from '../../slices/channelsSlice.js';
import ModalForm from './forms/ModalForm.jsx';
import myToasts from '../../utils/toasts.js';
import useSocket from '../../utils/hooks/useSocket.jsx';

const RenameChannel = ({ handleClose }) => {
  const { t } = useTranslation();
  const socketApi = useSocket();
  const text = t('toasts.channelRenamed');
  const [isDisabled, setIsDisabled] = useState(false);
  const { extra } = useSelector((state) => state.modal);
  const currentChannel = useSelector(channelsSelectors.selectAll).find(
    ({ id }) => id === extra.currId,
  );
  const initValues = {
    name: currentChannel.name,
  };
  const handleSubmit = async (v) => {
    const data = { ...v, id: extra.currId };
    try {
      setIsDisabled(true);
      await socketApi.renameChannel(data);
      handleClose();
      myToasts({ type: 'success', text });
    } catch {
      setIsDisabled(false);
    }
  };
  return <ModalForm initValues={initValues} handleSubmit={handleSubmit} disabled={isDisabled} />;
};

export default RenameChannel;
