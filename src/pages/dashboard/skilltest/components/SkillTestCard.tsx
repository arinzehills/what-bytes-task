"use client";
import AnimatedModal from "@/components/AnimatedModal";
import UpdateScoreForm from "../../components/UpdateScoreForm";
import { useState } from "react";

export const SkillTestCard = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <AnimatedModal openModal={openModal} setOpenModal={setOpenModal}>
        <UpdateScoreForm setOpenModal={setOpenModal} />
      </AnimatedModal>
      <div className="bg-white border border-gray-200 p-4 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <div className="gap-8 flex items-center justify-center">
            <div>
              <img
                src={"/images/html.png"}
                alt="Profile"
                className="w-20 h-20 "
              />
            </div>
            <div>
              <h2 className="font-bold text-lg">Hyper Text Markup Language</h2>
              <p className="text-md font-medium text-gray-500">
                Questions: 08 | Duration: 15 mins Submitted on 5 June 2021
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="bg-blue-900 hover:bg-blue-600 font-bold text-white px-4 py-2 rounded border border-black"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
