"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  BarChart2,
  FileText,
  HelpCircle,
  LucideProps,
} from "lucide-react";
import { rolesPermissions } from "@/config/access";
import { UserRole } from "@/types";

// Карта иконок
const iconsMap: Record<string, React.ComponentType<LucideProps>> = {
  "/admin/ad-links": FileText,
  "/admin/course-categories": BarChart2,
  "/admin/courses": HelpCircle,
  "/admin/articles": FileText,
  "/admin/library": FileText,
  "/admin/requests-users": ShoppingCart,
  "/admin/registered-users": Users,
  "/admin/supplier-requests": Users,
  "admin/supplier-request-library": FileText,
};

// Исключенные пути
const excludedPaths = [
  "/admin/courses-module",
  "/admin/courses-lesson",
  "/admin/courses-test",
];

// Генерация динамических ссылок
export default function AdminSidebar({ role }: { role: UserRole }) {
  const pathName = usePathname();

  // Обрабатываем доступные пути для роли
  const paths =
    rolesPermissions[role]?.access.flatMap((path) =>
      path.includes("*")
        ? Object.keys(iconsMap).filter((p) =>
            p.startsWith(path.replace("/*", ""))
          )
        : [path]
    ) || [];

  // Фильтруем исключенные пути
  const filteredPaths = paths.filter((path) => !excludedPaths.includes(path));

  // Формируем ссылки
  const links = filteredPaths.map((path) => {
    const name = path.split("/").pop()?.replace(/-/g, " ") || "Unknown";
    const Icon = iconsMap[path] || HelpCircle;
    return { name, path, Icon };
  });

  return (
    <aside className="hidden lg:block w-64 min-h-screen border-r bg-white">
      <div className="sticky top-0 overflow-y-auto h-screen">
        <div className="flex h-[65px] items-center gap-2 px-4 border-b">
          <div className="w-8 h-8 bg-[#5a9c79] rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Admin</span>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {links.map((item) => {
            const isActive = pathName === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-4 px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-[#5a9c79] bg-[#5a9c79]/10"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.Icon
                  className={`h-6 w-6 ${
                    isActive ? "text-[#5a9c79]" : "text-gray-400"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
