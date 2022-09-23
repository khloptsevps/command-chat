import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import myPropTypes from '../../../utils/propTypes.js';
import { switchChannel } from '../../../slices/channelsSlice.js';

// TODO 2
// Реализуйте выпадающее меню с кнопками управления каналом;

const ChannelsItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId
  );
  const variant = currentChannelId === id ? 'info' : 'light';

  const handleSwitchChannel = () => {
    dispatch(switchChannel({ id }));
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
  id: myPropTypes.number.isRequired,
  name: myPropTypes.string.isRequired,
};

export default ChannelsItem;
