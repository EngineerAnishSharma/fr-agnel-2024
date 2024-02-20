import prisma from "@/prisma/client";

import WeightForm from "./components/sizes-form";

const WeightIDPage = async ({ params }: { params: { sizesId: string } }) => {
  const weights = await prisma.weight.findUnique({
    where: {
      id: params.sizesId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <WeightForm initialdata={weights} />
      </div>
    </div>
  );
};

export default WeightIDPage;
