"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PreLoader } from "@/components/Preloader";
import "animate.css";
import {
  logos,
  icons,
  profile,
  about,
  background,
} from "@/components/imagenes";
import { ChangeLang } from "@/components/ChangeLang";
import { SliderEmpresa } from "@/components/SliderEmpresa";
import { SliderProyecto } from "@/components/SliderProyecto";
import { WordWrapper } from "@/components/WordWrapper";
import { FooterC } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { MenuMobile } from "@/components/MenuMobile";
import { useTranslations } from "next-intl";

export function App() {
  const [showPreloader, setShowPreloader] = useState(false);
  useEffect(() => {
    const hasPreloader = sessionStorage.getItem("hasPreloader");

    if (!hasPreloader) {
      setShowPreloader(true);
      sessionStorage.setItem("hasPreloader", "true");
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const t = useTranslations();

  return (
    <div style={{ background: "#010825" }} className="max-h-screen h-screen">
      {showPreloader && <PreLoader />}
      <div
        style={{ background: `url(${background.BG.src})` }}
        className="flex justify-center items-center bg-no-repeat box-border bg-cover h-full relative pb-[68px]"
      >
        <div className="container h-full w-full box-border relative pt-[72px] pb-6 sm:pt-[105px] sm:pb-[37px]">
          <div className="pt-6 absolute w-full top-0 justify-between box-border hidden sm:flex px-5 lg:px-12 2xl:px-0">
            <div className="flex gap-[42px] justify-start items-center">
              <div className="flex logo justify-start items-center">
                <Image
                  className="animate__animated animated flip animate__infinite dark-version logo_home"
                  src={logos.logo_LD}
                  alt="logo"
                  width="27"
                />
                <Image
                  className="dark-version"
                  src={logos.logo_luwydyro}
                  alt="logo"
                  width="91"
                />
              </div>

              <div className="flex justify-between text text-lg font-medium font-work text-[#747681]">
                <h1 className="text-white text-center text-sm hover:text-blue-600 text-h1 transition-all cursor-default">
                  Luwy Dyro
                </h1>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <div className="flex gap-[6px] justify-between text text-lg font-medium font-work text-[#747681]">
                <Image src={icons.mail_fast} alt="" />
                <p className="text-neutral-500 text-lg hover:text-white transition-all">
                  <a href="mailto:luwy.dyro@gmail.com">luwy.dyro@gmail.com</a>
                </p>
              </div>
              <div className="sm:flex gap-[10px] hidden">
                <a
                  href="https://github.com/Luwy-Dyro"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-lg bg-[rgba(255,255,255,0.1)] group transition-all hover:bg-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 496 512"
                  >
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      className="fill-[#747681] group-hover:fill-white"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/luwydyrofrontend/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-lg bg-[rgba(255,255,255,0.1)] group transition-all hover:bg-blue-500"
                >
                  <svg
                    fill="#747681"
                    height="22"
                    viewBox="-2 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"
                      className="fill-[#747681] group-hover:fill-white"
                    />
                  </svg>
                </a>
                <ChangeLang></ChangeLang>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden bg-red absolute top-0 h-10 w-full">
            <div className="relative top-0 w-full px-5 lg:px-12 2xl:px-0 pt-6 justify-center box-border flex items-center">
              <div className="gap-[42px] justify-start items-center">
                <div className="flex logo justify-start items-center">
                  <Image
                    className="animate__animated animated flip animate__infinite logo_home dark-version"
                    src={logos.logo_LD}
                    alt="logo"
                    width="20"
                  />
                  <Image
                    className="drk-version"
                    src={logos.logo_luwydyro}
                    alt="logo"
                    width="91"
                  />
                </div>
              </div>
              <MenuMobile></MenuMobile>
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center h-full px-3 sm:px-8 lg:px-12 2xl:px-0">
            <div className="w-full max-w-[1320px] relative rounded-xl lg:rounded-3xl bg-[#121B30] flex items-center h-full">
              <Sidebar></Sidebar>
              <div className="h-full w-full rounded-xl lg:rounded-3xl overflow-hidden">
                <section
                  className="snap-y pl-5 sm:pl-12 xl:pl-[90px] pb-[78px] pr-5 xl:pr-[61px] h-full overflow-x-hidden overflow-y-scroll scroll-smooth"
                  id="main"
                >
                  <div
                    className="snap-start snap-normal slide-sec mx-auto pr-4 sm:pr-6 lg:max-w-7xl lg:pr-8 pt-8 lg:pt-14 pb-20"
                    id="home"
                  >
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                      <div className="lg:col-span-1 head_title_home">
                        <div className="text-3xl lg:text-5xl xl:text-6xl mb-6 sm:mb-11 leading-normal xl:leading-snug font-work text-white ">
                          <p className="text_1 font-bold">{t("Hola, soy")} </p>
                          <p className="xl:text-[68px]">Luwy&nbsp;Dyro</p>
                          <span className="relative">
                            <span className="relative z-20 w-fit">
                              <WordWrapper></WordWrapper>
                            </span>
                          </span>
                        </div>
                        <p className="text-xl lg:text-2xl text-neutral-100 pb-10 text_2">
                          {t("Creativo, Analítico y Calaborativo")}
                        </p>
                        <div className="flex items-center flex-wrap gap-8">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/luwydyrofrontend/"
                            className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-4 rounded-lg inline-flex justify-between items-center"
                          >
                            <p className="text-white">Linkedin&nbsp;</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="18"
                              viewBox="0 0 448 512"
                            >
                              <path
                                className="fill-[#ffffff] group-hover:fill-white"
                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="relative h-full">
                          <div className="relative z-30 pr-5">
                            <Image src={profile.person} alt="" />
                          </div>
                          <ul>
                            <li className="absolute top-56 z-50 hidden lg:block">
                              <div className="relative flex justify-center items-center">
                                <Image
                                  src={profile.w_circle}
                                  className=""
                                  alt=""
                                />
                                <Image
                                  src={profile.text_circle}
                                  className="absolute circle-text"
                                  alt=""
                                />
                                <Image
                                  src={profile.years5}
                                  className="absolute"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className="absolute right-0 -bottom-10 z-50 hidden lg:block moveRightLeftPR">
                              <Image src={profile.customar} alt="Skills" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="snap-start snap-normal slide-sec grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10"
                    id="service"
                  >
                    <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-[10px] shadow-customThree transition-all hover:bg-blue-500 duration-500">
                      <Image src={about.Frame3} alt="" />
                      <h4 className="text-white text-2xl font-semibold mt-3">
                        Dev Front End
                      </h4>
                      <p className="text-indigo-200 text-sm mt-3">
                        SPA, Web Components, SSR, CSR, Angular 19+, NextJS,
                        RxJS, Signals, Hooks
                      </p>
                    </div>
                    <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-[10px] shadow-customThree transition-all hover:bg-blue-500 duration-500">
                      <Image src={about.Frame} alt="" />
                      <h4 className="text-white text-2xl font-semibold mt-3">
                        {t("Microservicios")}
                      </h4>
                      <p className="text-indigo-200 text-sm mt-3">
                        {t(
                          "Colab en diseño e implementación de microservicios"
                        )}
                        , RestFul, Spring Boot, Mysql, SQL Server, MongoDB
                      </p>
                    </div>
                    <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-[10px] shadow-customThree transition-all hover:bg-blue-500 duration-500">
                      <Image src={about.Frame2} alt="" />
                      <h4 className="text-white text-2xl font-semibold mt-3">
                        Ecommerce CMS
                      </h4>
                      <p className="text-indigo-200 text-sm mt-3">
                        SAP Commerce Cloud, Storefront, Woocomerce, Pasarelas de
                        Pago
                      </p>
                    </div>
                    <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-[10px] shadow-customThree transition-all hover:bg-blue-500 duration-500">
                      <Image src={about.Frame4} alt="" />
                      <h4 className="text-white text-2xl font-semibold mt-3">
                        UX Developer
                      </h4>
                      <p className="text-indigo-200 text-sm mt-3">
                        {t("Prototipos")}, design Tinking, Figma, Adobe XD, AI,
                        PSD
                      </p>
                    </div>
                    <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-[10px] shadow-customThree transition-all hover:bg-blue-500 duration-500">
                      <Image src={about.Frame6} alt="" />
                      <h4 className="text-white text-2xl font-semibold mt-3">
                        {t("Metodología Agile")}
                      </h4>
                      <p className="text-indigo-200 text-sm mt-3">
                        Scrum y Kanban - Azure Board, Jira, MS Planner, Notion
                        Trello.
                      </p>
                    </div>
                    <div className="px-7 pt-7 pb-5 bg-[#091530] rounded-[10px] shadow-customThree transition-all hover:bg-blue-500 duration-500">
                      <Image src={about.Frame5} alt="" />
                      <h4 className="text-white text-2xl font-semibold mt-3">
                        E-mailing Marketing
                      </h4>
                      <p className="text-indigo-200 text-sm mt-3">
                        Mailing responsive, SAP Marketing Cloud, Insider,
                        Mailchimp, Hubsport
                      </p>
                    </div>
                  </div>
                  <div
                    className="snap-start snap-normal slide-sec mx-auto lg:max-w-7xl pt-8 lg:pt-[78px] pb-12"
                    id="about"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 xl:gap-24">
                      <div className="lg:w-1/2">
                        <div>
                          <h2 className="uppercase text-lg text-blue-500 font-medium block mb-3">
                            {t("Conóceme")}
                          </h2>

                          <h3 className="text-white font-semibold text-4xl xl:text-5xl xl:leading-snug mb-4">
                            Software Skills
                          </h3>
                          <p className="text-lg text-neutral-100 mb-8">
                            {t(
                              "Estoy utilizando los mejores métodos de diseño líderes en mi trabajo"
                            )}
                            .
                          </p>
                        </div>
                        <div className="mb-10 space-y-4">
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              Angular/NextJs
                            </b>
                            <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              TailwindCSS/Bootstrap/DeysiUI/Material UI/SCSS
                            </b>
                            <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              Post CSS / BEM / OOCSS / SMACSS
                            </b>
                            <div className="w-full h-2 rounded flex items-center overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              RxJS, Signals, Effect, Auth, NgRX
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              Unit Test, Jest, TDD
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              SQL/MySQL/MongoDb/Firestore
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "70%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              PSD/Figma/Illustrator
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              Scrum/Kanban/JIRA/Board Azure
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "95%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              GitHub, GitLab, BitBucket, Docker
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "85%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              EsLint / Prettier / Lighthouse / PageSpeed /
                              BrowserStack
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              Webpack, Module - Vite Federation
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                          </div>

                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              Azure, Render, Vercel, Netlify, Neon Console,
                              Firebase
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "85%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              SAP Commerce Cloud/Composable Store Front
                              (Angular20)
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="relative">
                            <b className="text-lg font-medium text-neutral-100 block mb-3">
                              CMS (WooCommerce – {t("Pasarelas de Pago")})
                            </b>
                            <div className="w-full h-2 flex items-center rounded overflow-hidden growAnimation">
                              <div
                                className="bg-blue-500 h-2 rounded origin-left"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="relative">
                          <Image
                            src={about.dskill}
                            className="relative z-20"
                            alt=""
                          />
                          <ul className="hidden lg:block">
                            {/* Top */}
                            <li className="absolute w-45 xl:w-auto top-280 xl:top-300 left-[0px] xl:-left-[40px] z-30 moveTopBottomPR">
                              <Image
                                src={about.neon_console}
                                alt="Logo Neon Console"
                              />
                            </li>
                            <li className="absolute w-45 xl:w-auto top-270 -right-[10px] z-30 moveRightLeftPR">
                              <Image src={about.vercel} alt="Logo vercel" />
                            </li>
                            <li className="absolute w-45 xl:w-auto top-200 -left-[40px] z-30 moveLeftRightPR">
                              <Image src={about.netlify} alt="Logo netlify" />
                            </li>
                            <li className="absolute w-45 xl:w-auto top-200 right-[10px] xl:-right-[30px]  z-30 moveBottomTopPR">
                              <Image src={about.render} alt="Logo render" />
                            </li>

                            {/* Middle */}
                            <li className="absolute w-48 xl:w-auto -top-[70px] -left-14 z-30 moveRightLeftPR">
                              <Image src={about.SAP_logo} alt="Logo SAP" />
                            </li>
                            <li className="absolute w-56 xl:w-auto -bottom-16 left_8 z-30 moveBottomTopPR">
                              <Image
                                src={about.Databases_logo}
                                alt="Logos Base de Datos"
                              />
                            </li>
                            <li className="absolute w-48 xl:w-auto -top-[70px] -right-7 xl:-right-12 z-30 moveTopBottomPR">
                              <Image
                                src={about.toolDsg}
                                alt="Logos de Edicion"
                              />
                            </li>
                            <li className="absolute w-45 xl:w-auto -bottom-14 -right-6 xl:-right-12 z-30 moveRightLeftPR">
                              <Image
                                src={about.react_next_vite}
                                alt="Logos Framework"
                              />
                            </li>
                            {/* Bottom */}
                            <li className="absolute bottom-200 left-8 xl:left-1/5 z-30 moveLeftRightPR">
                              <Image src={about.ajn} alt="Logo git" />
                            </li>
                            <li className="absolute w-20 xl:w-auto  bottom-330 left_10 z-30 moveTopBottomPR ">
                              <Image src={about.azure} alt="Logo azure" />
                            </li>
                            <li className="absolute w-20 xl:w-24  bottom-330 left-2/5 z-30 moveBottomTopPR">
                              <Image
                                src={about.wordpress_logo}
                                alt="Logo wordpress"
                              />
                            </li>
                            <li className="absolute w-20 xl:w-auto bottom-330 right-[50px] z-30 moveTopBottomPR">
                              <Image src={about.git} alt="Logo git" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="snap-start snap-normal slide-sec mx-auto pt-[38px] lg:max-w-7xl"
                    id="projects"
                  >
                    <div className="pt-[7rem] pb-[5rem]">
                      <div className="max-w-lg mx-auto text-center mb-10">
                        <h2 className="text-5xl font-urbanist text-white font-semibold">
                          {t("Proyectos")}
                        </h2>
                      </div>
                      <SliderProyecto></SliderProyecto>
                    </div>
                    {/* <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <h2 className="uppercase text-lg text-blue-500 font-medium block mb-3">
                          {t('Proyectos')}
                        </h2>
                        <h3 className="text-white font-semibold text-4xl xl:text-5xl xl:leading-snug">
                          {t('Trabajos realizados')}
                        </h3>
                      </div>
                    </div> */}
                    {/* <div className="flex justify-center flex-col  py-5">
                      <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
                        Angular / CSR – SSR
                      </h4>
                      <ProjectsAngular></ProjectsAngular>
                    </div>
                    <div className="flex justify-center flex-col py-5">
                      <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
                        NextJS - React/ CSR – SSR
                      </h4>
                      <ProjectsNext></ProjectsNext>
                    </div>
                    <div className="flex justify-center flex-col pt-5">
                      <h4 className="text-white text-2xl xl:text-3xl xl:leading-snug mb-2">
                        CMS - Ecommerce
                      </h4>
                      <ProjectsCMS></ProjectsCMS>
                    </div> */}

                    <div className="flex justify-center items-center">
                      <Link
                        href={"/proyectos"}
                        className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-4 rounded-lg inline-flex justify-between items-center"
                      >
                        <p className="text-white">
                          {t("Ver todos los Proyectos")}
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="snap-start snap-normal slide-sec mx-auto pt-[38px] lg:max-w-7xl"
                    id="review"
                  >
                    <div className="pt-[7rem] pb-[5rem]">
                      <div className="max-w-lg mx-auto text-center mb-10">
                        <h2 className="text-5xl font-urbanist text-white font-semibold">
                          {t("Empresas")}
                        </h2>
                      </div>
                      <SliderEmpresa></SliderEmpresa>
                    </div>
                  </div>
                  <div
                    className="snap-start snap-normal slide-sec mx-auto pt-8 lg:pt-16 pb-3 lg:max-w-7xl"
                    id="contact"
                  >
                    <div>
                      <h2 className="text-white font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug text-center">
                        {t("Contácteme")}
                      </h2>
                      <h3 className="text-2xl font-medium text-white text-center pb-10">
                        {t("Siéntete libre de contactarme")}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      <div className="w-full h-fit relative group">
                        <div className="px-8 py-10 bg-[#050F25] rounded-lg box-contact">
                          <form>
                            <div className="flex-col gap-x-7 gap-y-5 flex">
                              <div className="text-center flex justify-center">
                                <div className="w-20 h-20 text-center flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.1)] group transition-all icon_contact">
                                  <Image
                                    alt="logo Redes Sociales"
                                    src={icons.IconRrss}
                                  />
                                </div>
                              </div>
                              <div className="head-box-contact">
                                <h4 className="block mb-2 text-2xl font-bold text-center text-neutral-500">
                                  RRSS
                                </h4>
                              </div>
                              <div>
                                <p className="block mb-2 text-base font-medium text-center text-neutral-500">
                                  <a
                                    href="https://Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Instagram
                                  </a>{" "}
                                  -{" "}
                                  <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Twitter
                                  </a>{" "}
                                  -{" "}
                                  <a
                                    href="https://www.linkedin.com/in/luwydyrofrontend/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Linkedin
                                  </a>
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="w-full h-fit relative group">
                        <div className="px-8 py-10 bg-[#050F25] rounded-lg box-contact">
                          <form>
                            <div className="flex-col gap-x-7 gap-y-5 flex">
                              <div className="text-center flex justify-center">
                                <div className="w-20 h-20 text-center flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.1)] group transition-all icon_contact">
                                  <Image
                                    alt="logo correo"
                                    src={icons.IconEmail}
                                  />
                                </div>
                              </div>
                              <div className="head-box-contact">
                                <h4 className="block mb-2 text-2xl font-bold text-center text-neutral-500">
                                  E-mail
                                </h4>
                              </div>
                              <div>
                                <p className="block mb-2 text-base font-medium text-center text-neutral-500">
                                  <a href="mailto:luwy.dyro@gmail.com">
                                    luwy.dyro@gmail.com
                                  </a>
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="w-full h-fit relative group ">
                        <div className="px-8 py-10 bg-[#050F25] rounded-lg box-contact">
                          <form>
                            <div className="flex-col gap-x-7 gap-y-5 flex">
                              <div className="text-center flex justify-center">
                                <div className="w-20 h-20 text-center flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.1)] group transition-all icon_contact">
                                  <Image alt="logo DEV" src={icons.IconDev} />
                                </div>
                              </div>
                              <div className="head-box-contact">
                                <h4 className="block mb-2 text-2xl font-bold text-center text-neutral-500">
                                  DEV
                                </h4>
                              </div>
                              <div>
                                <p className="block mb-2 text-base font-medium text-center text-neutral-500">
                                  <a
                                    href="https://github.com/Luwy-Dyro"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Github
                                  </a>
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterC></FooterC>
    </div>
  );
}

export default App;
