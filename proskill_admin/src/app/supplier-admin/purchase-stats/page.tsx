"use client";
import React from "react";
import { Download } from "lucide-react";
import Table, { Column } from "@/components/table/table";
type StatisticEntry = {
  id: number;
  name: string;
  date: string;
  course: string;
  category: string;
};
const columns: Column<StatisticEntry>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Имя",
    accessor: "name",
  },
  {
    header: "Дата",
    accessor: "date",
  },
  {
    header: "Приобретенный курс",
    accessor: "course",
  },
  {
    header: "Категория",
    accessor: "category",
  },
];
const data: StatisticEntry[] = [
  {
    id: 1,
    name: "Имя пользователя",
    date: "2024-02-01",
    course: "Название курса",
    category: "Категория",
  },
  {
    id: 2,
    name: "Имя пользователя",
    date: "2024-02-01",
    course: "Название курса",
    category: "Категория",
  },
  {
    id: 3,
    name: "Имя пользователя",
    date: "2024-02-01",
    course: "Название курса",
    category: "Категория",
  },
];
function PurchaseStatsPage() {
  const handleExportToExcel = () => {
    console.log("Exporting to Excel:", data);
  };
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Таблица со статистикой по покупкам
          </h2>
          <button
            onClick={handleExportToExcel}
            className="px-4 py-2 bg-[#5a9c79] text-white rounded-lg hover:bg-[#5a9c79]/90 transition-colors flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Выгрузить в Excel
          </button>
        </div>
        <Table columns={columns} data={data} />
        <div className="p-4 border-t">
          <p className="text-sm text-gray-600">
            Примечание: сразу после покупки пользователем, в эту таблицу должны
            приходить данные того пользователя - зарегистрированный пользователь
            купил, когда и какой курс.
          </p>
        </div>
      </div>
    </div>
  );
}
export default PurchaseStatsPage;
