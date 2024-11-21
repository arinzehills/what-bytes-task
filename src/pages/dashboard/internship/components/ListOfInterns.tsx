import React, { useMemo } from "react";
import { Intern } from "../models/intern.model";
import { InternCard } from "./InternCard";

const interns: Intern[] = [
  { id: 1, name: "John Doe", department: "Marketing" },
  { id: 2, name: "Jane Smith", department: "Engineering" },
  { id: 3, name: "Alice Johnson", department: "Human Resources" },
  { id: 4, name: "Bob Brown", department: "Finance" },
];

const InternListPage: React.FC = () => {
  // Use useMemo to prevent re-calculation of the list unless needed
  const memoizedInterns = useMemo(() => interns, []);

  return (
    <div className="p-8 w-screen">
      <h1 className="text-2xl font-bold mb-6">List of Interns at WhatBytes</h1>
      <div className="space-y-4">
        {memoizedInterns.map((intern) => (
          <InternCard
            key={intern.id}
            name={intern.name}
            department={intern.department}
            id={0}
          />
        ))}
      </div>
    </div>
  );
};

export default InternListPage;
