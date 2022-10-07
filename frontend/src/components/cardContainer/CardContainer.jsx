import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const CardContainer = ({ children }) => (
  <div className="container-fluid h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col className="col-12 col-md-8 col-xxl-6">
        <Card className="shadow-sm">{children}</Card>
      </Col>
    </Row>
  </div>
);

export default CardContainer;
