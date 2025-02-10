import React from "react";
import { Pencil, Trash2, Upload } from "lucide-react";
import Table, { Column } from "@/components/table/table";
import SwitchForm from "@/components/form/switch-form";
type Course = {
  id: number;
  name: string;
  status: "Одобрено" | "Отклонено";
};
const columns: Column<Course>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Название курса",
    accessor: "name",
  },
  {
    header: "Статус",
    accessor: "status",
    render: (value) => (
      <span
        className={`px-2 py-1 rounded text-sm ${
          value === "Одобрено"
            ? "bg-green-50 text-green-700"
            : "bg-red-50 text-red-700"
        }`}
      >
        {value}
      </span>
    ),
  },
];
const courseData: Course[] = [
  {
    id: 1,
    name: "Название курса",
    status: "Одобрено",
  },
  {
    id: 2,
    name: "Название курса",
    status: "Отклонено",
  },
  {
    id: 3,
    name: "Название курса",
    status: "Одобрено",
  },
];
function CoursesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <SwitchForm />
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Название курса"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Автор курса"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Описание курса"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Длительность"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Цена курса"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Фантомная цена"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Загрузить фото для главной страницы
                <br />
                (Маленький формат)
              </p>
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Загрузить фото для отображения в личном кабинете и в
                <br />
                отлеживание прохождения курсов
                <br />
                (Большой формат)
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-[#5a9c79] text-white rounded-lg hover:bg-[#5a9c79]/90 transition-colors">
              Создать
            </button>
            <button className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
              Отмена
            </button>
          </div>
        </div>
      </div>
      <Table
        title="Таблица созданных курсов"
        columns={columns}
        data={courseData}
        actions={(row) => (
          <div className="flex justify-end gap-2">
            <button className="px-4 py-1 text-sm border rounded hover:bg-gray-50">
              Изменить
            </button>
            <button className="px-4 py-1 text-sm border rounded hover:bg-gray-50 text-red-600">
              Удалить
            </button>
          </div>
        )}
      />
    </div>
  );
}
export default CoursesPage;
