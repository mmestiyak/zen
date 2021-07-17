import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import blogPhoto from '../images/blog-photo.png';
const Blog = () => {
  const blogs = [1, 2, 3];
  return (
    <section className="blog">
      <Container>
        <h3 className="section__subtitle--2 d-flex  justify-content-center">
          <span></span> Blog
        </h3>
        <h1 className="text-center display-1 section__title">
          Our Latest News
        </h1>
        <Row className="g-5">
          {blogs.map((blog) => (
            <Col key={blog} md="4">
              <Card
                style={{ minHeight: '400px' }}
                className="rounded-3 border-0 shadow "
              >
                <CardBody className="p-5">
                  <img
                    className="img-fluid rounded-3 "
                    src={blogPhoto}
                    alt=""
                  />
                  <div className="blog__date text-center">
                    <h3>
                      25
                      <span className="d-md-block pt-1"> Aug</span>
                    </h3>
                  </div>
                  <CardTitle className="display-5 text-center text-md-start ">
                    Create Unique Experiences Through
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit a consectetuer adipisci elit. Donec
                    odio. Quisque volutpat mattis eros.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
