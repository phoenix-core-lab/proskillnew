"use client";
import React, { useState } from "react";
import { lessonData } from "../courses-lesson/page";
import Table, { Column } from "@/components/table/table";
import { Pencil, Trash2 } from "lucide-react";
import SwitchForm from "@/components/form/switch-form";
type Test = {
  id: number;
  question: string;
  lesson: string;
};
const testColumns: Column<Test>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Question",
    accessor: "question",
  },
  {
    header: "Lesson",
    accessor: "lesson",
  },
];
const testData: Test[] = [
  {
    id: 1,
    question: "What is React?",
    lesson: "Introduction",
  },
  {
    id: 2,
    question: "Explain components",
    lesson: "Basic Concepts",
  },
  {
    id: 3,
    question: "What are hooks?",
    lesson: "Advanced Topics",
  },
];
const CoursesTestPage = () => {
  const [answers, setAnswers] = useState<string[]>([""]);
  const addAnswer = () => {
    setAnswers([...answers, ""]);
  };
  const removeAnswer = (index: number) => {
    setAnswers(answers.filter((_, i) => i !== index));
  };
  const updateAnswer = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-6">
          <SwitchForm />
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Question
              </label>
              <input
                type="text"
                placeholder="Enter question"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Select Lesson
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]">
                <option value="">Select Lesson</option>
                {lessonData.map((lesson) => (
                  <option key={lesson.id} value={lesson.id}>
                    {lesson.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Answers
                </label>
                <button
                  type="button"
                  onClick={addAnswer}
                  className="text-sm text-[#5a9c79] hover:text-[#5a9c79]/80"
                >
                  + Add Answer
                </button>
              </div>
              {answers.map((answer, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => updateAnswer(index, e.target.value)}
                    placeholder={`Answer ${index + 1}`}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
                  />
                  <button
                    type="button"
                    onClick={() => removeAnswer(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              ))}
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
        title="Tests"
        columns={testColumns}
        data={testData}
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

export default CoursesTestPage;
