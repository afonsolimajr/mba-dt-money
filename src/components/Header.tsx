import { HandCoins } from "@phosphor-icons/react";
import NewTransactionModal from "./NewTransactionModal";

export default function Header() {
  return (
    <div className="flex flex-col w-full max-w-[1120px] h-14 bg-gray-950 pt-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3 items-center">
          <HandCoins size={32} color="green" />
          <h2>DT Money</h2>
        </div>
        <NewTransactionModal />
      </div>
    </div>
  );
}
