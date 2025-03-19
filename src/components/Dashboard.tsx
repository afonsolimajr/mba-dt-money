import DashboardCard from "./DashboardCard";
import { useSummary } from "@/hooks/useSummary";

export default function Dashboard() {
  const summary = useSummary();

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
