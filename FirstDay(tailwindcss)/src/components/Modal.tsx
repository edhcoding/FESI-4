import { createPortal } from "react-dom";
import React, { useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const ModalHeader = ({
  onClose,
  title,
}: Pick<ModalProps, "onClose" | "title">) => {
  return (
    <header
      className={
        "rounded-t-[inherit] h-7 w-full relative flex items-center justify-center"
      }
    >
      <h1 className={"font-semibold text-lg text-black"}>{title}</h1>
      <button
        onClick={onClose}
        className={
          "absolute right-0 top-0 h-7 text-blue-600 hover:text-blue-700 flex items-center justify-center"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>
  );
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const [animation, setAnimation] = useState<
    "animate-modal-open" | "animate-modal-close"
  >("animate-modal-open");

  const handleClose = () => {
    setAnimation("animate-modal-close");
    setTimeout(() => {
      onClose();
    }, 350);
  };

  const ModalComp = (
    <dialog
      ref={ref}
      open={isOpen}
      id={"modal"}
      className={`absolute left-0 top-0 w-screen h-screen bg-opacity-20 bg-gray-800 ${animation}`}
      onClick={(e) => {
        if (e.target === ref.current) {
          handleClose();
        }
      }}
    >
      <article
        id={"modal-content"}
        className={"fixed left-1/4 top-1/4 w-1/2 h-1/2 bg-white rounded-lg p-5"}
      >
        <ModalHeader onClose={handleClose} title={title} />
        {children}
      </article>
    </dialog>
  );

  return createPortal(ModalComp, document.body);
}
