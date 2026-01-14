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
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4
            className="text-white text-center text-[28px] font-medium px-10 cursor-pointer"
            onClick={() => setActiveModal("admin-auth")}
          >
            Admin Auth Angular
          </h4>
          <button
            onClick={() => setActiveModal("admin-auth")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Ver detalle
          </button>
          <Modal
            show={activeModal === "admin-auth"}
            onClose={() => setActiveModal(null)}
          >
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
                  Administrador - Autenticación
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

      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4
            className="text-white text-center text-[28px] font-medium px-10 cursor-pointer"
            onClick={() => setActiveModal("admin-auth-react")}
          >
            Admin Auth React
          </h4>
          <button
            onClick={() => setActiveModal("admin-auth-react")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Ver detalle
          </button>
          <Modal
            show={activeModal === "admin-auth-react"}
            onClose={() => setActiveModal(null)}
          >
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
                    src={projects.AuthNest1}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.AuthNest2}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.AuthNest3}
                    alt="Luwy Admin Auth"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col h-full lg:overflow-hidden pr-2 gap-6">
              <div className="flex-1 lg:overflow-y-auto pr-2">
                <h2 className="text-2xl text-white font-semibold mb-4">
                  Administrador - Autenticación
                </h2>
                <p className="text-white mb-3">
                  Sistema de autenticación en React + TypeScript, con Zustand
                  como estado global, integrado con backend propio en NestJS y
                  Firebase Authentication, con control avanzado de sesión,
                  expiración, inactividad y UX en dashboard.
                </p>
                <div className="mb-2">
                  <ol className="list-decimal pl-5 mb-3">
                    {/* 1 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Tecnologías
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        React 19 + TypeScript
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Zustand (estado global) y Zustand Persist
                        (sessionStorage)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Backend REST en NestJS
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Firebase Authentication (Google Login)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        ApexCharts (visualización de dashboard)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        TailwindCSS
                      </li>
                    </ul>
                    {/* 2 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Arquitectura:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Store global de autenticación (auth.store.ts)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Store dedicado para inactividad del usuario (idle.store)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Separación de responsabilidades por dominio (auth / idle
                        / ui)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Capa Core: API client, auth, interceptors, cache, manejo
                        de errores.
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Hooks desacoplados del UI
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Acceso global al estado sin prop drilling
                      </li>
                    </ul>
                    {/* 3 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Seguridad/Auth:
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Login tradicional (usuario y contraseña) vía API REST (NestJS)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Login social con Google (Firebase Auth)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Manejo de token de sesión
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Logout manual y automático
                      </li>
                    </ul>
                    {/* 4 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Manejo de Sesión
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Verificación activa de sesión (checkSession)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Duración de sesión configurable (TTL)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Timestamp de expiración (expiresAt)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Modal de advertencia 2 minutos antes de expirar la
                        sesión
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Sincronización entre expiración y actividad del usuario
                      </li>
                    </ul>
                    {/* 5 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Control de Inactividad
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Detección de inactividad del usuario (idle timeout)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Logout automático tras 1 minuto sin interacción
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Debounce + paginación + búsqueda
                      </li>
                    </ul>
                    {/* 6 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Dashboard / UX
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                        <li className="marker:text-primary text-white text-base font-base">
                        Dashboard protegido por autenticación
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Visualización de datos con ApexCharts
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Feedback visual de sesión activa / expirada
                      </li>
                    </ul>
                  </ol>
                </div>
              </div>
              <div className="pt-3 pb-6 border-t mt-2 bg-secondary z-1000 border-white/10 flex gap-2 sticky -bottom-10">
                <a
                  className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition "
                  href="https://authnest-luwy.up.railway.app"
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
          src={projects.AuthNest2}
          alt="Luwy Admin Auth"
        />
      </div>
    </div>
  );
}
