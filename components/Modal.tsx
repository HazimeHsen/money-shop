// Modal.js
import React, { ReactNode } from "react";

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
      <div
        onClick={onClose}
        className="fixed inset-0  flex items-center justify-center bg-black h-screen bg-opacity-50 z-0"></div>
      <div className="bg-white p-5 max-w-md mx-auto rounded-lg shadow-lg z-50 space-y-2">
        <div className="mt-4">{children}</div>
        <div className="block">
          <button
            type="button"
            onClick={onClose}
            className="Button block w-full">
            <span className="">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
