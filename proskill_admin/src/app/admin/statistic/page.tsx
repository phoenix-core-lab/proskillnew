"use client";
import React, { useEffect, useState } from "react";
import { Download, Search } from "lucide-react";
import Table, { Column } from "@/components/table/table";
type StatisticEntry = {
  id: number;
  name: string;
  date: string;
  course: string;
  category: string;
  selected?: boolean;
};
const columns: Column<StatisticEntry>[] = [
  {
    header: "",
    accessor: "selected",
    render: (value, row) => (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => e.stopPropagation()}
        className="w-4 h-4 rounded border-gray-300 text-[#5a9c79] focus:ring-[#5a9c79]"
      />
    ),
  },
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Course",
    accessor: "course",
  },
  {
    header: "Category",
    accessor: "category",
  },
];
const initialData: StatisticEntry[] = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-02-01",
    course: "React Basics",
    category: "Development",
    selected: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-02-01",
    course: "Advanced JavaScript",
    category: "Development",
    selected: false,
  },
  {
    id: 3,
    name: "Mike Johnson",
    date: "2024-02-01",
    course: "UI/UX Design",
    category: "Design",
    selected: false,
  },
];
function StatisticsPage() {
  const [data, setData] = useState<StatisticEntry[]>(initialData);
  const [filteredData, setFilteredData] =
    useState<StatisticEntry[]>(initialData);
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    course: "",
    category: "",
    search: "",
  });
  const [selectAll, setSelectAll] = useState(false);
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );
  const uniqueCourses = Array.from(new Set(data.map((item) => item.course)));
  const selectedCount = filteredData.filter((item) => item.selected).length;
  useEffect(() => {
    let result = [...data];
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.course.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm)
      );
    }
    if (filters.startDate) {
      result = result.filter((item) => item.date >= filters.startDate);
    }
    if (filters.endDate) {
      result = result.filter((item) => item.date <= filters.endDate);
    }
    if (filters.course) {
      result = result.filter((item) => item.course === filters.course);
    }
    if (filters.category) {
      result = result.filter((item) => item.category === filters.category);
    }
    setFilteredData(result);
  }, [filters, data]);
  const handleCheckboxChange = (id: number) => {
    setData(
      data.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item
      )
    );
  };
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setData(
      data.map((item) => ({
        ...item,
        selected: newSelectAll,
      }))
    );
  };
  const handleExportToExcel = () => {
    const selectedItems = data.filter((item) => item.selected);
    if (selectedItems.length === 0) {
      alert("Please select at least one item to export");
      return;
    }
    console.log("Exporting to Excel:", selectedItems);
  };
  const handleFilterReset = () => {
    setFilters({
      startDate: "",
      endDate: "",
      course: "",
      category: "",
      search: "",
    });
  };
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name, course, or category..."
              value={filters.search}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  search: e.target.value,
                })
              }
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    startDate: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    endDate: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                value={filters.course}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    course: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              >
                <option value="">All Courses</option>
                {uniqueCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    category: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handleFilterReset}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
              <div className="text-sm text-gray-600">
                {selectedCount} items selected
              </div>
            </div>
            <button
              onClick={handleExportToExcel}
              disabled={selectedCount === 0}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                selectedCount === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#5a9c79] text-white hover:bg-[#5a9c79]/90"
              } transition-colors`}
            >
              <Download className="h-4 w-4" />
              Export Selected
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg border">
        <div className="p-4 border-b">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-4 h-4 rounded border-gray-300 text-[#5a9c79] focus:ring-[#5a9c79]"
            />
            <span className="text-sm text-gray-600">Select All</span>
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          //   onRowClick={(row) => handleCheckboxChange(row.id)}
        />
      </div>
    </div>
  );
}
export default StatisticsPage;
