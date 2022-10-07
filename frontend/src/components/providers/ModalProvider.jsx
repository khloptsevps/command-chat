/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../slices/modalSlice.js';
import { ModalContext } from '../../utils/contexts/index.jsx';
import { channelsSelectors } from '../../slices/channelsSlice.js';

const ModalProvider = ({ children }) => {
  const [type, setType] = useState(null);
  const channelsNames = useSelector(channelsSelectors.selectAll).map(
    ({ name }) => name,
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal({ isOpened: false, type: null }));
  };
  const contextValue = {
    type,
    handleClose,
    setType,
    channelsNames,
  };
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
