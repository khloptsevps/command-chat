import React from 'react';
import { Container, Button } from 'react-bootstrap';
import myPropTypes from '../../../utils/propTypes';

const ChannelsHeader = ({ title }) => (
  <Container className="d-flex justify-content-between mb-2 ps-4 pe-2 align-items-end border-bottom border-dark">
    <span className="h4 m-0">{title}</span>
    <Button variant="outline-primary" size="sm" className="mb-1 pt-0 pb-0">
      <span className="m-0">+</span>
    </Button>
  </Container>
);

ChannelsHeader.defaultProps = {
  title: 'Ваше название',
};

ChannelsHeader.propTypes = {
  title: myPropTypes.title,
};

export default ChannelsHeader;
