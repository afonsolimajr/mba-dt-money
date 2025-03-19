import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Search() {
  return (
    <div className="flex w-full max-w-[1120px] gap-2">
      <input
        type="text"
        placeholder="Busque uma transação"
        className="w-full bg-gray-950 px-2 rounded"
      />
      <button className="flex items-center gap-2 border-[var(--card-background-primary-color)] border-2 text-[var(--card-background-primary-color)] outline-2 outline-[var(--card-background-primary-color)]">
        <MagnifyingGlass size={32} />
        Buscar
      </button>
    </div>
  );
}
