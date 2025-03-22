import "./App.css";
import Background from "./components/Background";
import PaginationBar from "./components/PaginationBar";
import Search from "./components/Search";
import TransactionsPanel from "./components/TransactionsPanel";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-start w-full h-full gap-2">
        <Background />
        <Search />
        <TransactionsPanel />
        <PaginationBar />
      </div>
    </div>
  );
}

export default App;
