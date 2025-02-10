import React from "react";
import Table, { Column } from "@/components/table/table";
import { Eye, Check, X, ArrowUp } from "lucide-react";
type CourseRequest = {
  id: number;
  date: string;
  supplier: string;
  courseName: string;
  modulesCount: number;
  lessonsCount: number;
};
const columns: Column<CourseRequest>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Supplier",
    accessor: "supplier",
  },
  {
    header: "Course Name",
    accessor: "courseName",
  },
  {
    header: "Modules Count",
    accessor: "modulesCount",
  },
  {
    header: "Lessons Count",
    accessor: "lessonsCount",
  },
];
const data: CourseRequest[] = [
  {
    id: 1,
    date: "2024-02-01",
    supplier: "Supplier 1",
    courseName: "React Basics",
    modulesCount: 5,
    lessonsCount: 25,
  },
  {
    id: 2,
    date: "2024-02-01",
    supplier: "Supplier 2",
    courseName: "Advanced JavaScript",
    modulesCount: 8,
    lessonsCount: 40,
  },
  {
    id: 3,
    date: "2024-02-01",
    supplier: "Supplier 3",
    courseName: "UI/UX Design",
    modulesCount: 6,
    lessonsCount: 30,
  },
];
function CourseRequestsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full">
        <Table
          title="Course Upload Requests"
          columns={columns}
          data={data}
          actions={(row) => (
            <div className="flex justify-end gap-2">
              <button
                className="p-2 hover:bg-gray-100 rounded-lg text-blue-600"
                title="View"
              >
                <Eye className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg text-green-600"
                title="Accept"
              >
                <Check className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg text-red-600"
                title="Decline"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg text-purple-600"
                title="Promote"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
}
export default CourseRequestsPage;
