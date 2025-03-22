import { useContext } from "react";
import { Button } from "./ui/button";
import { TransactionsContext } from "@/contexts/TransactionsContext";

export default function PaginationBar() {
  const { activePage, pageCount, goToFirst, goToLast, goToPage } =
    useContext(TransactionsContext);

  function handleFirstPage() {
    goToFirst();
  }

  function handleLastPage() {
    goToLast();
  }

  function handleGoToPage(page: number) {
    goToPage(page);
  }

  function PagesButtons() {
    const counter = [];
    for (let i = 1; i <= pageCount; i++) {
      counter.push(i);
    }

    return counter.map((i) => (
      <Button
        className={
          activePage === i ? `bg-[var(--card-background-primary-color)]` : ""
        }
        onClick={() => {
          handleGoToPage(i);
        }}
      >
        {i}
      </Button>
    ));
  }

  return (
    <div className="flex gap-2">
      <Button onClick={handleFirstPage}>{"<<"}</Button>
      <PagesButtons />
      <Button onClick={handleLastPage}>{">>"}</Button>
    </div>
  );
}
