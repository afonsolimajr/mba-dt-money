import { Transaction } from "@/interfaces/Transaction.interface";
import { formatMoney } from "@/utils/NumberUtil";

export default function TransactionItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <div className="flex w-full justify-between gap-2 bg-gray-900 px-8 py-4 rounded">
      <span className="">{transaction.description}</span>
      <span className="text-green-900 font-bold">
        {formatMoney(transaction.price)}
      </span>
      <span className="">{transaction.category}</span>
      <span className="">{new Date(transaction.createdAt).toISOString()}</span>
    </div>
  );
}
