import React from "react";
import Chart from "./Chart";
import dynamic from "next/dynamic";
import CardForBest from "@/components/ui/best-cards";
import getBestProduct from "@/components/overview-actions/fetchbestProduct";
const DynamicPieDiagram = dynamic(() => import("./PieDiagram"), {
  ssr: false,
});
const page = async() => {
  const bestProduct = await getBestProduct('clsu746eh0000vtp4k0p9r7bw')
  return (
    <>
      <div className="w-screen">
        <div className="space-x-2 items-center justify-center space-y-2 ">
          <CardForBest title={'Best Product'} description="most selling product" name={bestProduct?.name || ''} price={bestProduct?.price as unknown as number || 0}/>
          <CardForBest title={'Best Seasonal Product'} description="most selling products for summers" name={'Computer'} price={83000}/>
          <CardForBest title={'Best profitable product'} description="highest profit margin" name="basketball" price={1500}/>
        </div>
        <Chart />
        <div className="flex  items-center justify-center">
        <DynamicPieDiagram />
        <h1>Best Seasonal Sales</h1>
        </div>
      </div>
    </>
  );
};

export default page;
