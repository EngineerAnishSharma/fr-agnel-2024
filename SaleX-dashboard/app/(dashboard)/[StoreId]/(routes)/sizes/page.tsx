import React from "react";
import prisma from "@/prisma/client";
import Sizes from "./components/Sizes";

const WeightPage = async ({ params }: { params: { StoreId: string } }) => {
  const FindWeight = await prisma.weight.findMany({
    where: {
      StoreId: params.StoreId,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  
  const FilteredData = FindWeight.map((size)=>(
    {
        id:size.id,
        name:size.name,
        value:size.value,
        createdAt:size.createdAt.toLocaleDateString()
    }
  ))
  return (
    <div className="flex flex-col">
      <div className="flex-1 py-6 px-8">
        <Sizes WeigthData={FilteredData}  />
      </div>
    </div>
  );
};

export default WeightPage;