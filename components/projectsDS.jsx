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
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10 cursor-pointer" onClick={() => setShowModal(true)}>
              Design System
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
                    alt="Design System"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.design_system2}
                    alt="Design System"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-fit rounded-lg"
                    src={projects.design_system3}
                    alt="Design System"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col h-full lg:overflow-hidden pr-2 gap-6">
              <div className="flex-1 lg:overflow-y-auto pr-2">
                <h2 className="text-2xl text-white font-semibold mb-4">
                  Design System
                </h2>
                <p className="text-white mb-3">
                  Monorepo de Design System que centraliza design tokens y una
                  librería de componentes React, con un portal de documentación
                  para validar y demostrar su uso.
                </p>
                <div className="mb-2">
                  <p className="text-white text-xl mb-2 font-medium">
                    Tecnologías:
                  </p>
                  <ol className="list-decimal pl-5 mb-3">
                    {/* 1 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Monorepo / Gestión de paquetes
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        pnpm Workspaces
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Turborepo turbo@^2.5.8 para orquestar dev/build —
                        turbo.json
                      </li>
                    </ul>
                    {/* 2 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Frontend (portal de documentación) — apps/docs
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        React ^19.1.1 + React DOM
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Vite ^7.1.7 + @vitejs/plugin-react@^5.0.4
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        TypeScript ~5.9.3
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Tailwind CSS v4 ^4.1.14
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        React Router
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Lucide React (iconos) ^0.545.0 — package.json
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Motion (animaciones) ^12.23.24 — package.json
                      </li>
                    </ul>
                    {/* 3 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Autenticación
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Firebase ^12.6.0 — Login con Google
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        API Auth — Login con DummyJSON 
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        AuthProvider (auth/AuthProvider en el código) — Manejo global de sesión, token y usuario
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        React Router: Rutas protegidas con ProtectedRoute (auth/ProtectedRoute en el código)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Restore Session — Recupera sesión al recargar la app
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Logout seguro — Limpieza de estado y storage
                      </li>
                    </ul>
                    {/* 4 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Librería UI — packages/ui
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        React ^19.2.0 + React DOM ^19.2.0
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Vite ^7.1.9
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Storybook 9.1.10
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Chromatic @chromatic-com/storybook@4.1.1
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Testing Storybook con Vitest + Browser
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Vitest ^3.2.4
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Playwright ^1.56.0 (provider browser de Vitest)
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Tailwind CSS v4
                      </li>
                    </ul>
                    {/* 5 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Design Tokens — packages/tokens
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Style Dictionary ^3.9.0 para generar tokens a CSS/JS
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Tokens + theming con CSS variables + @theme
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Preset Tailwind (mapea tokens → theme.extend) —
                        tailwind-preset.js
                      </li>
                    </ul>
                    {/* 6 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Calidad / Lint
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        ESLint ^9.36.0 (flat config) + typescript-eslint ^8.45.0
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Tokens + theming con CSS variables + @theme
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        Preset Tailwind (mapea tokens → theme.extend) —
                        tailwind-preset.js
                      </li>
                    </ul>
                    {/* 7 */}
                    <li className="marker:text-white text-white text-base font-normal">
                      Versionado y publicación
                    </li>
                    <ul className="list-disc pl-5 mb-3">
                      <li className="marker:text-primary text-white text-base font-base">
                        Changesets @changesets/cli@^2.29.7
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        GitHub Packages
                      </li>
                      <li className="marker:text-primary text-white text-base font-base">
                        GitHub Actions para release automático
                      </li>
                    </ul>
                  </ol>
                </div>
              </div>
              <div className="pt-3 pb-6 border-t mt-2 bg-secondary z-1000 border-white/10 flex gap-2 sticky -bottom-10">
                  <a className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition "
                    href="https://luwy-designsystem.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver sitio
                  </a>
                  <a className="mt-4 px-3 py-2 bg-[#CC3534] text-white rounded hover:bg-blue-500 transition"
                    href=" https://github.com/orgs/LuwyDyroWeb/packages"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Token NPM
                  </a>
              </div>
            </div>
          </Modal>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.design_system2}
          alt="Design System"
        />
      </div>
    </div>
  );
}
