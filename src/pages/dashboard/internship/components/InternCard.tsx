import { Icon } from "@iconify/react/dist/iconify.js";
import { Intern } from "../models/intern.model";

export const InternCard: React.FC<Intern> = ({ name, department }) => (
  <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
    <div className="mr-4">
      <Icon
        icon="mdi:user"
        className="text-gray-500 w-8 h-8"
        aria-label="User Icon"
      />
    </div>
    <div className="flex flex-col">
      <span className="font-semibold text-lg">{name}</span>
      <span className="text-sm text-gray-500">{department}</span>
    </div>
  </div>
);
