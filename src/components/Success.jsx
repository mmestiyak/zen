import React from 'react';
import { Container } from 'reactstrap';
import SuccessStats from './SuccessStats';

const Success = () => {
  return (
    <section className="success p-5 rounded-3">
      <Container>
        <h3 className="section__subtitle--2 d-flex justify-content-center text-white">
          {' '}
          <span></span>Success
        </h3>
        <h2 className="section__title text-center text-white display-1">
          Our Success
        </h2>
        <SuccessStats />
      </Container>
    </section>
  );
};

export default Success;
