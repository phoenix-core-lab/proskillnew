import AuthGuard from '@/components/AuthGuard';
import { getCurrentUser } from '@/lib/auth';

export default async function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <AuthGuard role={user.role} path="/supplier-admin">
      <div className="supplier-layout">
        {/* <SupplierDashboard role={user.role} /> */}
        <main>{children}</main>
      </div>
    </AuthGuard>
  );
}