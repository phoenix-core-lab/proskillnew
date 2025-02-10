"use client";
import Table, { Column } from "@/components/table/table";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

type Categories = {
  id: string;
  name: string;
  count: number;
};
const CourseCategories = () => {
  const columns: Column<Categories>[] = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Название",
      accessor: "name",
    },
    {
      header: "Количество курсов",
      accessor: "count",
      render: (count) => (
        <div className="text-[#5a9c79] text-center w-[100px]">
            <p>{count}</p>
        </div>
      ),
    },
  ];
  const data: Categories[] = [
    {
      id: "1",
      name: "Frontend",
      count: 10,
    },
    {
      id: "2",
      name: "Backend",
      count: 5,
    },
    {
      id: "3",
      name: "Fullstack",
      count: 3,
    },
  ];
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6 pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Название категории"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
          />
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-[#5a9c79] text-white rounded-lg hover:bg-[#5a9c79]/90 transition-colors">
              Создать
            </button>
          </div>
        </div>
      </div>
      <Table
        columns={columns}
        data={data}
        actions={(row) => (
          <div className="flex justify-end gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
              <Pencil className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default CourseCategories;
