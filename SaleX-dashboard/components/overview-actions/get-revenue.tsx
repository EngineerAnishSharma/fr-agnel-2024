import prisma from "@/prisma/client";


export default async function getRevenue(StoreId: string) {
  if (!StoreId) return null;

  const res = await prisma.sales.findMany({
    where:{
      storeId: StoreId
    },
    select:{
      price:true
    }
  })
  if(!res) return null
  const revenue = res.reduce((acc, curr) => acc + Number(curr.price), 0);
  return revenue;
}
