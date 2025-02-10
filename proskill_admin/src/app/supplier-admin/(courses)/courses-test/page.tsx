"use client";
import React, { useState } from "react";
import Table, { Column } from "@/components/table/table";
import { Plus, Minus } from "lucide-react";
import SwitchForm from "@/components/form/switch-form";
type Test = {
  id: number;
  question: string;
  lesson: string;
};
const columns: Column<Test>[] = [
  {
    header: "ID",
    accessor: "id",
  },
  {
    header: "Вопрос",
    accessor: "question",
  },
  {
    header: "Принадлежный урок",
    accessor: "lesson",
  },
];
const testData: Test[] = [
  {
    id: 1,
    question: "Вопрос",
    lesson: "Принадлежный урок",
  },
  {
    id: 2,
    question: "Вопрос",
    lesson: "Принадлежный урок",
  },
  {
    id: 3,
    question: "Вопрос",
    lesson: "Принадлежный урок",
  },
];
function TestPage() {
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
      <SwitchForm />
      <div className="w-full bg-white rounded-lg border p-6">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Вопрос"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
          />
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]">
            <option value="">Выбор принадлежного урока</option>
            <option value="1">Урок 1</option>
            <option value="2">Урок 2</option>
            <option value="3">Урок 3</option>
          </select>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Ответы
              </label>
              <button
                onClick={addAnswer}
                className="flex items-center gap-2 text-sm text-[#5a9c79] hover:text-[#5a9c79]/80"
              >
                <Plus className="h-4 w-4" />
                Добавить ответ
              </button>
            </div>
            {answers.map((answer, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => updateAnswer(index, e.target.value)}
                  placeholder={`Ответ ${index + 1}`}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#5a9c79]"
                />
                {answers.length > 1 && (
                  <button
                    onClick={() => removeAnswer(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
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
        title="Таблица созданных тестов"
        columns={columns}
        data={testData}
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
export default TestPage;
