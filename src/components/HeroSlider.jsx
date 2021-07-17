import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Pagination } from 'swiper/core';
import { nanoid } from 'nanoid';

// install Swiper modules
SwiperCore.use([Pagination]);
const HeroSlider = () => {
  const slides = [
    {
      id: nanoid(),
      subtitle: `Digital Marketing`,
      title: [`Affordable Services`, `& Consultancy`],
      pragraph: `felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget`,
    },
    {
      id: nanoid(),
      subtitle: `We Provide Awesome Service`,
      title: [`We Are Digital Agency`, `& Marketing`],
      pragraph: `Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. Aenean dignissim pellentesque felis.`,
    },
    {
      id: nanoid(),
      subtitle: `Web Development Services`,
      title: [`Web Development Services`, `& Consultancy`],
      pragraph: `Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
      mauris sit amet orci. `,
    },
  ];
  return (
    <Swiper
      initialSlide={Math.floor(slides.length / 2)}
      spaceBetween={40}
      pagination={{
        clickable: true,
      }}
    >
      {slides.map(({ id, title, subtitle, pragraph }) => (
        <SwiperSlide
          key={id}
          className="d-flex flex-column align-items-center  justify-content-center"
        >
          <h2 className="hero__subtitle text-center">{subtitle}</h2>
          <h1 className="display-1 hero__title text-uppercase text-center my-4">
            {title[0]}
            <span className="d-md-block d-inline"> {title[1]}</span>
          </h1>
          <p className="hero__pragraph text-center text-white w-50 ">
            {pragraph}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
