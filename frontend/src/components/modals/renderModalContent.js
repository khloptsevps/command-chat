import React from 'react';
import AddChannel from './AddChannel.jsx';

const renderModalContent = (type) => {
  switch (type) {
    case 'addChannel':
      return <AddChannel />;
    default:
      return null;
  }
};

export default renderModalContent;
