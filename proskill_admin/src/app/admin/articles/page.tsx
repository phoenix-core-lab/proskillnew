"use client";
import React, { useState } from "react";
import { Upload, Pencil, Trash2 } from "lucide-react";
import Table from "@/components/table/table";

interface Article {
  id: string;
  title: string;
  link: string;
  author: string;
  position: number;
  featured: boolean;
}
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with React",
    link: "https://telegram.com/article1",
    author: "John Doe",
    position: 1,
    featured: true,
  },
  {
    id: "2",
    title: "Advanced TypeScript Tips",
    link: "https://telegram.com/article2",
    author: "Jane Smith",
    position: 2,
    featured: false,
  },
];
const columns = [
  {
    header: "ID",
    accessor: "id" as const,
  },
  {
    header: "Title",
    accessor: "title" as const,
  },
  {
    header: "Link",
    accessor: "link" as const,
  },
  {
    header: "Author",
    accessor: "author" as const,
  },
  {
    header: "Featured",
    accessor: "featured" as const,
    render: (value: boolean) => (value ? "Yes" : "No"),
  },
];
const ArticlesPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    link: "",
    position: "1",
    featured: false,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Административная панель статей
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Название статьи"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Короткое описание"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Автор"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              value={formData.author}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  author: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Ссылка на статью (Telegraph)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              value={formData.link}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  link: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                className="rounded border-gray-300 text-[#5a9c79] focus:ring-[#5a9c79]"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    featured: e.target.checked,
                  })
                }
              />
              <label htmlFor="featured" className="text-sm text-gray-700">
                Вывести в топ
              </label>
            </div>
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79] bg-white"
              value={formData.position}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  position: e.target.value,
                })
              }
            >
              <option value="1">Позиция 1</option>
              <option value="2">Позиция 2</option>
              <option value="3">Позиция 3</option>
              <option value="4">Позиция 4</option>
            </select>
          </div>
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Загрузить фото</p>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-[#5a9c79] text-white rounded-lg hover:bg-[#5a9c79]/90 transition-colors"
            >
              Создать
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
      <Table<Article>
        title="Таблица созданных статей"
        columns={columns}
        data={mockArticles}
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
export default ArticlesPage;
