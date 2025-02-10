"use client";
import React from "react";
import { Bell, ChevronDown, Menu, Settings } from "lucide-react";
import { useParams } from "next/navigation";
interface HeaderProps {
  onMenuClick: () => void;
}
const getPageTitle = () => {
  const pathname = useParams();
  switch (pathname.pathname) {
    case "/":
      return "Панель управления";
    case "/users":
      return "Пользователи";
    case "/articles":
      return "Статьи";
    case "/banners":
      return "Баннеры";
    case "/ad-links":
      return "Рекламные ссылки";
    case "/course-categories":
      return "Категории курсов";
    case "/courses":
      return "Курсы";
    case "/library":
      return "Библиотека";
    case "/requests":
      return "Заявки";
    case "/analytics":
      return "Статистика";
    case "/settings":
      return "Настройки";
    default:
      return "Панель управления";
  }
};
const AdminHeader = () => {
  const pageTitle = getPageTitle();
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white">
      <div className="px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <button onClick={onMenuClick} className="lg:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button> */}
          <h1 className="text-xl font-semibold text-gray-900">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-6 w-px bg-gray-200 mx-2" />
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-[#5a9c79] flex items-center justify-center">
              <span className="text-sm font-medium text-white">АД</span>
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium text-gray-900">Админ</div>
              <div className="text-xs text-gray-500">admin@example.com</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default AdminHeader;
