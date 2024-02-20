"use client";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "../../../../../../components/ui/data-table";
import { WeightColumn, columns } from "./column";
import ApiList from "../../../../../../components/ui/api-list";
import useDevCheckStore from "@/store/dev-check";

type WeightProps = {
  WeigthData: WeightColumn[];
};

const Sizes = ({ WeigthData }: WeightProps) => {
  const router = useRouter();
  const params = useParams();
  const {devMode} = useDevCheckStore();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <Heading
            title={`Weights(${WeigthData.length})`}
            description="Create and manage Weights"
          />
        </div>
        <Button
          onClick={() => {
            router.push(`/${params.StoreId}/sizes/new`);
          }}
          className="gap-x-2 hover:bg-secondary hover:text-primary"
        >
          <Plus className="h-5 w-4" />
          New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={WeigthData} />
      <div className="w-full mt-10 ml-2">
        {devMode && (
          <>
            <Heading
              title={"Api"}
              description="Api's to connected frontend and backend"
            />
            <Separator />
            <ApiList Entityname="sizes" EntityIdname="{SizesId}" />
          </>
        )}
      </div>
    </>
  );
};

export default Sizes;
