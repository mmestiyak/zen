import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container className="rounded-3 newsletter__container shadow bg-white p-5">
        <Row className="g-5 d-flex align-items-center">
          <Col md="6">
            <h3 className="newsletter__title">Subscribe Our Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipisci elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut.
            </p>
          </Col>
          <Col md="6">
            <NewsletterForm
              bgSendButton="var(--color-blue-dark)"
              bgSendButtonHover="var(--color-blue-dark-1)"
              borderColorOnFocus="var(--color-blue-dark)"
              boxShadowOnFocus="#2a22738f"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
