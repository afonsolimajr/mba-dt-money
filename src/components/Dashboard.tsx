export default function Dashboard() {
  return (
    <div className="flex flex-col w-full max-w-[1120px] h-32 ">
      <div className="flex w-full h-16 items-center justify-between gap-5 ">
        <div className="flex flex-col h-36 items-start justify-evenly p-4 bg-gray-700 text-white w-full">
          <p>Entradas</p>
          <h2>R$ 1.234,56</h2>
        </div>
        <div className="flex flex-col h-36 items-start justify-evenly p-4 bg-gray-700 text-white w-full">
          <p>Saídas</p>
          <h2>R$ 1.234,56</h2>
        </div>
        <div className="flex flex-col h-36 items-start justify-evenly p-4 bg-green-700 text-white w-full">
          <p>Total</p>
          <h2>R$ 1.234,56</h2>
        </div>
      </div>
    </div>
  );
}
