import Dashboard from "./Dashboard";
import Header from "./Header";

export default function Background() {
  return (
    <div className="flex flex-col w-full items-center gap-10">
      <div className="flex flex-col w-full h-48 items-center pt-5 bg-[var(--background-color)]">
        <Header />
      </div>
      <div className="flex flex-col items-center w-full -mt-20">
        <Dashboard />
      </div>
    </div>
  );
}
