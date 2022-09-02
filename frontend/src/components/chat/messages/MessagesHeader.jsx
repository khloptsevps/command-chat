import React from 'react';
import myPropTypes from '../../../utils/propTypes';

const MessagesHeader = ({ title, length }) => (
  <div className="bg-light mb-4 p-3 shadow-sm small">
    <p className="m-0">
      <b>{`# ${title}`}</b>
    </p>
    <span className="text-muted">{`Всего сообщений: ${length}`}</span>
  </div>
);

export default MessagesHeader;

MessagesHeader.propTypes = {
  title: myPropTypes.title.isRequired,
  length: myPropTypes.length.isRequired,
};
