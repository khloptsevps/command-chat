import React from 'react';
import myPropTypes from '../../../utils/propTypes';

const MessagesItem = ({ body, username }) => (
  <div className="text-break mb-2">
    <b>{username}</b>
    {`: ${body}`}
  </div>
);

MessagesItem.propTypes = {
  body: myPropTypes.body.isRequired,
  username: myPropTypes.username.isRequired,
};

export default MessagesItem;
