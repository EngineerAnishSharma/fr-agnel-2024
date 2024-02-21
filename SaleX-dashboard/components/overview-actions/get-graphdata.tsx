import prisma from "@/prisma/client";

type GraphData = {
  name: string;
  total: number;
};

export default async function getGraphData(StoreId: string) {
 
  if (!StoreId) return null;
 
  // const paidOrders = await prisma.order.findMany({
  //   where: {
  //     StoreId,
  //     isPaid: true,
  //   },
  //   include: {
  //     orderItems: {
  //       include: {
  //         product: true,
  //       },
  //     },
  //   },
  // });
  const paidSales = await prisma.sales.findMany({
    where: {
      storeId: StoreId,
    },
    include:{
      Products:{
        select:{
          price:true,
          createdAt:true,
          
        }
      }
    }
  });
  const monthlyRevenue: { [key: number]: number } = {};
  for (const sale of paidSales) {
    const month = sale.Products.createdAt.getMonth(); // Add 1 to get the correct month value
    const revenueForSale = Number(sale.Products.price);
    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForSale;
  }
  const data: GraphData[] = [
    {
      name: "Jan",
      total: 0,
    },
    {
      name: "Feb",
      total: 0,
    },
    {
      name: "Mar",
      total: 0,
    },
    {
      name: "Apr",
      total: 0,
    },
    {
      name: "May",
      total: 0,
    },
    {
      name: "Jun",
      total: 0,
    },
    {
      name: "Jul",
      total: 0,
    },
    {
      name: "Aug",
      total: 0,
    },
    {
      name: "Sep",
      total: 0,
    },
    {
      name: "Oct",
      total: 0,
    },
    {
      name: "Nov",
      total: 0,
    },
    {
      name: "Dec",
      total: 0,
    },
  ];
  for (const month in monthlyRevenue) {
    data[parseInt(month)].total = monthlyRevenue[parseInt(month)];
  }
  return data;
}
