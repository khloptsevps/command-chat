import React from 'react';
import { Container } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';

const Loader = () => (
  <Container className="h-100 d-flex justify-content-center align-items-center">
    <ScaleLoader color="#007bff" />
  </Container>
);

export default Loader;
