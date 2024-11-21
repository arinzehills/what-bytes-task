import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const [selectedLink, setSelectedLink] = useLocalStorage<string>(
    "selected-sidebar-name",
    ""
  );
  const menuItems = [
    {
      url: "/dashboard",
      icon: "uis:analytics",
      label: "Dashboard",
    },
    {
      url: "/dashboard/skilltest",
      icon: "gg:awards",
      label: "Skill Test",
    },
    {
      url: "/dashboard/internship",
      icon: "material-symbols-light:on-device-training-outline-rounded",
      label: "Internship",
    },
  ];
  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100  z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 w-64`}
      >
        <nav className="w-64 h-screen bg-white p-4 border border-gray-200">
          <ul className="font-bold ">
            {menuItems?.map((link: any, index: number) => (
              <li
                className={`mb-4 p-4 ${
                  selectedLink === link.url &&
                  "bg-blue-50 text-blue-600 rounded-full"
                }`}
              >
                <Link
                  href={link.url}
                  onClick={() => handleLinkClick(link.url)}
                  className="flex items-center font-semibold gap-x-4"
                >
                  <span>
                    <Icon icon={link.icon} />
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
