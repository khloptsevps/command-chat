import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import filter from 'leo-profanity';
import { switchChannel } from '../../../slices/channelsSlice.js';

const ButtonItem = ({ id, name, ...props }) => {
  const dispatch = useDispatch();
  const handleSwitchChannel = () => {
    dispatch(switchChannel({ id }));
  };
  return (
    <Button
      {...props}
      className="w-100 rounded-0 text-start text-truncate"
      onClick={handleSwitchChannel}
    >
      <span className="me-1">#</span>
      {filter.clean(name)}
    </Button>
  );
};

export default ButtonItem;
