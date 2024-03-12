import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini
} from './styles';

function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <StyledSwiper
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
        modules={[Thumbs]}
        spaceBetween={ 20 }
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={ slide.id }>
            <StyleSlide
              src={ process.env.PUBLIC_URL + slide.src }
              alt={ slide.alt }
              width={ 728 }
              height={ 408 }
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          spaceBetween={ 20 }
          slidesPerView={ 4 }
          freeMode
          watchSlidesProgress
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={ slide.id }>
              <StyleSlideMini $active={activeSlide === index} src={ slide.src } alt={ slide.alt } />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
      </SliderWrapper>
    </>
  );
}

Gallery.propTypes = {
  slides: PropTypes.array,
};

export default Gallery;
