import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import myPropTypes from '../../utils/propTypes.js';

const CardContainer = ({ children }) => (
  <div className="container-fluid h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col className="col-12 col-md-8 col-xxl-6">
        <Card className="shadow-sm">{children}</Card>
      </Col>
    </Row>
  </div>
);

CardContainer.defaultProps = {
  children: null,
};

CardContainer.propTypes = {
  children: myPropTypes.children,
};

export default CardContainer;
