import React, { useRef, useState } from 'react';
import {
  Col,
  Container,
  Row,
  Input,
  Button,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import send from '../images/send.svg';
const Newsletter = () => {
  const inputRef = useRef('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(!formSubmitted);
    console.log(formSubmitted);
  };

  return (
    <section className="newsletter">
      <Modal
        toggle={() => {
          setFormSubmitted(!setFormSubmitted);
        }}
        isOpen={formSubmitted}
      >
        <ModalBody className="p-5 d-flex justify-content-center flex-column align-items-center">
          <h3 className="section__title text-center">
            Congratulations{' '}
            <span
              style={{ color: 'var(--color-blue-dark)' }}
              className="text-purple"
            >
              {inputRef.current.value}
            </span>
          </h3>
          <h2 className="text-center">
            Your email is successfully added to our newsletter
          </h2>
        </ModalBody>
      </Modal>

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
            <Form onSubmit={handleFormSubmit} className="newsletter__form">
              <Input
                placeholder="Enter your email"
                ref={inputRef}
                onChange={(e) => {
                  inputRef.current.value = e.target.value;
                }}
                className="newsletter__form-input"
                required
                type="email"
                name="email"
              />
              <Button className="outline-0 newsletter__send-button rounded-circle">
                <img src={send} alt="" />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
