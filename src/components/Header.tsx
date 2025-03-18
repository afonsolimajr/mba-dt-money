import { HandCoins } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="flex flex-col w-full max-w-[1120px] h-14 bg-gray-950 pt-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3">
          <HandCoins size={32} color="green" />
          <h2>DT Money</h2>
        </div>
        <button className="bg-green-700 ">Nova Transação</button>
      </div>
    </div>
  );
}
