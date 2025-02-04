"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./styles.sass";

const MainBlockSlider = () => {
  const MainBlockSliderImages = [
    { id: 1, img: "/mainSlider.png", alt: "after" },
    { id: 2, img: "/mainSlider.png", alt: "base" },
    { id: 3, img: "/mainSlider.png", alt: "maze" },
    { id: 4, img: "/mainSlider.png", alt: "after" },
    { id: 5, img: "/mainSlider.png", alt: "base" },
    { id: 6, img: "/mainSlider.png", alt: "maze" },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        className='mainBlockSwiper'
      >
        {MainBlockSliderImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <img
                src={item.img}
                alt={item.alt}
                className='img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBlockSlider;
