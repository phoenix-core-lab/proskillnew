"use client";
import Table, { Column } from "@/components/table/table";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { moduleData } from "../courses-module/page";
import SwitchForm from "@/components/form/switch-form";
type Lesson = {
  id: number;
  name: string;
  duration: string;
  module: string;
};
const lessonColumns: Column<Lesson>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Lesson Name",
    accessor: "name",
  },
  {
    header: "Duration",
    accessor: "duration",
  },
  {
    header: "Module",
    accessor: "module",
  },
];
export const lessonData: Lesson[] = [
  {
    id: 1,
    name: "Introduction",
    duration: "30 min",
    module: "Module 1",
  },
  {
    id: 2,
    name: "Basic Concepts",
    duration: "45 min",
    module: "Module 1",
  },
  {
    id: 3,
    name: "Advanced Topics",
    duration: "60 min",
    module: "Module 2",
  },
];
const CoursesLessonPage = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <SwitchForm />
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Lesson Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Duration"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]">
              <option value="">Select Module</option>
              {moduleData.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-[#5a9c79] text-white rounded-lg hover:bg-[#5a9c79]/90 transition-colors">
              Create
            </button>
            <button className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Table
        title="Lessons"
        columns={lessonColumns}
        data={lessonData}
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

export default CoursesLessonPage;
