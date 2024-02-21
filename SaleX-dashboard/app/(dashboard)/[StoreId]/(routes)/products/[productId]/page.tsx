import prisma from "@/prisma/client";
import {ProductForm} from "./components/product-form";

const ProductIdPage = async ({
  params,
}: {
  params: { productId: string; StoreId: string };
}) => {
  const product = await prisma.products.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      Image: true,
    },
  });

  const sizes = await prisma.weight.findMany({
    where: {
      StoreId: params.StoreId,
    },
  });
  const categories = await prisma.categories.findMany({
    where: {
      StoreId: params.StoreId,
    },
  });
  const colors = await prisma.colors.findMany({
    where: {
      StoreId: params.StoreId,
    },
  });
  const expiryDate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 18, 24, 36].map(String);
  return (
    <div className="flex flex-col ">
      <div className="flex-1 px-8 py-6">
        <ProductForm initialData={product} colors={colors} sizes={sizes} categories={categories} expiryDate={expiryDate} />
      </div>
    </div>
  );
};

export default ProductIdPage;
