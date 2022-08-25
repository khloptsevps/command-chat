import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardContainer = ({ children }) => (
  <Container bsPrefix="container-fluid h-100">
    <Row bsPrefix="row justify-content-center align-content-center h-100">
      <Col bsPrefix="col-12 col-md-8 col-xxl-6">
        <Card bsPrefix="card shadow-sm">
          {children}
        </Card>
      </Col>
    </Row>
  </Container>
);

CardContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default CardContainer;
