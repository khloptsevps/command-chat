import React from 'react';
import AddChannel from './AddChannel.jsx';
import RemoveChannel from './RemoveChannel.jsx';

const renderModalContent = (type) => {
  switch (type) {
    case 'addChannel':
      return <AddChannel />;
    case 'removeChannel':
      return <RemoveChannel />;
    default:
      return null;
  }
};

export default renderModalContent;
