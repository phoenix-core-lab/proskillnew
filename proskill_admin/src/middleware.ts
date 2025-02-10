import { NextRequest, NextResponse } from "next/server";
import { rolesPermissions } from "./config/access";
import { UserRole } from "./types";

export async function middleware(request: NextRequest) {
  const role = request.cookies.get("userRole")?.value as UserRole | undefined;
  const path = request.nextUrl.pathname;

  // Исключаем запросы к статическим файлам
  if (
    path.startsWith("/_next") ||
    path.startsWith("/static") ||
    path.startsWith("/public")
  ) {
    return NextResponse.next();
  }

  // Разрешенные страницы без авторизации
  const publicRoutes = ["/login"];

  // Если роли нет и пользователь не на странице /login — редиректим на login
  if (!role) {
    if (!publicRoutes.includes(path)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  // Проверка, что `rolesPermissions[role]` существует
  if (!rolesPermissions[role]) {
    return new NextResponse(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Проверка прав доступа (явно указываем тип для pattern)
  const isAllowed = rolesPermissions[role].access.some(
    (pattern: string) =>
      pattern === path ||
      (pattern.endsWith("*") && path.startsWith(pattern.slice(0, -1)))
  );

  if (!isAllowed) {
    return new NextResponse(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  return NextResponse.next();
}
