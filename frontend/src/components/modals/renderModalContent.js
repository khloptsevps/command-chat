import React from 'react';
import AddChannel from './AddChannel.jsx';
import RemoveChannel from './RemoveChannel.jsx';
import RenameChannel from './RenameChannel.jsx';

const renderModalContent = (type, handleClose) => {
  switch (type) {
    case 'addChannel':
      return <AddChannel handleClose={handleClose} />;
    case 'removeChannel':
      return <RemoveChannel handleClose={handleClose} />;
    case 'renameChannel':
      return <RenameChannel handleClose={handleClose} />;
    default:
      return null;
  }
};

export default renderModalContent;
