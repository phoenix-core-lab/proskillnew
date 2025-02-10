"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type TabType = "course" | "module" | "lesson" | "test";

interface Tab {
  id: TabType;
  label: string;
  route: string;
}

const baseRoutes = {
  course: "/courses",
  module: "/courses-module",
  lesson: "/courses-lesson",
  test: "/courses-test",
};

const SwitchForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Определяем, начинается ли путь с "/supplier-admin" или "/admin"
  const isSupplierAdmin = pathname.startsWith("/supplier-admin");
  const basePath = isSupplierAdmin ? "/supplier-admin" : "/admin";

  // Читаем параметр "active" из URL
  const activeTabFromURL = searchParams.get("active") as TabType | null;

  // Если в URL есть корректное значение, используем его, иначе по умолчанию "course"
  const [activeTab, setActiveTab] = useState<TabType>(
    activeTabFromURL || "course"
  );

  useEffect(() => {
    if (activeTabFromURL && activeTabFromURL !== activeTab) {
      setActiveTab(activeTabFromURL);
    }
  }, [activeTabFromURL, activeTab]);

  const handleClick = (tabId: TabType) => {
    setActiveTab(tabId);
    // Формируем полный маршрут
    router.push(`${basePath}${baseRoutes[tabId]}?active=${tabId}`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(baseRoutes).map(([id, route]) => (
        <button
          key={id}
          className={
            activeTab === id
              ? "px-4 py-2 bg-[#5a9c79]/10 text-[#5a9c79] rounded-lg hover:bg-[#5a9c79]/20 transition-colors"
              : "px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
          }
          onClick={() => handleClick(id as TabType)}
        >
          {`Add ${id.charAt(0).toUpperCase() + id.slice(1)}`}
        </button>
      ))}
    </div>
  );
};

export default SwitchForm;
