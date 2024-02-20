import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { StoreId: string } }
) {
  try {
    if (!params.StoreId)
      return new NextResponse("Store id is required", { status: 400 });
    const products = await prisma.products.findMany({
      where: {
        StoreId: params.StoreId,
      },
      select: {
        name: true,
      },
    });
    return NextResponse.json(products);
  } catch (err) {
    console.log("PRODUCT_GET", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
