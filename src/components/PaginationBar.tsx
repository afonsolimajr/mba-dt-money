import { useContext } from "react";
import { Button } from "./ui/button";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

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
          activePage === i
            ? `bg-[var(--card-background-primary-color)]`
            : `bg-[var(--card-background-secondary-color)]`
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
      <Button onClick={handleFirstPage}>
        <CaretLeft
          size={32}
          weight="bold"
          color={
            activePage == 1
              ? "var(--card-background-secondary-color)"
              : "var(--card-background-primary-color)"
          }
        />
      </Button>
      <PagesButtons />
      <Button onClick={handleLastPage}>
        <CaretRight
          size={32}
          weight="bold"
          color={
            activePage == pageCount
              ? "var(--card-background-secondary-color)"
              : "var(--card-background-primary-color)"
          }
        />
      </Button>
    </div>
  );
}
