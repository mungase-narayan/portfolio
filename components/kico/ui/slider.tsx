"use client";
import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div
          className="w-[300px] h-[200px] rounded-2xl border flex items-center justify-center m-8"
          style={{ margin: 100 }}
        >
          <h3>1</h3>
        </div>

        <div className="w-[300px] h-[200px] rounded-2xl border flex items-center justify-center m-8">
          <h3>1</h3>
        </div>

        <div className="w-[300px] h-[200px] rounded-2xl border flex items-center justify-center m-8">
          <h3>1</h3>
        </div>

        <div className="w-[300px] h-[200px] rounded-2xl border flex items-center justify-center m-8">
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
