"use client";
import React, { useState } from "react";

const Modal = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  return (
    <div>
      <button
        type="button"
        className="bg-gray-900 h-10 rounded-md px-4 text-sm font-medium text-white"
        onClick={handleModal}
      >
        Open Modal
      </button>
      {openModal && (
        <div className="bg-gray-300 fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="max-w-[460px] rounded-md bg-white py-2 shadow-lg">
            <h2 className="text-gray-900 border-gray-300 mb-4 border-b px-4 py-3 text-sm font-medium">
              This is my modal.
            </h2>
            <div className="px-4 pb-4">
              <p className="text-gray-700 text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                quod quis eaque aliquam necessitatibus vel eligendi laboriosam
                optio quisquam sunt.
              </p>
            </div>
            <div className="border-gray-300 flex items-center justify-between border-t px-4 pt-2">
              <div className="text-gray-700 text-sm font-medium">
                Example Content
              </div>
              <button
                type="button"
                className="bg-gray-700 h-8 rounded-md px-2 text-sm text-white"
                onClick={handleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
