"use client";
import { ColumnDef } from "@tanstack/react-table";
import CellActions from "./Cell-Actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type FilteredDataProps = {
  id: string;
  name: string;
  price: string;
  archived: boolean;
  featured: boolean;
  expiryData:number;
  categoryname: string;
  size: string;
  color: string;
  quantity:number;
  storeId: string;
  createdAt: string;
  ImageUrl:string
};


export const columns: ColumnDef<FilteredDataProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "size",
    header: "Weight",
  },
  {
    accessorKey: "categoryname",
    header: "Category",
  },
  {
    accessorKey:'quantity',
    header:'Quantity'
  },
  {
    accessorKey: "expiryData",
    header: "Expiry Date(in months)",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        ></div>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];
