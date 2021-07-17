import React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import { socialMediaIcons } from '../images';
import NewsletterForm from './NewsletterForm';
const { facebook, twitter, linkedin, instagram } = socialMediaIcons;
const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Jumbotron>
          <Row className="g-5 pb-5 d-flex">
            <Col md="4 order-0">
              <a href="/" className="text-white text-uppercase navbar-brand">
                zen
              </a>
              <p className="text-white">
                Morbi in sem quis dui placar Pellentesque odio nisi, euismod in,
                pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
              </p>
              <div className="social-medias d-flex mt-4">
                <a
                  href="#"
                  className="border border-white rounded-circle p-2 social-media-icon"
                >
                  <img src={facebook} alt="" className="i" />
                </a>
                <a
                  href="#"
                  className="border border-white rounded-circle p-2 social-media-icon"
                >
                  <img src={twitter} alt="" className="i" />
                </a>
                <a
                  href="#"
                  className="border border-white rounded-circle p-2 social-media-icon"
                >
                  <img src={linkedin} alt="" className="i" />
                </a>
                <a
                  href="#"
                  className="border border-white rounded-circle p-2 social-media-icon"
                >
                  <img src={instagram} alt="" className="i" />
                </a>
              </div>
            </Col>

            <Col md="4  order-1 order-md-0 d-flex justify-content-around">
              <div>
                <h2>Menu</h2>
                <ul className="p-0 d-flex  flex-column justify-content-between">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Services</h2>
                <ul className="p-0 d-flex flex-column justify-content-between">
                  <li>
                    <a href="#">Digital Agency</a>
                  </li>
                  <li>
                    <a href="#">Digital marketing</a>
                  </li>
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Online Service</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4 py-5 py-md-0">
              <h2>Subscribe Newsletter</h2>
              <p className="text-white">
                Morbi in sem quis dui placar Pellentesque odio nisi, euismod in,
                pharetra a.
              </p>
              <NewsletterForm
                bgSendButton="var(--color-orange-light)"
                bgSendButtonHover="var(--color-orange-dark)"
                borderColorOnFocus="var(--color-orange-light)"
                boxShadowOnFocus="#ff861878"
              />
            </Col>
          </Row>
          <hr />
          <p className="text-white text-center copyright">
            Morbi in sem quis dui placar Pellentesque odio nisi, euismod in,
            pharetra a.
          </p>
        </Jumbotron>
      </Container>
    </footer>
  );
};

export default Footer;
