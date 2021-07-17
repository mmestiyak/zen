import React, { useRef } from 'react';
import { Container, Col, Row, Card, CardBody, CardText } from 'reactstrap';
import Button from './Button';

import client from '../images/client.png';
import arrow from '../images/arrow.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation]);

const Feedback = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="feedback">
      <Container>
        <Row className="g-5 d-flex align-items-center">
          <Col md="6 d-flex flex-column align-items-center d-md-block">
            <h3 className="section__subtitle">Feedback</h3>
            <h2 className="text-center text-md-start display-1 section__title">
              Clients Give Us Excellent Feedback
            </h2>
            <p className="text-center text-md-start">
              Lorem ipsum dolor sit amet, consectetuer adipisci elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut.
            </p>
            <Button>Give feedback</Button>
          </Col>
          <Col md="6">
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide className="shadow-sm">
                <Card className="feedback__item border-0 rounded-3 p-4">
                  <CardBody>
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="img-fluid rounded-circle feedback__item-photo me-5"
                        src={client}
                        alt=""
                      />
                      <div>
                        <h3 className="feedback__item-client">
                          Laverne K. Avis
                        </h3>
                        <p className="feedback__item-client-title">CEO</p>
                      </div>
                    </div>
                    <p className="feedback__item-text">
                      Lorem ipsum dolor sitt, consectetuer adipisci elit. Donec
                      odio. Quisque volutpat mattis eros. Nullam malesuada erat
                      ut turpis. Suspendisse urna nibh, viverra non, semper.
                      Praesent dapibus, neque id cursus faucibus, tortor neque
                      egestas auguae, eu vulputate magna eros eu erat.
                    </p>
                  </CardBody>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="feedback__item border-0 rounded-3 p-4">
                  <CardBody>
                    <div className="d-flex align-items-center mb-5">
                      <img
                        className="img-fluid rounded-circle feedback__item-photo me-5"
                        src={client}
                        alt=""
                      />
                      <div>
                        <h3 className="feedback__item-client">
                          Laverne K. Avis
                        </h3>
                        <p className="feedback__item-client-title">CEO</p>
                      </div>
                    </div>

                    <CardText className="feedback__item-text">
                      Lorem ipsum dolor sitt, consectetuer adipisci elit. Donec
                      odio. Quisque volutpat mattis eros. Nullam malesuada erat
                      ut turpis. Suspendisse urna nibh, viverra non, semper.
                      Praesent dapibus, neque id cursus faucibus, tortor neque
                      egestas auguae, eu vulputate magna eros eu erat.
                    </CardText>
                  </CardBody>
                </Card>
              </SwiperSlide>
              <div className="buttons my-4 text-center text-md-start">
                <button ref={prevRef}>
                  <img src={arrow} alt="" />
                </button>
                <button ref={nextRef}>
                  {' '}
                  <img src={arrow} alt="" />
                </button>
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
