import AuthGuard from "@/components/AuthGuard";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import { getCurrentUser } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <AuthGuard role={user.role} path="/admin">
      <div className="admin-layout">
        <AdminSidebar role={user.role} />
        <main>{children}</main>
      </div>
    </AuthGuard>
  );
}
