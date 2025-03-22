/* eslint-disable react-hooks/exhaustive-deps */
import { Transaction } from "@/interfaces/Transaction.interface";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => void;
  createTransaction: (transaction: Transaction) => void;
  activePage: number;
  goToFirst: () => void;
  goToLast: () => void;
  goToPage: (page: number) => void;
  pageCount: number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const limit = 5;

  async function fetchTransactions(query?: string) {
    let url = `http://localhost:3333/transactions?_page=${activePage}&_limit=5&_sort=createdAt&_order=desc`;

    if (query) url += "&description_like=" + query;

    const response = await fetch(url);
    const data = await response.json();

    const xTotal = response.headers.get("X-Total-Count");

    const totalRecords = xTotal == null ? 1 : Number.parseInt(xTotal);
    let totalPages = Math.trunc(totalRecords / limit);
    if (totalRecords % limit > 0) {
      totalPages += 1;
    }

    setMaxPage(totalPages);

    setTransactions(data);
  }

  async function createTransaction(transaction: Transaction) {
    const url = "http://localhost:3333/transactions";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const data = await response.json();

    setTransactions(data);
  }

  function goToFirst() {
    setActivePage(1);
  }

  function goToLast() {
    setActivePage(pageCount);
  }

  function goToPage(page: number) {
    setActivePage(page);
  }

  function pageCount(): number {
    return maxPage;
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [activePage]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions: transactions,
        fetchTransactions,
        createTransaction,
        activePage,
        pageCount: maxPage,
        goToFirst,
        goToLast,
        goToPage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
