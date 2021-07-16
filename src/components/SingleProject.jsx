import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';

const SingleProject = ({ title, desc, bg }) => {
  return (
    <Col md="4">
      <div
        style={{ '--bg-image': `url(${bg})` }}
        className="project__item rounded-3"
      >
        <Card className="rounded-3">
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{desc}</CardText>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default SingleProject;
