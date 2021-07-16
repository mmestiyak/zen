import React from 'react';
import { Col, Row } from 'reactstrap';
import CountUp from './CountUp';

const SuccessStats = () => {
  return (
    <Row className="success__stats d-flex justify-content-center ">
      <Col md="3">
        <CountUp end={1200} />
      </Col>
      <Col md="3">
        <CountUp end={1200} />
      </Col>
      <Col md="3">
        <CountUp end={1200} />
      </Col>
      <Col md="3">
        <CountUp end={1200} />
      </Col>
    </Row>
  );
};

export default SuccessStats;
