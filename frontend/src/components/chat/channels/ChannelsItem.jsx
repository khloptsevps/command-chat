import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ButtonItem from './ButtonItem.jsx';
import DropdownButtonItem from './DropdownButtonItem.jsx';

const ChannelsItem = ({ id, removable, ...props }) => {
  const currentChannelId = useSelector((state) => state.channels.currentChannelId);
  const variant = currentChannelId === id ? 'info' : 'light';
  const { name } = props;
  return (
    <Nav.Item key={id} as="li" className="w-100">
      {!removable ? (
        <ButtonItem id={id} variant={variant} name={name} />
      ) : (
        <DropdownButtonItem id={id} variant={variant}>
          <ButtonItem id={id} variant={variant} name={name} />
        </DropdownButtonItem>
      )}
    </Nav.Item>
  );
};

export default ChannelsItem;
