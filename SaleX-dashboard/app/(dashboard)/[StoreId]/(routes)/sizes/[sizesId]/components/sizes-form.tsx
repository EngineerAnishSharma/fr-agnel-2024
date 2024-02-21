"use client";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Trash, Trash as TrashIcon } from "lucide-react";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Weight } from "@prisma/client";
import { AlertModal } from "../../../../../../../components/modals-and-nav/Alert-modal";

type SizesFormProps = {
  initialdata: Weight | null;
};
const formSchema = z.object({
  name: z.string().min(1),
  value: z.string().min(1),
});

const WeightForm = ({ initialdata }: SizesFormProps) => {
  const title = initialdata ? "Edit weight" : "Create weight";
  const description = initialdata
    ? "Edit the properties of a weight"
    : "Add a new weight";
  const buttontag = initialdata ? "Change" : "Create";
  const toastMsg = initialdata ? "Edited the weight" : "Added new weight";

  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialdata || {
      name: "",
      value: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setloading(true);
      if (initialdata) {
        await axios.patch(
          `/api/${params.StoreId}/sizes/${params.sizesId}`,
          values
        );
      } else {
        await axios.post(`/api/${params.StoreId}/sizes`, values);
      }
      toast.success(toastMsg);
      router.refresh();
      router.push(`/${params.StoreId}/sizes`);
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      setloading(false);
    }
  };

  const Handledelete = async () => {
    try {
      setloading(true);
      await axios.delete(`/api/${params.StoreId}/sizes/${params.sizesId}`);
      toast.success("weight successfully deleted");
      router.refresh();
      router.push(`/${params.StoreId}/sizes`);
    } catch (err) {
      toast.error(
        "Please delete all the categories before deleting this first"
      );
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={Handledelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialdata && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="weight name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value(In Kilograms)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="weight value(in kgs)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {buttontag}
          </Button>
        </form>
      </Form>
      <Separator className="mx-6 mt-2 " />
    </>
  );
};

export default WeightForm;
