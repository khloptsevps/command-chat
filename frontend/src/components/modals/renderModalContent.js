import React from 'react';
import AddChannel from './AddChannel.jsx';

const renderModalContent = (type, handleClose) => {
  switch (type) {
    case 'addChannel':
      return <AddChannel handleClose={handleClose} />;
    default:
      return null;
  }
};

export default renderModalContent;
