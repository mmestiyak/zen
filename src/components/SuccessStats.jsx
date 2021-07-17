import React from 'react';
import { Col, Row } from 'reactstrap';
import { getStats } from '../data/data';
import CountUp from './CountUp';

const SuccessStats = () => {
  return (
    <Row className="success__stats d-flex justify-content-center ">
      {getStats().map(({ id, count, icon, text }) => (
        <Col
          className="d-flex px-4 py-5 flex-column align-items-center justify-content-center"
          key={id}
          md="3"
        >
          <img src={icon} alt="" />
          <CountUp end={count} className="my-3" />
          <h3>{text}</h3>
        </Col>
      ))}
    </Row>
  );
};

export default SuccessStats;
