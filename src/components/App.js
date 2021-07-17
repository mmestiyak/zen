import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Analysis from './Analysis';
import Project from './Project';
import Success from './Success';
import Feedback from './Feedback';
import Newsletter from './Newsletter';
import Blog from './Blog';
import ClientLogosSlider from './ClientLogosSlider';
import Footer from './Footer';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Analysis />
      <Project />
      <Success />
      <Feedback />
      <Newsletter />
      <Blog />
      <ClientLogosSlider />
      <Footer />
    </>
  );
}

export default App;
