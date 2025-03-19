import { formatMoney } from "@/utils/NumberUtil";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";

export default function DashboardCard({
  type,
  value,
}: {
  type: "IN" | "OUT" | "TOT";
  value: number;
}) {
  let bgColor = "bg-[var(--card-background-secondary-color)]";
  let title = "Entradas";
  let icon = (
    <ArrowCircleUp size={32} color="var(--card-background-primary-color)" />
  );

  switch (type) {
    case "IN":
      break;
    case "OUT":
      title = "Saídas";
      icon = <ArrowCircleDown size={32} color="var(--negative-color)" />;
      break;
    case "TOT":
      title = "Total";
      icon = <CurrencyDollar size={32} color="white" />;
      bgColor = "bg-[var(--card-background-primary-color)]";
      break;
  }

  return (
    <div
      className={`flex flex-col h-36 items-start justify-evenly px-4 ${bgColor} text-white w-full rounded`}
    >
      <div className="flex w-full items-center justify-between">
        <p>{title}</p>
        {icon}
      </div>
      <h2>{formatMoney(value)}</h2>
    </div>
  );
}
