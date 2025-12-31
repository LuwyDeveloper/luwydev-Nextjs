"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "./imagenes";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Modal from "./Modal";

export default function ProjectsAngular21() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10 cursor-pointer" onClick={() => setShowModal(true)}>
              Admin Auth
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
                    src={projects.ldAdmin1}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.ldAdmin2}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.ldAdmin3}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.ldAdmin4}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col h-full lg:overflow-hidden pr-2 gap-6">
              <div className="flex-1 lg:overflow-y-auto pr-2">
                <h2 className="text-2xl text-white font-semibold mb-4">
                  Administrador - Autentificación
                </h2>
                <p className="text-white mb-3">
                  Dashboard/Admin en Angular 21 (Signals + zoneless con
                  autenticación (login) y autorización por roles, con seguridad
                  por guards/interceptors y consumo de API REST (DummyJSON).
                </p>
                <div className="mb-2">
                  <ol className="list-decimal pl-5 mb-3">
                    {/* 1 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Tecnologías
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Angular 21
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Signals, para manejar estado y conectar RxJS
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        RxJS, para flujos async y estados de carga
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        TailwindCSS v4.1
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        SweetAlert2
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        API REST: Dummyjson
                      </li>
                    </ul>
                    {/* 2 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Arquitectura:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Standalone Bootstrap
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Zoneless
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Router lazy
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Capa Core: API client, auth, interceptors, cache, manejo
                        de errores.
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Capa Features:pantallas de negocio
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Shared UI: Componentes y servicios reusables
                      </li>
                    </ul>
                    {/* 3 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Seguridad/Auth:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Login: Reactive Form
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Estado global
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Token
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Guards
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        {`Interceptor Auth: Agrega Authorization: Bearer <token> al endpoint`}
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Interceptor Error
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Rutas especiales: ForbiddenPage y NotFoundPage
                      </li>
                    </ul>
                    {/* 4 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Performance/UX:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Cache interceptor con TTL
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Skeleton loading
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Debounce + paginación + búsqueda
                      </li>
                    </ul>
                  </ol>
                </div>
              </div>
              <div className="pt-3 pb-6 border-t mt-2 bg-secondary z-1000 border-white/10 flex gap-2 sticky -bottom-10">
                <a
                  className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition "
                  href="https://admin-a21.netlify.app/"
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
          src={projects.ldAdmin2}
          alt="Luwy Admin Auth"
        />
      </div>
    </div>
  );
}
