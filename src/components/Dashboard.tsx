import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full max-w-[1120px] h-32 ">
      <div className="flex w-full h-16 items-center justify-between gap-5 ">
        <DashboardCard type="IN" value={1245.67} />
        <DashboardCard type="OUT" value={1245.67} />
        <DashboardCard type="TOT" value={1245.67} />
      </div>
    </div>
  );
}
