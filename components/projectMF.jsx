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
          <h4
            className="text-white text-center text-[28px] font-medium px-10 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            MicroFrontend
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
            <div className="flex flex-col h-full lg:overflow-hidden pr-2 gap-6">
              <div className="flex-1 lg:overflow-y-auto pr-2">
                <h2 className="text-2xl text-white font-medium mb-4">
                  MicroFrontend
                </h2>
                <p className="text-white mb-3">
                  Este proyecto implementa una arquitectura de 7 micro frontends
                  encapsulada en Workspace - Shell compartiendo Tokens de UI -
                  Design System
                </p>
                <div className="mb-2">
                  <ol className="list-decimal pl-5 mb-3">
                    {/* 1 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Tecnologías
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Monorepo workspaces + orquestación con concurrently
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        React 19.1.1 + React Router
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Routing
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Build/dev tool: Vite 7.1.x
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Microfrontends: Vite Federation
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        TypeScript
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Tailwind CSS versión 4.1
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Linting: ESLint 9.x + eslint-plugin-react-hooks
                      </li>
                    </ul>
                    {/* 2 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Arquitectura:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Host/Shell 
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Remotes
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Federación anidada
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        CORS: cors: true y header Access-Control-Allow-Origin: *
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Proxy: shell tiene server.proxy
                      </li>

                    </ul>
                    {/* 3 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Seguridad/Auth:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Autenticación basada en JWT
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        LocalStorage
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        {`Authorization: Bearer <token>`}
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Interceptor de Axios 
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        .env
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Interceptor Error
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        API en Express
                      </li>
                    </ul>

                  </ol>
                </div>
              </div>
              <div className="pt-3 pb-6 border-t mt-2 bg-secondary z-1000 border-white/10 flex gap-2 sticky -bottom-10">
                <a
                  className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                  href="https://monorepo-microf-luwydev.up.railway.app"
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
