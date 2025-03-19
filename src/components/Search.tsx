import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export default function Search() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex w-full max-w-[1120px] gap-2"
    >
      <input
        type="text"
        placeholder="Busque uma transação"
        className="w-full bg-gray-950 px-2 rounded"
        {...register("query")}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center gap-2 border-[var(--card-background-primary-color)] border-2 text-[var(--card-background-primary-color)] outline-2 outline-[var(--card-background-primary-color)]"
      >
        <MagnifyingGlass size={32} />
        Buscar
      </button>
    </form>
  );
}
