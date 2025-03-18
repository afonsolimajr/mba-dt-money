import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Search from "./components/Search";
import TransactionsPanel from "./components/TransactionsPanel";

function App() {
  const [transactions, setTransactions] = useState([]);

  async function LoadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    LoadTransactions();
  }, []);

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-start w-full h-full gap-2">
        <Background />
        <Search />
        <TransactionsPanel />
      </div>
    </div>
  );
}

export default App;
