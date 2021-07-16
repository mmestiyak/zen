import React, { useState } from 'react';
import Button from './Button';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import play from '../images/play.svg';

const HeroActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero__actions d-flex justify-content-center align-items-center">
      <Button>Learn more</Button>
      <div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="46ZAbfqeAy8"
          onClose={() => setIsOpen(false)}
        />

        <Button background="transparent" onClick={() => setIsOpen(true)}>
          <img
            className="play d-inline-block border border-white p-3 rounded-circle m-3"
            src={play}
            alt="play icon"
          />
          watch video
        </Button>
      </div>
    </div>
  );
};

export default HeroActions;
