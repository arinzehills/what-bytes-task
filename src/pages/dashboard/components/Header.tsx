import React from "react";
import profileDummy from "../../public/assets/sales2.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = ({ toggleSidebar }: any) => {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-6 border border-gray-200">
      <div className="flex items-center gap-2 justify-center">
        <button
          className="md:hidden  top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-full"
          onClick={toggleSidebar}
        >
          <Icon icon="fa6-solid:bars" />
        </button>
        <h1 className="text-xl sm:text-3xl font-bold text-black">WhatBytes</h1>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={"/images/sales2.jpg"}
          alt="Profile"
          className="w-10 h-10 rounded-full border"
        />
        <span>Rahil Siddique</span>
      </div>
    </div>
  );
};

export default Header;
