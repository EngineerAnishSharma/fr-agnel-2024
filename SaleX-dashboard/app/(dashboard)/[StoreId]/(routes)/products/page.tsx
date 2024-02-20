import React from "react";
import prisma from "@/prisma/client";
import { formatter } from "@/lib/utils";
import Products from "./components/products";

const BillboardPage = async ({ params }: { params: { StoreId: string } }) => {
  const FindProduct = await prisma.products.findMany({
    where: {
      StoreId: params.StoreId,
    },
    include: {
      categories: true,
      color: true,
      weight: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
// name, price, CategoriesId, Image, colorId, sizesId, Featured, Archived
  const FilteredData = FindProduct.map((product) => ({
    id: product.id,
    name: product.name,
    price: formatter.format(product.price.toNumber()),
    archived: product.Archived,
    featured: product.Featured,
    categoryname: product.categories.name,
    size: product.weight.name,
    color: product.color.value,
    expiryData: product.expiryDate,
    quantity:product.quantity,
    createdAt: product.createdAt.toLocaleDateString(),
  }));
  return (
    <div className="flex flex-col">
      <div className="flex-1 py-6 px-8">
        <Products ProductsData={FilteredData} />
      </div>
    </div>
  );
};

export default BillboardPage;
