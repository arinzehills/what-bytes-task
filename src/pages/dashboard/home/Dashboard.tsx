"use client";
import { ComparisonGraph } from "../components/ComparisonGraph";
import Layout from "../components/Layout";
import { Icon } from "@iconify/react/dist/iconify.js";
import DashboardCard from "./components/DashboardCard";
import RevenueChart from "./components/RevenueChart";

const Dashboard = () => {
  const cards = [
    {
      icon: {
        icon: <Icon icon="mdi:account-student" />,
        gradient: "rgba(255, 153, 0, 0.5)",
      },
      name: "Total Employees",
      value: "339",
      percentage: 70,
    },
    {
      icon: {
        icon: <Icon icon="mdi:account-student" />,
        gradient: "rgba(0, 153, 255, 0.5)",
      },
      name: "Senior Employees",
      value: "12",
      percentage: 50,
    },
    {
      icon: {
        icon: <Icon icon="mdi:account-student" />,
        gradient: "rgba(255, 102, 102, 0.5)",
      },
      name: "Junior Employees",
      value: "opds",
      percentage: 30,
    },
    {
      icon: {
        icon: <Icon icon="mdi:account-student" />,
        gradient: "rgba(51, 204, 153, 0.5)",
      },
      name: "Executives",
      value: "3",
      percentage: 9,
    },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div>
          <div className="flex flex-wrap">
            {cards.map((card, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                <DashboardCard {...card} />
              </div>
            ))}
          </div>
          <RevenueChart />
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h1 className="text-3xl font-bold">More Info</h1>
          <p>This dashboard shows a total number of Employees in WhatBytes</p>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Dashboard;
