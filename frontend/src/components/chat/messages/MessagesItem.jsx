import React, { useEffect, useRef } from 'react';
import myPropTypes from '../../../utils/propTypes';

const MessagesItem = ({ username, body }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);
  return (
    <div ref={ref} className="text-break mb-2">
      <b>{username}</b>
      {`: ${body}`}
    </div>
  );
};

MessagesItem.displayName = 'MessagesItem';

MessagesItem.propTypes = {
  body: myPropTypes.body.isRequired,
  username: myPropTypes.username.isRequired,
};

export default MessagesItem;
