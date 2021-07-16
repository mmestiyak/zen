import React from 'react';

import { Container, Jumbotron } from 'reactstrap';
import HeroActions from './HeroActions';
import HeroSlider from './HeroSlider';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="hero text-white">
      <Container fluid>
        <Navbar />
        <Container>
          <Jumbotron>
            <HeroSlider />
            <HeroActions />
          </Jumbotron>
        </Container>
      </Container>
    </div>
  );
};

export default Hero;
