import { NextRequest, NextResponse } from "next/server";
import { rolesPermissions } from "./config/access";
import { UserRole } from "./types";

export async function middleware(request: NextRequest) {
  const role = request.cookies.get("userRole")?.value as UserRole | undefined;
  const path = request.nextUrl.pathname;

  // Исключаем запросы к статическим файлам
  if (path.startsWith("/_next") || path.startsWith("/static") || path.startsWith("/public")) {
    return NextResponse.next();
  }

  // Разрешенные страницы без авторизации
  const publicRoutes = ["/login", "/signup", "/public"];

  // Если роли нет и страница не публичная — отказываем в доступе
  if (!role) {
    if (!publicRoutes.includes(path)) {
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    return NextResponse.next();
  }

  // Проверка прав доступа
  const isAllowed = rolesPermissions[role]?.access.some(
    (pattern) =>
      pattern === path ||
      (pattern.endsWith("*") && path.startsWith(pattern.slice(0, -1)))
  );

  if (!isAllowed) {
    return new NextResponse(
      JSON.stringify({ message: "Forbidden" }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  return NextResponse.next();
}
