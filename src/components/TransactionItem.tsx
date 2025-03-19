import { Transaction } from "@/interfaces/Transaction.interface";
import { formatDateShort } from "@/utils/DateUtil";
import { formatMoney } from "@/utils/NumberUtil";

export default function TransactionItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  let color = "";
  let price = "";

  switch (transaction.type) {
    case "income":
      color = "text-[var(--card-background-primary-color)]";
      price = formatMoney(transaction.price);
      break;
    case "outcome":
      color = "text-[var(--negative-color)]";
      price = formatMoney(transaction.price * -1);
      break;
  }

  return (
    <div className="flex w-full justify-between gap-2 bg-[var(--card-background-secondary-color)] px-8 py-4 rounded">
      <span className="w-full text-start">{transaction.description}</span>
      <span
        className={`w-full text-end ${color} text-[var(--card-background-primary-color)] font-bold`}
      >
        {price}
      </span>
      <span className="w-full">{transaction.category}</span>
      <span className="w-full">
        {formatDateShort(new Date(transaction.createdAt))}
      </span>
    </div>
  );
}
