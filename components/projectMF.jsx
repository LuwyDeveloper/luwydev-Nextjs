"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "./imagenes";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Modal from "./Modal";

export default function ProjectsMF() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://monorepo-microf-luwydev.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MicroFrontend
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
                    src={projects.microFrontend1}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.microFrontend4}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.microFrontend2}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.microFrontend3}
                    alt="Micro Frontend MonoRepo"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col h-full overflow-hidden pr-2">
              <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary">
              <h2 className="text-2xl text-white font-medium mb-4">
                MicroFrontend
              </h2>
              <p className="text-white mb-3">
                Este proyecto implementa una arquitectura de 7 micro frontends
                encapsulada en Workspace - Shell compartiendo Tokens de UI -
                Design System
              </p>
              <ul className="list-disc pl-5">
                <li className="marker:text-primary text-white text-base font-medium">
                  React 19
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  Vite Federation
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  TypeScript
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  TailwindCSS
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  Deploy Render
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  NodeJS
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  NPM Package
                </li>
              </ul>
              </div>
              <div className="pt-4 border-t mt-4 border-white/10 flex gap-2">
                <a className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition sticky bottom-0"
                  href="https://monorepo-microf-luwydev.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver sitio
                </a>
              </div>
            </div>
          </Modal>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.microFrontend}
          alt="Micro Frontend MonoRepo"
        />
      </div>
    </div>
  );
}
