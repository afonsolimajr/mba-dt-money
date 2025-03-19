import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.string(),
  category: z.string(),
  type: z.string(),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export default function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  function handleSearchTransactions(data: NewTransactionFormInputs) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-[var(--card-background-primary-color)] "
        >
          Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[var(--background-color)]">
        <DialogHeader>
          <DialogTitle>Nova Transação</DialogTitle>
          <DialogDescription>Adiciona uma nova transação.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleSearchTransactions)}>
          <div className="flex flex-col w-full gap-5 py-4 ">
            <Input
              id="description"
              type="text"
              defaultValue=""
              placeholder="Descrição"
              className="w-full bg-gray-950 border-none"
              {...register("description")}
            />
            <Input
              id="price"
              type="number"
              defaultValue=""
              placeholder="preço"
              className="w-full bg-gray-950 border-none"
              {...register("price")}
            />
            <Input
              id="category"
              type="text"
              defaultValue=""
              placeholder="Categoria"
              className="w-full bg-gray-950 border-none"
              {...register("category")}
            />
          </div>
          <div className="flex w-full">
            <RadioGroup
              defaultValue="income"
              className="flex w-full items-center justify-center"
              {...register("type")}
            >
              <div className="flex w-full items-center">
                <Label
                  htmlFor="income"
                  className="w-full justify-center bg-gray-800 cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:border-b-green-500 [&:has(:checked)]:border-b-2"
                >
                  <RadioGroupItem
                    value="income"
                    id="income"
                    className="hidden"
                  />
                  <ArrowCircleUp
                    size={24}
                    color="var(--card-background-primary-color)"
                  />
                  Entrada
                </Label>
              </div>
              <div className="flex w-full items-center">
                <Label
                  htmlFor="outcome"
                  className="w-full justify-center bg-gray-800 cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:border-b-green-500 [&:has(:checked)]:border-b-2"
                >
                  <RadioGroupItem
                    value="outcome"
                    id="outcome"
                    className="hidden"
                  />
                  <ArrowCircleDown size={24} color="var(--negative-color)" />
                  Saída
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col w-full gap-5 py-4 ">
            <DialogFooter>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--card-background-primary-color)] w-full"
              >
                Cadastrar
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
