import Image from "next/image";
import { projects } from "./imagenes";

export default function ProjectsAngular() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://a20-appgames.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luwy Games
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://a20-appgames.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Angular20, Signals, Auth0</p>
              </a>
            </li>
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://a20-appgames.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">RxJS, Api Rawg, Json Server</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.luwygames}
          alt="Luwy Games"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://luwypack.netlify.app/#/gender/men"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://luwypack.netlify.app/#/gender/men"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">A20 CSR, Signals, ReactiveForms</p>
              </a>
            </li>
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://luwypack.netlify.app/#/gender/men"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Tailwind, Fetch, Rest</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.shopRest}
          alt="Shop Rest"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://ngrxstore.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NgRx Signal Store
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://ngrxstore.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">ngSignals, Computed, Store</p>
              </a>
            </li>
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://ngrxstore.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Fetch APi, rxResource, rxMethod</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.ngrx_signal}
          alt="NgRx Signal Store"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://fast-billings.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FastBillings
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://fast-billings.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Modo práctico</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.fastBillings}
          alt="Fast Billings"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://ang20-my-forms-reactive.vercel.app/reactive"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactiveForms
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://ang20-my-forms-reactive.vercel.app/reactive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Modo práctico, RF, FormB</p>
              </a>
            </li>
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://ang20-my-forms-reactive.vercel.app/reactive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Signals, Computed</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.ReactiveForms}
          alt="Reactive Forms"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://uat-ggp.yanbal.com/#/id"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yanbal
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://uat-ggp.yanbal.com/#/id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white"> A19 SAP StoreFront B2C</p>
              </a>
            </li>
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://uat-ggp.yanbal.com/#/id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Signals, Rest, CSS BEM</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.yanbal}
          alt="Yanbal"
        />
      </div>
      <div className="w-full h-fit relative group">
        <div className="transition-all w-full h-0 overflow-hidden group-hover:h-full not-lg:h-full flex flex-col justify-center items-center absolute rounded-lg bg-slate-950/80">
          <h4 className="text-white text-center text-[28px] font-medium px-10">
            <a
              href="https://www.somosbelcorp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Belcorp
            </a>
          </h4>
          <ul className="list-disc">
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://www.somosbelcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">A15 CSR, RxJS, Material UI</p>
              </a>
            </li>
            <li className="text-blue-500 text-sm xl:text-base font-medium">
              <a
                href="https://www.somosbelcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white">Fetch, Rest, FromBuilder</p>
              </a>
            </li>
          </ul>
        </div>
        <Image
          className="w-full rounded-lg"
          src={projects.belcorp}
          alt="Belcorp Mailing"
        />
      </div>
    </div>
  );
}
