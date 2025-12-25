"use client";
import { useState } from "react";

export const MenuMobile = () => {

  return (
    <aside className={`absolute top-2 right-0 ${
          open ? "active-mnav-right max-md:fixed" : "close-mnav-right max-md:fixed"
        }`}> 
      
      <div
            className={`list-none flex flex-col absolute top-14 right-0 items-end z-9999`}
          >
            <a
              href="#home"
              className="text-lg font-medium delay-[50ms] text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600 rounded-tl-md"
            >
              <span className="w-full">Inicio</span>
            </a>
            <a
              href="#service"
              className="text-lg font-medium delay-[50ms] text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full">Servicios</span>
            </a>
            <a
              href="#about"
              className="text-lg font-medium delay-100 text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full">Sobre Mí</span>
            </a>
            <a
              href="#projects"
              className="text-lg font-medium delay-150 text-white transition duration-500 px-5 py-3 border-b border-blue-500 w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full">Portfolio</span>
            </a>

            <a
              href="#review"
              className="text-lg font-medium delay-200 text-white transition duration-500 px-5 py-3 w-52 border-b border-blue-500 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full h-full">Empresas</span>
            </a>
            <a
              href="#contact"
              className="text-lg font-medium delay-200 text-white transition duration-500 px-5 py-3 rounded-bl-md w-52 bg-blue-500 hover:bg-blue-600"
            >
              <span className="w-full h-full">Contacto</span>
            </a>
      </div>
    </aside>
  );
};
