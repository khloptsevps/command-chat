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
  body: myPropTypes.string.isRequired,
  username: myPropTypes.string.isRequired,
};

export default MessagesItem;
