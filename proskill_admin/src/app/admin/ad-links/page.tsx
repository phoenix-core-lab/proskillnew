"use client";
import { Upload, Pencil, Trash2 } from "lucide-react";
import React from "react";
import Table, { Column } from "@/components/table/table";

interface AdLink {
  id: string;
  url: string;
  actions?: React.ReactNode;
}

const columns: Column<AdLink>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Ссылка",
    accessor: "url",
  },
  {
    header: "Действия",
    accessor: "actions",
    render: (row) => (
      <div className="flex gap-1">
        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
          <Pencil className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    ),
  },
];

const mockLinks: AdLink[] = [
  { id: "1", url: "https://example.com/product1" },
  { id: "2", url: "https://example.com/product2" },
  { id: "3", url: "https://example.com/product3" },
];

const AdLinks = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Административная панель сайта
        </h2>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Введите ссылку на продукт"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Загрузка фото для десктоп версии
              </p>
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Загрузка фото для мобильной версии
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-[#5a9c79] text-white rounded-lg hover:bg-[#5a9c79]/90 transition-colors">
              Сохранить
            </button>
          </div>
        </div>
      </div>
      <Table columns={columns} data={mockLinks} title="Ссылки на продукты" />
    </div>
  );
};

export default AdLinks;
