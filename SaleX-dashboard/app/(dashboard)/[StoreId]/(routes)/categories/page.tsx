import React from "react";

import prisma from "@/prisma/client";
import Categories from "./components/Categories";

const CategoriesPage = async ({ params }: { params: { StoreId: string } }) => {
  const FindCategories = await prisma.categories.findMany({
    where: {
      StoreId: params.StoreId,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  
  const FilteredData = FindCategories.map((cat)=>(
    {
        id:cat.id,
        name:cat.name,
        createdAt:cat.createdAt.toLocaleDateString()
    }
  ))
  return (
    <div className="flex flex-col">
      <div className="flex-1 py-6 px-8">
        <Categories CategoriesData={FilteredData}  />
      </div>
    </div>
  );
};

export default CategoriesPage;