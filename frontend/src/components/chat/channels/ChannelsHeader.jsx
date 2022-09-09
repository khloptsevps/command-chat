import React from 'react';
import { Container, Button } from 'react-bootstrap';
import myPropTypes from '../../../utils/propTypes';

const ChannelsHeader = ({ title }) => (
  <Container className="d-flex justify-content-between mb-2 ps-4 pe-2 align-items-end border-bottom border-dark">
    <span className="m-0">{title}</span>
    <Button className="p-0 btn-group-vertical border-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 489.8 489.8"
        width="25"
        height="25"
        fill="currentColor"
      >
        <path d="M438.2,0H51.6C23.1,0,0,23.2,0,51.6v386.6c0,28.5,23.2,51.6,51.6,51.6h386.6c28.5,0,51.6-23.2,51.6-51.6V51.6    C489.8,23.2,466.6,0,438.2,0z M465.3,438.2c0,14.9-12.2,27.1-27.1,27.1H51.6c-14.9,0-27.1-12.2-27.1-27.1V51.6    c0-14.9,12.2-27.1,27.1-27.1h386.6c14.9,0,27.1,12.2,27.1,27.1V438.2z" />
        <path d="M337.4,232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v80.3h-80.3c-6.8,0-12.3,5.5-12.3,12.2    c0,6.8,5.5,12.3,12.3,12.3h80.3v80.3c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-80.3h80.3c6.8,0,12.3-5.5,12.3-12.3    C349.7,238.1,344.2,232.7,337.4,232.7z" />
      </svg>
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
