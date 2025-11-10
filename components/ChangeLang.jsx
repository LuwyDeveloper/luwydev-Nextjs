import Image from "next/image";
import { useState } from "react";
import { icons } from "@/components/Imagenes";
import { useLocale } from "@/context/LocaleContext";

export const ChangeLang = () => {
  const [showLang, setShowLang] = useState(false);
  const { setLocale } = useLocale();
  const changeLanguage = (lng) => {
    setLocale(lng);
    setShowLang(false);
  };

  const toggleLang = () => {
    setShowLang(!showLang);
  };

  return (
    <div className="relative text-white">
      <button
        onClick={toggleLang}
        href="https://github.com/Luwy-Dyro"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex justify-center items-center rounded-lg bg-[rgba(255,255,255,0.1)] group transition-all hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" hover:text-white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#747681"
          fill="none"
        >
          <path
            d="M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
      {showLang && (
        <ul className="absolute z-50 mt-1 p-2 right-0 w-34 bg-[#0a1a33] rounded-lg shadow-lg border border-gray-700 ">
          <li
            className="py-1 px-1.5 flex flex-row gap-2 hover:bg-gray-700 rounded-lg cursor-pointer text-sm"
            onClick={() => changeLanguage("es")}
          >
            <Image alt="Espanol" src={icons.spain} /> Español
          </li>
          <li
            className="py-1 px-1.5 flex flex-row gap-2 hover:bg-gray-700 rounded-lg cursor-pointer text-sm"
            onClick={() => changeLanguage("en")}
          >
            <Image alt="Ingles" src={icons.usa} /> English
          </li>
        </ul>
      )}
    </div>
  );
};
