import { rolesPermissions } from "@/config/access";
import { UserRole } from "@/types";
import Link from "next/link";

export default function AdminSidebar({ role }: { role: UserRole }) {
  const links = rolesPermissions[role].access
    .filter((path) => !path.includes("*"))
    .map((path) => ({
      href: path,
      label: path.split("/").pop()?.replace("-", " ") || "",
    }));

  return (
    <nav>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
