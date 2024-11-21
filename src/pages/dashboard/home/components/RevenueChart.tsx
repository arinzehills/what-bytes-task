"use client";
import React from "react";
import Chart from "react-apexcharts";

const RevenueChart = () => {
  const series = [
    {
      name: "Senior Employees",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Interns",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Junior Employees",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="w-full">
      <div className="bg-white  rounded-lg overflow-hidden p-2">
        <div className="px-4 py-2 bg-gray-100 text-gray-800 font-semibold">
          Employees Summary
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
