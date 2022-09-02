import React from 'react';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import myPropTypes from '../../utils/propTypes.js';

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

CardContainer.defaultProps = {
  children: null,
};

CardContainer.propTypes = {
  children: myPropTypes.children,
};

export default CardContainer;
