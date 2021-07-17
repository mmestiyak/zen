import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { getClientLogos } from '../data/data';
import { Container } from 'reactstrap';

// install Swiper modules
SwiperCore.use([Pagination]);
const ClientLogosSlider = () => {
  return (
    <Container className="section">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {getClientLogos().map(({ logo, id }) => (
          <SwiperSlide
            style={{ minHeight: '300px' }}
            className="d-flex align-items-center"
            key={id}
          >
            <img className="clients-logo img-fluid" src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ClientLogosSlider;
