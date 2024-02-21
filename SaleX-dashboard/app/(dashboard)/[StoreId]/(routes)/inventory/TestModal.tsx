import React, { useState } from "react";

const TestModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    // Handle confirm logic here
    console.log("Confirmed!");
    closeModal();
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log("Cancelled!");
    closeModal();
  };

  return (
    <div>
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={openModal}
      >
        Toggle modal
      </button>
      <div className="">
        <div
          id="popup-modal"
          tabIndex={-1}
          className={`${
            isModalOpen ? "fixed" : "hidden"
          } overflow-hidden overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  h-screen bg-gray-800 bg-opacity-50`}
        >
          <div className="h-screen flex justify-center items-center p-4 w-full ">
            <div className=" bg-white rounded-lg  backdrop-blur shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4  justify-center items-center md:p-5 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <div className="flex max-w-4xl mx-auto flex-col gap-4 py-4 justify-center items-center">
                  <input
                    type="text"
                    className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                    placeholder="Enter shelf name"
                  />
                  <input
                    type="text"
                    className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                    placeholder="Enter shelf name"
                  />
                  <input
                    type="text"
                    className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                    placeholder="Enter shelf name"
                  />
                  <input
                    accept="image/*"
                    className="target py-1 m-2 bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                    placeholder="Enter image url"
                    type="file"
                  />
                  <input
                    type="text"
                    className="bg-[#f2f4f6] w-full placeholder:text-zinc-500 px-4 h-10 rounded-sm border border-zinc-200"
                    placeholder="Enter shelf name"
                  />
                </div>

                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={handleConfirm}
                >
                  Yes, I&apos;m sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={handleCancel}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestModal;
