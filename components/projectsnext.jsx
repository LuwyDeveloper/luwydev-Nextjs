"use client";
import Image from "next/image";
import { useState } from "react";
import { projects } from "./imagenes";
import Modal from "./Modal";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function ProjectsNext() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="http://shop-adminrts.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop React
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
                    src={projects.shopReact1}
                    alt="Shop React"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.shopReact2}
                    alt="Shop React"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.shopReact}
                    alt="Shop React"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.shopReact3}
                    alt="Shop React"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col  overflow-hidden pr-2">
              <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary">
              <h2 className="text-2xl text-white font-medium mb-4">
                Shop React
              </h2>
              <p className="text-white mb-3"></p>
              <ul className="list-disc pl-5">
                <li className="marker:text-primary text-white text-base font-medium">
                  React19-TS, Vite, TanStack Table
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  Formik, Rest, i18n, Tailwind
                </li>
              </ul>
              </div>
              <div className="pt-4 border-t mt-4 border-white/10 flex gap-2">
                <a className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition sticky bottom-0"
                  href="http://shop-adminrts.netlify.app/"
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
          src={projects.shopReact}
          alt="Shop React"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://luwydev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LuwyDev
            </a>
          </h4>

          <button
            onClick={() => setShowModal2(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Ver detalle
          </button>
          <Modal show={showModal2} onClose={() => setShowModal2(false)}>
            <div>
              <Image
                className="w-full rounded-lg"
                src={projects.luwydev}
                alt="Luwy Dev"
              />
            </div>
            <div>
              <h2 className="text-2xl text-white font-medium mb-4">
                LuwyDev
              </h2>
              <p className="text-white mb-3"></p>
              <ul className="list-disc pl-5">
                <li className="marker:text-primary text-white text-base font-medium">
                  NextJs15 CSR, SEO
                </li>
                <li className="marker:text-primary text-white text-base font-medium">
                  i18n, Tailwind
                </li>
              </ul>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                <a
                  href="https://luwydev.com/"
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
          src={projects.luwydev}
          alt="Luwy Dev"
        />
      </div>
    </div>
  );
}
