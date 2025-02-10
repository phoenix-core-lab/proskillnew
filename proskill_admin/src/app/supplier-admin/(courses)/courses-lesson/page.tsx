import React from "react";
import Table, { Column } from "@/components/table/table";
import SwitchForm from "@/components/form/switch-form";
type Lesson = {
  id: number;
  name: string;
  module: string;
};
const columns: Column<Lesson>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Название урока",
    accessor: "name",
  },
  {
    header: "Принадлежный модуль",
    accessor: "module",
  },
];
const lessonData: Lesson[] = [
  {
    id: 1,
    name: "Название урока",
    module: "Принадлежный модуль",
  },
  {
    id: 2,
    name: "Название урока",
    module: "Принадлежный модуль",
  },
  {
    id: 3,
    name: "Название урока",
    module: "Принадлежный модуль",
  },
];
function LessonPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
            <SwitchForm />
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Название урока"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Длительность"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]">
            <option value="">Выбор принадлежного модуля</option>
            <option value="1">Модуль 1</option>
            <option value="2">Модуль 2</option>
            <option value="3">Модуль 3</option>
          </select>
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
        title="Таблица созданных уроков"
        columns={columns}
        data={lessonData}
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
export default LessonPage;
