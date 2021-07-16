import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from './Button';
import couple from '../images/couple.jpg';

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row className="gx-5 d-flex align-items-center justify-content-center">
          <Col md="5">
            <div className="about__bg rounded-3">
              <div className="about__photo-wrapper">
                <img
                  className="about__photo rounded-3"
                  src={couple}
                  alt="Young couple thinking over mortgage"
                />
              </div>
            </div>
          </Col>
          <Col md="7">
            <h3 className="section__subtitle ">About us</h3>
            <h2 className="display-1 d-inline-block  section__title text-center text-md-start">
              We Are a Cutting{' '}
              <span className="d-md-block">Edge Digital Agency</span>
            </h2>
            <p className="mt-5 text-center text-md-start">
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
            <Button className="mt-5">learn more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
