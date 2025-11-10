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
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
    >
      <div
        ref={modalRef}
        className="flex flex-col md:flex-row items-center gap-5.5 bg-secondary border border-primary rounded-lg shadow-lg w-[90%] xl:w-[988px] xl:min-h-[480px] px-7 py-10 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-300 hover:text-white"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
