import { UserRole } from "@/types";
import { redirect } from "next/navigation";
export async function getCurrentUser() {
  const response = await fetch("/api/auth/me");
  if (!response.ok) {
    redirect("/login");
  }
  return response.json() as Promise<{
    role: UserRole;
  }>;
}
