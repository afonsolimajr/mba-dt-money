import { Transaction } from "@/interfaces/Transaction.interface";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => void;
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    let url = "http://localhost:3333/transactions";

    if (query) url += "?description_like=" + query;

    const response = await fetch(url);
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions: transactions, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
