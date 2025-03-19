import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { TransactionsContext } from "@/contexts/TransactionsContext";

export default function TransactionsPanel() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div className="flex flex-col w-full max-w-[1120px] gap-2">
      {transactions.map((transaction) => {
        return (
          <TransactionItem key={transaction.id} transaction={transaction} />
        );
      })}
    </div>
  );
}
