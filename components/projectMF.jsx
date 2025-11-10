"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "./imagenes";
import Modal from "./Modal";

export default function ProjectsMF() {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
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
                <div>
                  <Image
                    className="w-full rounded-lg"
                    src={projects.microFrontend}
                    alt="Micro Frontend MonoRepo"
                  />
                </div>
                <div>
                  <h2 className="text-2xl text-white font-semibold mb-4">
                    MicroFrontend
                  </h2>
                  <p className="text-white mb-3">
                    Este proyecto implementa una arquitectura de micro frontends
                    usando React y Vite, desplegado en Render.
                  </p>
                  <ul className="list-disc pl-5">
                    <li className="marker:text-primary text-white text-base font-medium">
                      React, Vite
                    </li>
                    <li className="marker:text-primary text-white text-base font-medium">
                      React, Vite
                    </li>
                    <li className="marker:text-primary text-white text-base font-medium">
                      React, Vite
                    </li>
                  </ul>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                    <a
                      href="https://monorepo-microf-luwydev.onrender.com/"
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
          src={projects.microFrontend}
          alt="Micro Frontend MonoRepo"
        />
      </div>
    </div>
  );
}
