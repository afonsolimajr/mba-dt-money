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

export default function NewTransactionModal() {
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
        <div className="flex flex-col w-full gap-5 py-4 ">
          <Input
            id="description"
            defaultValue=""
            placeholder="Descrição"
            className="w-full bg-gray-950 border-none"
          />
          <Input
            id="price"
            defaultValue=""
            placeholder="preço"
            className="w-full bg-gray-950 border-none"
          />
          <Input
            id="category"
            defaultValue=""
            placeholder="Categoria"
            className="w-full bg-gray-950 border-none"
          />
        </div>
        <div className="flex w-full">
          <RadioGroup
            defaultValue="option-one"
            className="flex w-full items-center justify-center"
          >
            <div className="flex w-full items-center">
              <Label
                htmlFor="option-one"
                className="w-full justify-center bg-gray-800 cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-zinc-100 dark:[&:has(:checked)]:bg-zinc-800"
              >
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
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
                htmlFor="option-two"
                className="w-full justify-center bg-gray-800 cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-zinc-100 dark:[&:has(:checked)]:bg-zinc-800"
              >
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="hidden"
                />
                <ArrowCircleDown size={24} color="var(--negative-color)" />
                Saída
              </Label>
            </div>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-[var(--card-background-primary-color)] w-full"
          >
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
