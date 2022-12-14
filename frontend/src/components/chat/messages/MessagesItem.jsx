import React, { useEffect, useRef } from 'react';
import filter from 'leo-profanity';

const MessagesItem = ({ username, body }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);
  return (
    <div ref={ref} className="text-break mb-2">
      <b>{username}</b>
      {`: ${filter.clean(body)}`}
    </div>
  );
};

MessagesItem.displayName = 'MessagesItem';

export default MessagesItem;
