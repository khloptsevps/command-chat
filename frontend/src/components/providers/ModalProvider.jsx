import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modalSlice.js';
import { ModalContext } from '../../utils/contexts/index.jsx';
import myPropTypes from '../../utils/propTypes.js';

const ModalProvider = ({ children }) => {
  const [type, setType] = useState(null);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal({ isOpened: false, type: null }));
  };
  const contextValue = { type, handleClose, setType };
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: myPropTypes.children.isRequired,
};

export default ModalProvider;
