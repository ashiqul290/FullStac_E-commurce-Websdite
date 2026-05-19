"use client";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Controller,
  Autoplay,
} from "swiper/modules";

import "swiper/css";

const slides = [
  {
    id: 1,
    title: "Save 20%",
    subtitle: "Every Order",
    bg: "bg-green-950",
  },
  {
    id: 2,
    title: "Big Sale",
    subtitle: "Mango & Juice",
    bg: "bg-orange-500",
  },
  {
    id: 3,
    title: "Up To 20%",
    subtitle: "Every Package",
    bg: "bg-lime-500",
  },
  {
    id: 4,
    title: "Organic Food",
    subtitle: "Fresh Everyday",
    bg: "bg-emerald-700",
  },
];

const BannerSowper = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbSwiper, setThumbSwiper] = useState(null);

  return (
    <div className="w-full overflow-hidden">

      {/* MAIN SLIDER */}
      <Swiper
        modules={[Controller, Autoplay]}
        onSwiper={setMainSwiper}
        controller={{ control: thumbSwiper }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`
                ${slide.bg}
                h-full
                flex
                items-center
                px-20
                text-white
              `}
            >
              <div>
                <p className="uppercase text-sm mb-2">
                  Hot Sales
                </p>

                <h2 className="text-6xl font-bold">
                  {slide.title}
                </h2>

                <p className="text-5xl mt-2">
                  {slide.subtitle}
                </p>

                <button className="mt-8 bg-lime-500 px-6 py-3 rounded-xl">
                  Explore Products
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMB SLIDER */}
      <div className="-mt-20 relative z-10">

        <Swiper
          modules={[Controller]}
          onSwiper={setThumbSwiper}
          controller={{ control: mainSwiper }}

          slidesPerView={"auto"}
          centeredSlides={true}
          slideToClickedSlide={true}

          spaceBetween={20}

          loop={true}

          speed={1000}

          className="thumbSwiper px-10 pb-10"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="!w-[380px]"
            >
              {({ isActive }) => (
                <div
                  className={`
                    ${slide.bg}
                    min-h-[160px]
                    rounded-2xl
                    p-6
                    text-white
                    cursor-pointer
                    transition-all
                    duration-500

                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-40"
                    }
                  `}
                >
                  <p className="text-xs uppercase mb-2">
                    Hot Sales
                  </p>

                  <h3 className="text-3xl font-bold">
                    {slide.title}
                  </h3>

                  <p className="text-2xl">
                    {slide.subtitle}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default BannerSowper;