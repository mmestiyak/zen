import React, { useState } from 'react';
import Button from './Button';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import play from '../images/play.svg';
import check from '../images/check.svg';
import { getAnalysisPoints } from '../data/data';
import { Row, Col, Container } from 'reactstrap';

const Analysis = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section analysis">
      <Container>
        <Row>
          <Col md="7">
            <h3 className="section__subtitle">Analysis</h3>
            <h2 className="section__title display-1">Why We Are Best</h2>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue.
            </p>

            {getAnalysisPoints().map(({ id, point }) => (
              <Row key={id} className="gt-5 my-5">
                <Col sm="1" xs="1">
                  <img
                    className="p-3 rounded-circle check"
                    src={check}
                    alt=""
                  />
                </Col>
                <Col>
                  <p>{point}</p>
                </Col>
              </Row>
            ))}
            <Button>learn more</Button>
          </Col>
          <Col md="5">
            <div className="analysis__photo d-flex justify-content-center align-items-center">
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="46ZAbfqeAy8"
                onClose={() => setIsOpen(false)}
              />

              <span></span>
              <Button
                className="rounded-circle analysis__button"
                onClick={() => setIsOpen(true)}
              >
                <img
                  className="play d-inline-block"
                  src={play}
                  alt="play icon"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Analysis;
