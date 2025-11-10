"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { logos } from "./Imagenes";

export const SliderProyecto = () => {
  return (
    <div className="swiper clientLogoSliderLight pb-2 sm:pb-9 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          990: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.angular_logo}
              className="mx-auto tech"
              alt="Logo Angular"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.react_logo}
              className="mx-auto tech"
              alt="Logo React"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.next_logo}
              className="mx-auto tech"
              alt="Logo Nextjs"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.vite_logo}
              className="mx-auto tech"
              alt="Logo Vite"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.tailwind_logo}
              className="mx-auto tech"
              alt="Logo Tailwind"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.materialUI_logo}
              className="mx-auto tech"
              alt="Logo Material UI"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.wordpress_logo}
              className="mx-auto tech"
              alt="Logo Wordpress"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide className="xl:px-[1.2rem] lg:px-[0.9rem]">
          <div className="client-logo-light">
            <Image
              height={80}
              src={logos.figma_logo}
              className="mx-auto tech"
              alt="Logo Figma"
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
