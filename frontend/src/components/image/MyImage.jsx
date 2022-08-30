import React from 'react';
import { Container, Image } from 'react-bootstrap';
import myPropTypes from '../../utils/propTypes.js';

const MyImage = ({ imagePath, text }) => (
  <Container bsPrefix="col-12 col-md-6 d-flex align-items-center justify-content-center">
    <Image roundedCircle src={imagePath} alt={text} />
  </Container>
);

MyImage.defaultProps = {
  imagePath: '#',
};

MyImage.propTypes = {
  imagePath: myPropTypes.imagePath,
  text: myPropTypes.text.isRequired,
};

export default MyImage;
