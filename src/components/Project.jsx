import React from 'react';
import { Container, Row } from 'reactstrap';
import { getProjects } from '../data/data';
import SingleProject from './SingleProject';

const Project = () => {
  return (
    <section className="project">
      <Container>
        <h3 className="section__subtitle--2 d-flex justify-content-center">
          <span></span>
          Project
        </h3>
        <h2 className="display-1 text-center section__title">Our Project</h2>
        <Row className="g-5 project__items">
          {getProjects().map((project) => (
            <SingleProject key={project.id} {...project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;
