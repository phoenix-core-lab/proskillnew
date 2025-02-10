import React from "react";
import Table, { Column } from "@/components/table/table";
import { Pencil, Trash2, Upload } from "lucide-react";
type Book = {
  id: number;
  title: string;
  description: string;
  author: string;
};
const columns: Column<Book>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Book Title",
    accessor: "title",
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Author",
    accessor: "author",
  },
];
const data: Book[] = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the basics of React",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master JavaScript concepts",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "UI/UX Principles",
    description: "Design better user interfaces",
    author: "Mike Johnson",
  },
];
function LibraryPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-6">
          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Book Title"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Author"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
            <input
              type="text"
              placeholder="Short Description"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79] md:col-span-2"
            />
          </div>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]">
            <option value="">Select Related Course</option>
            <option value="1">Course 1</option>
            <option value="2">Course 2</option>
            <option value="3">Course 3</option>
          </select>
          {/* File Upload Areas */}
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Upload Photo</p>
            </div>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-6 w-6 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Upload File</p>
            </div>
          </div>
          {/* Action Buttons */}
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
      {/* Books Table */}
      <Table
        title="Library Books"
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
}
export default LibraryPage;
