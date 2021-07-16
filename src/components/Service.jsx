import React from 'react';
import { Container, Row } from 'reactstrap';
import SingleService from './SingleService';
import { getServices } from '../data/data';
const Service = () => {
  return (
    <section className="service">
      <Container>
        <h3 className="section__subtitle--2 text-center d-flex justify-content-center">
          <span></span> services
        </h3>
        <h2 className="display-1 section__title text-center">Our Service</h2>
        <Row className="g-5">
          {getServices().map((service) => (
            <SingleService key={service.id} {...service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
