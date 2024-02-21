import prisma from "@/prisma/client";

export default async function getBestProduct(StoreId: string) {
  const res = await prisma.sales.findMany({
    where: {
      storeId: StoreId,
    },
    select: {
      productname: true,
      price: true,
      productId: true,
    },
  });

  const productCounts: { [key: string]: number } = {};

  res.forEach((sale) => {
    const { productId } = sale;
    if (productCounts[productId]) {
      productCounts[productId]++;
    } else {
      productCounts[productId] = 1;
    }
  });

  let maxCount = 0;
  let bestProduct = null;

  for (const productId in productCounts) {
    if (productCounts[productId] > maxCount) {
      maxCount = productCounts[productId];
      bestProduct = productId;
    }
  }

  console.log("Best Product:", bestProduct);
  if (bestProduct === null) return null;
  const fetchProduct = await prisma.products.findUnique({
    where: {
      id: bestProduct,
    },
    select: {
      name: true,
      price: true,
      id: true,
    },
  });
  if (!fetchProduct) return null;
  return fetchProduct;
}
