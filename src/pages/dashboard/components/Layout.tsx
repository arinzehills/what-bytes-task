"use client";
import React, { useState } from "react";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-row flex-1 bg-gray-50">
        <Sidebar isOpen={isOpen} />
        <main className="p-6 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
