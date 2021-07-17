import React from 'react';
import { Col, Card, CardTitle, CardBody, CardText } from 'reactstrap';

const SingleService = ({ iconBg, iconBorder, title, desc, icon }) => {
  return (
    <Col md="4">
      <Card className="border-0 rounded-3 p-4">
        <CardBody className="d-flex flex-column align-items-center d-md-block">
          <div
            style={{ '--icon-bg': iconBg, '--icon-border': iconBorder }}
            className="service__icon mb-3 rounded-2"
          >
            <img className="d-flex justify-content-center" src={icon} alt="" />
          </div>
          <CardTitle className="display-5 text-center text-md-start">
            {title}
          </CardTitle>
          <CardText className="text-center text-md-start">{desc}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SingleService;
