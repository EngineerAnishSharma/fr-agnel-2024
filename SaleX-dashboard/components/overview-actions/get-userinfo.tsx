import prisma from "@/prisma/client";

import { Data } from "../ui/recent-sales";

export default async function getUserinfo(StoreId: string) {
  if (!StoreId) return null;
  const res = await prisma.sales.findMany({
    where: {
      id: StoreId,
    },
    select: {
      productname: true,
      price: true,
      productId:true
    },
    take: 5,
  });
  if (!res) return null;
  const userData = res.map((data) => ({
    id: data.productId,
    name: data.productname,
    price: data.price as unknown as number,
  }));
  if (!userData) return null;

  return userData;
}
