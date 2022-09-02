import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { channelsSelectors } from '../../../slices/channelsSlice.js';
import ChannelsHeader from './ChannelsHeader.jsx';
import ChannelsItem from './ChannelsItem.jsx';

const ChannelsList = () => {
  const channels = useSelector(channelsSelectors.selectAll);
  return (
    <Col className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <ChannelsHeader title="Каналы" />
      <Nav as="ul" fill variant="pills" className="px-2">
        {channels.map(({ id, name, removable }) => (
          <ChannelsItem key={id} id={id} name={name} removable={removable} />
        ))}
      </Nav>
    </Col>
  );
};

export default ChannelsList;
