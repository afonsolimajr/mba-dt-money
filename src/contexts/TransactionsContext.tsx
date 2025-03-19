import { Transaction } from "@/interfaces/Transaction.interface";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function LoadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    LoadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions: transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
