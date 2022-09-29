import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { switchChannel } from '../../../slices/channelsSlice.js';
import myPropTypes from '../../../utils/propTypes.js';

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
      {name}
    </Button>
  );
};

ButtonItem.propTypes = {
  id: myPropTypes.number.isRequired,
  name: myPropTypes.string.isRequired,
};

export default ButtonItem;
