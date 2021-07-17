import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from './Button';
import couple from '../images/couple.jpg';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <section className="about">
      <Container>
        <Row className="gx-5 d-flex align-items-center justify-content-center">
          <Col md="5">
            <div className="about__bg rounded-3">
              <div className="about__photo-wrapper">
                <img
                  className="about__photo img-fluid rounded-3"
                  src={couple}
                  alt="Young couple thinking over mortgage"
                />
              </div>
            </div>
          </Col>
          <Col md="7 mt-5 mt-md-0">
            <h3
              className={`${
                isMobile ? 'section__subtitle--2' : 'section__subtitle'
              } justify-content-md-start d-flex justify-content-center`}
            >
              <span></span>
              About us
            </h3>
            <h2 className="display-1 d-inline-block  section__title text-center text-md-start">
              We Are a Cutting{' '}
              <span className="d-md-block">Edge Digital Agency</span>
            </h2>
            <p className="mt-5  text-center text-md-start">
              Morbi in sem quis dui placerat ornare. Pellentes pharetraultricies
              in, diam. Sed arcu. Cras consequat.Praesent dapibus
            </p>
            <div className="wireframes row mt-5">
              <div className="wireframe d-flex col-6">
                <div className="wireframe__icon  rounded-2"></div>
                <div>
                  <h4 className="wireframe__title">Wireframe</h4>
                  <p>Sed egestas, ante et</p>
                </div>
              </div>
              <div className="wireframe d-flex col-6">
                <div className="wireframe__icon  rounded-2"></div>
                <div>
                  <h4 className="wireframe__title">Wireframe</h4>
                  <p>Sed egestas, ante et</p>
                </div>
              </div>
              <div className="wireframe d-flex col-6">
                <div className="wireframe__icon  rounded-2"></div>
                <div>
                  <h4 className="wireframe__title">Wireframe</h4>
                  <p>Sed egestas, ante et</p>
                </div>
              </div>
              <div className="wireframe d-flex col-6">
                <div className="wireframe__icon  rounded-2"></div>
                <div>
                  <h4 className="wireframe__title">Wireframe</h4>
                  <p>Sed egestas, ante et</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center d-md-block">
              <Button className="mt-5">learn more</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
