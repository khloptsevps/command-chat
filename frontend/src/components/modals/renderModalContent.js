import React from 'react';
import AddChannel from './AddChannel.jsx';
import RemoveChannel from './RemoveChannel.jsx';
import RenameChannel from './RenameChannel.jsx';

const renderModalContent = (type) => {
  switch (type) {
    case 'addChannel':
      return <AddChannel />;
    case 'removeChannel':
      return <RemoveChannel />;
    case 'renameChannel':
      return <RenameChannel />;
    default:
      return null;
  }
};

export default renderModalContent;
