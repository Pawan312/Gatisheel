import React from "react";
import Scard from "./Scard";
import Mcard from "./Mcard";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <>
    <SideBar/>
    <div className="flex flex-col ml-[17.7vw]">
      <div className=" px-9 py-[13vh] flex flex-wrap gap-5">
        <Scard />
        <Scard />
        <Scard />
        <Scard />
        <Mcard />
        <Mcard />
        <Mcard />
      </div>
      <div>
        <div className="w-[40vw] p-9">
          <Line
            data={{
              labels: ["23 Nov", "24", "25", "26", "27", "28", "29", "30"],
              datasets: [
                {
                  label: "My First dataset",
                  data: [0, 3, 11, 10, 56, 55, 40],
                  fill: false,
                  backgroundColor: "rgb(255, 99, 132)",
                  borderColor: "rgba(255, 99, 132, 0.2)",
                },
              ],
            }}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="bg-red-300"></div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
