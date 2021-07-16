import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Analysis from './Analysis';
import Project from './Project';
import Success from './Success';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Analysis />
      <Project />
      <Success />
    </>
  );
}

export default App;
