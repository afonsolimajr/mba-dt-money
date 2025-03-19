import { useContext } from "react";
import DashboardCard from "./DashboardCard";
import { TransactionsContext } from "@/contexts/TransactionsContext";

export default function Dashboard() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return (
    <div className="flex flex-col w-full max-w-[1120px] h-32 ">
      <div className="flex w-full h-16 items-center justify-between gap-5 ">
        <DashboardCard type="IN" value={summary.income} />
        <DashboardCard type="OUT" value={summary.outcome} />
        <DashboardCard type="TOT" value={summary.total} />
      </div>
    </div>
  );
}
