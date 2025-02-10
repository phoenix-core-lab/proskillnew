import Table, { Column } from "@/components/table/table";
import { Check, X } from "lucide-react";
import React from "react";

type RequestLibrary = {
  id: number;
  date: string;
  book_name: string;
  download_link: () => void;
};
const SupplierRequestLibrary = () => {
  const columns: Column<RequestLibrary>[] = [
    { header: "ID", accessor: "id" },
    { header: "Дата", accessor: "date" },
    { header: "Название книги", accessor: "book_name" },
    {
      header: "Ссылка на скачивание",
      accessor: "download_link",
      render: () => <button>Скачать</button>,
    },
  ];

  const data: RequestLibrary[] = [
    {
      id: 1,
      date: "2023-08-01",
      book_name: "Book 1",
      download_link: () => {},
    },
    {
      id: 2,
      date: "2023-08-01",
      book_name: "Book 2",
      download_link: () => {},
    },
    {
      id: 3,
      date: "2023-08-01",
      book_name: "Book 3",
      download_link: () => {},
    },
    {
      id: 4,
      date: "2023-08-01",
      book_name: "Book 4",
      download_link: () => {},
    },
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Table
        columns={columns}
        data={data}
        title="Заявки на книги"
        actions={() => (
          <div className="flex justify-end gap-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg text-green-600"
              title="Accept"
            >
              <Check className="h-5 w-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-lg text-red-600"
              title="Decline"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default SupplierRequestLibrary;
