import React from "react";
import { Upload } from "lucide-react";
import Table, { Column } from "@/components/table/table";
type Article = {
  id: number;
  name: string;
  telegraph: string;
  author: string;
  status: "Одобрен" | "На рассмотрении";
};
const columns: Column<Article>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Название статьи",
    accessor: "name",
  },
  {
    header: "Ссылка на статью (Telegraph)",
    accessor: "telegraph",
    render: (value) => (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {value}
      </a>
    ),
  },
  {
    header: "Автор",
    accessor: "author",
  },
  {
    header: "Статус",
    accessor: "status",
    render: (value) => (
      <span
        className={`px-2 py-1 rounded text-sm ${
          value === "Одобрен"
            ? "bg-green-50 text-green-700"
            : "bg-yellow-50 text-yellow-700"
        }`}
      >
        {value}
      </span>
    ),
  },
];
const articleData: Article[] = [
  {
    id: 1,
    name: "Название статьи",
    telegraph: "https://telegra.ph/article-1",
    author: "Автор",
    status: "Одобрен",
  },
  {
    id: 2,
    name: "Название статьи",
    telegraph: "https://telegra.ph/article-2",
    author: "Автор",
    status: "На рассмотрении",
  },
  {
    id: 3,
    name: "Название статьи",
    telegraph: "https://telegra.ph/article-3",
    author: "Автор",
    status: "Одобрен",
  },
];
function ArticlePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Название статьи"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Автор"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <input
            type="text"
            placeholder="Короткое описание"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
          />
          <input
            type="text"
            placeholder="Ссылка на статью (Telegraph)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
          />
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Загрузить фото</p>
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
        title="Таблица созданных статей"
        columns={columns}
        data={articleData}
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
export default ArticlePage;
