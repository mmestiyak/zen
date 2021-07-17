import React, { useRef, useState } from 'react';
import { Input, Button, Form, Modal, ModalBody } from 'reactstrap';
import send from '../images/send.svg';
const NewsletterForm = ({
  bgSendButton,
  bgSendButtonHover,
  borderColorOnFocus,
  boxShadowOnFocus,
}) => {
  const inputRef = useRef('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(!formSubmitted);
  };

  return (
    <>
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
      <Form onSubmit={handleFormSubmit} className="newsletter__form">
        <Input
          style={{
            '--border-color-on-focus': borderColorOnFocus,
            '--box-shadow-on-focus': boxShadowOnFocus,
          }}
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
        <Button
          style={{
            '--bg-send-button': bgSendButton,
            '--bg-on-send-button-hover': bgSendButtonHover,
          }}
          className="outline-0 newsletter__send-button rounded-circle"
        >
          <img src={send} alt="" />
        </Button>
      </Form>
    </>
  );
};

export default NewsletterForm;
