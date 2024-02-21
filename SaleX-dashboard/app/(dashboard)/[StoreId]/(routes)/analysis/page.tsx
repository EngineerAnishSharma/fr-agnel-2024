import React from "react";
import Chart from "./Chart";
import SynchronizedAreaChart from "./SynchronizedAreaChart";
import BarGraphDiagram from "./BarGraphDiagram";
import dynamic from "next/dynamic";
const DynamicPieDiagram = dynamic(() => import("./PieDiagram"), {
  ssr: false,
});
const page = () => {
  return (
    <>
      <div className="w-screen">
        <Chart />
        <SynchronizedAreaChart />
        <BarGraphDiagram data={null} />
        <DynamicPieDiagram />
      </div>
    </>
  );
};

export default page;
