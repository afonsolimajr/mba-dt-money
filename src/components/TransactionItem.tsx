export default function TransactionItem() {
  return (
    <div className="flex w-full justify-between gap-2 bg-gray-900 px-8 py-4 rounded">
      <span className="">Descricao</span>
      <span className="text-green-900 font-bold">R$ 1.234,56</span>
      <span className="">Origem</span>
      <span className="">00/00/0000</span>
    </div>
  );
}
