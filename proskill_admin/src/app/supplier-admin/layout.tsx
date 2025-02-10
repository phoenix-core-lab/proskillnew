// import { getCurrentUser } from "@/lib/auth";
import AdminHeader from "@/components/header/admin-header";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import { UserRole } from "@/types";
import { cookies } from "next/headers";

export default async function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const role = cookieStore.get("userRole")?.value;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <AdminSidebar role={role as UserRole} />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
