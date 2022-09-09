import React from 'react';
import { Container, Button } from 'react-bootstrap';
import myPropTypes from '../../../utils/propTypes';
import AddChannelSvg from '../../svg/AddChannelSvg.jsx';

const ChannelsHeader = ({ title }) => (
  <Container className="d-flex justify-content-between mb-2 ps-4 pe-2 align-items-end border-bottom border-dark">
    <span className="m-0">{title}</span>
    <Button className="p-0 btn-group-vertical border-0">
      <AddChannelSvg />
      <span className="visually-hidden">+</span>
    </Button>
  </Container>
);

ChannelsHeader.defaultProps = {
  title: 'Ваше название',
};

ChannelsHeader.propTypes = {
  title: myPropTypes.string,
};

export default ChannelsHeader;
