"use client";
import Table, { Column } from "@/components/table/table";
import React from "react";
import { courseData } from "../courses/page";
import { Pencil, Trash2 } from "lucide-react";
import SwitchForm from "@/components/form/switch-form";
type Module = {
  id: number;
  name: string;
  duration: string;
  course: string;
};
const moduleColumns: Column<Module>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Module Name",
    accessor: "name",
  },
  {
    header: "Duration",
    accessor: "duration",
  },
  {
    header: "Course",
    accessor: "course",
  },
];
export const moduleData: Module[] = [
  {
    id: 1,
    name: "Module 1",
    duration: "2 hours",
    course: "Course 1",
  },
  {
    id: 2,
    name: "Module 2",
    duration: "3 hours",
    course: "Course 1",
  },
  {
    id: 3,
    name: "Module 3",
    duration: "1.5 hours",
    course: "Course 2",
  },
];
const CoursesModulePage = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <SwitchForm />
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Module Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Duration"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]">
              <option value="">Select Course</option>
              {courseData?.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
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
        title="Modules"
        columns={moduleColumns}
        data={moduleData}
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

export default CoursesModulePage;
