"use client";
import React from "react";
import { Pencil, Trash2, Upload } from "lucide-react";
import Table, { Column } from "@/components/table/table";
import SwitchForm from "@/components/form/switch-form";
type Course = {
  id: number;
  name: string;
  category: string;
};
const courseColumns: Column<Course>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Category",
    accessor: "category",
  },
];
export const courseData: Course[] = [
  {
    id: 1,
    name: "Course 1",
    category: "Category 1",
  },
  {
    id: 2,
    name: "Course 2",
    category: "Category 2",
  },
  {
    id: 3,
    name: "Course 3",
    category: "Category 3",
  },
];

const CoursesPage = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <SwitchForm />
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Course Title"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Author"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Description"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Duration"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
            Attach Category
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Price"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Original Price"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Upload thumbnail image
                <br />
                (Small format)
              </p>
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Upload course banner
                <br />
                (Large format)
              </p>
            </div>
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
        title="Courses"
        columns={courseColumns}
        data={courseData}
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

export default CoursesPage;
