import TransactionItem from "./TransactionItem";

export default function TransactionsPanel() {
  return (
    <div className="flex flex-col w-full max-w-[1120px] gap-2">
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </div>
  );
}
