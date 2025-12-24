"use client";
import { useRef } from "react";

export default function Modal({ show, onClose, children }) {
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div
    data-component="Modal"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/70 flex justify-center z-50 items-center flex-col-reverse"
    >
      <div
        ref={modalRef}
        className="bg-secondary border border-primary rounded-lg  shadow-lg w-[90%] xl:max-w-[80%] xl:min-h-[480px] max-h-[80vh] not-lg:max-h-[90dvh] overflow-y-auto px-7 py-10 relative flex"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-300 hover:text-white"
        >
          ✖
        </button>
        <div className="grid lg:grid-cols-[1fr_1fr] lg:grid-rows-1 gap-5.5 relative items-center w-full h-full ">
        {children}
        </div>
      </div>
    </div>
  );
}
