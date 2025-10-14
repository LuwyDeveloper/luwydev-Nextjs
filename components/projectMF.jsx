import Image from "next/image";
import { projects } from "./imagenes";

export default function ProjectsMF() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80 ">
          <h4 className="text-white text-center text-[28px] font-semibold px-10">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              MicroFrontend
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-base font-medium">
              <a
                href="https://uat-ggp.yanbal.com/#/id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white"> React, Vite</p>
              </a>
            </li>
            
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.microFrontend}
          alt="Yanbal"
        />
      </div>
    </div>
  );
}
