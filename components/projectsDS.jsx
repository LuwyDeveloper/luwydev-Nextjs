"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "./imagenes";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Modal from "./Modal";

export default function ProjectsDS() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Design System
            </a>
          </h4>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Ver detalle
          </button>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className="main_modal_swiper">
              <Swiper
                slidesPerView={"auto"}
                centeredSlides={false}
                loop={true}
                modules={[Navigation]}
                navigation
              >
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.design_system1}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.design_system2}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.design_system3}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h2 className="text-2xl text-white font-medium mb-4">
                Design System
              </h2>
              <p className="text-white mb-3">
                Este proyecto implementa un Design System con Tokens, Componentes UI 
              </p>
              <ul className="list-disc pl-5">
                <li className="marker:text-primary text-white text-base font-medium">
                  React 19
                </li>

                <li className="marker:text-primary text-white text-base font-medium">
                  TypeScript
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  TailwindCSS
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  NodeJS
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  NPM Package
                </li>
              </ul>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver sitio
                </a>
              </button>
            </div>
          </Modal>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.design_system2}
          alt="Micro Frontend MonoRepo"
        />
      </div>
    </div>
  );
}
