import { rolesPermissions } from "@/config/access";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  role,
  children,
  path,
}: {
  role: UserRole;
  children: React.ReactNode;
  path: string;
}) {
  const router = useRouter();
  const isAllowed = rolesPermissions[role].access.some(
    (pattern) =>
      pattern === path ||
      (pattern.endsWith("*") && path.startsWith(pattern.slice(0, -1)))
  );

  if (!isAllowed) {
    router.push("/unauthorized");
  }

  return <>{children}</>;
}
