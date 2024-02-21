import prisma from "@/prisma/client";


export default async function getSales(StoreId: string) {
  if (!StoreId) return null;


  const res = await prisma.sales.findMany({
    where: {
      storeId: StoreId
    },
  })
  return res.length;
}
