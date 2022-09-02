import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import myPropTypes from '../../../utils/propTypes.js';
import { switchChannel } from '../../../slices/channelsSlice.js';

const ChannelsItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const variant = currentChannelId === id ? 'info' : 'light';

  const handleSwitchChannel = () => {
    dispatch(switchChannel({ newCurrentId: id }));
  };

  return (
    <Nav.Item key={id} as="li" className="w-100">
      <Button
        variant={variant}
        className="w-100 rounded-0 text-start"
        onClick={handleSwitchChannel}
      >
        <span className="me-1">#</span>
        {name}
      </Button>
    </Nav.Item>
  );
};

ChannelsItem.propTypes = {
  id: myPropTypes.id.isRequired,
  name: myPropTypes.name.isRequired,
  // removable: myPropTypes.removable.isRequired,
};

export default ChannelsItem;
