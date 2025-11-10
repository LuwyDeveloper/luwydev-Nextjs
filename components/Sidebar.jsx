"use client"
import { useEffect } from "react";  
import {icons} from "./imagenes";
import Image from "next/image";

export const Sidebar = () => {
  useEffect(() => {
    let useMouseWheel = false;
    const changeActive = function () {
      const sidebarBtns = document.getElementsByClassName("sidebar");
      const location = window.location.hash;

      if (sidebarBtns) {
        for (let i = 0; i < sidebarBtns.length; i++) {
          const id = sidebarBtns[i].attributes.href.value;
          let hoverClass = "";
          let toggleClass = "";
          if (id === location) {
            for (let j = 0; j < sidebarBtns[i].classList.length; j++) {
              if (sidebarBtns[i].classList[j].includes("hover:bg")) {
                hoverClass = sidebarBtns[i].classList[j].replace("hover:", "");
              }
              if (sidebarBtns[i].classList[j].includes("bg")) {
                if (!sidebarBtns[i].classList[j].includes("hover")) {
                  toggleClass = sidebarBtns[i].classList[j];
                }
              }
            }
            if (hoverClass === toggleClass && toggleClass !== "") {
              sidebarBtns[i].classList.toggle(toggleClass);
            } else if (toggleClass !== "") {
              sidebarBtns[i].classList.toggle(toggleClass);
              sidebarBtns[i].classList.toggle(hoverClass);
            } else {
              sidebarBtns[i].classList.toggle(hoverClass);
            }
          } else {
            for (let j = 0; j < sidebarBtns[i].classList.length; j++) {
              if (sidebarBtns[i].classList[j].includes("hover:bg")) {
                hoverClass = sidebarBtns[i].classList[j].replace("hover:", "");
              }
            }
            sidebarBtns[i].classList?.remove(hoverClass);
          }
        }
      }
    };
    window.onhashchange = () => {
      changeActive();
    };

    const mainSection = document.getElementById("main");
    const innerSec = document.querySelectorAll(".slide-sec");
    const navbar = document.querySelectorAll(".nav-bar a");
    const mobileNav = document.querySelectorAll(".mobile-nav a");
    mobileNav.forEach((nav) => {
      nav.addEventListener("click", () => {
        useMouseWheel = false;
      });
    });
    navbar.forEach((nav) => {
      nav.addEventListener("click", () => (useMouseWheel = false));
    });
    mainSection.addEventListener("wheel", () => {
      useMouseWheel = true;
    });
    mainSection.addEventListener("scroll", (event) => {
      let top = mainSection.scrollTop;
      innerSec.forEach((elem) => {
        let offset = elem.offsetTop;
        let height = elem.offsetHeight;
        let id = elem.getAttribute("id");

        if (top + 40 >= offset && top + 40 < offset + height) {
          navbar.forEach((nav) => {
            if (nav.getAttribute("href") === `#${id}`) {
              if (useMouseWheel) {
                window.location.hash = nav.getAttribute("href");
              }
            }
          });
        }
      });
    });
  });
  return (
    <div className="nav-bar w-[60px] xl:w-[92px] -left-[30px] xl:-left-[46px] border-2 rounded-2xl overflow-hidden border-[#293245] absolute bg-[#1E273B] hidden sm:block">
      <a
        href="#home"
        className="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-blue-500 bg-blue-500 border-b-2 border-[#293245]"
      >
        <Image src={icons.home3} alt="" />
      </a>
      <a
        href="#service"
        className="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-blue-500 border-b-2 border-[#293245]"
      >
        <Image src={icons.briefcase} alt="" />
      </a>
      <a
        href="#about"
        className="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-blue-500 border-b-2 border-[#293245]"
      >
        <Image src={icons.skills} alt="" />
      </a>
      <a
        href="#projects"
        className="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-blue-500 border-b-2 border-[#293245]"
      >
        <Image src={icons.archives} alt="" />
      </a>
      <a
        href="#review"
        className="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-blue-500 border-b-2 border-[#293245]"
      >
        <Image src={icons.contact2} alt="" />
      </a>
      <a
        href="#contact"
        className="sidebar w-full h-[60px] xl:h-[92px] flex justify-center items-center hover:bg-blue-500"
      >
        <Image src={icons.clients} alt="" />
      </a>
    </div>
  );
};
