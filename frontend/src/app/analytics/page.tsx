'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Topbar } from "@/widgets/topbar";
import { Sidebar } from "@/widgets/sidebar";
import { ROUTES } from "@/shared/config/routes";
import { AnalyticsChart } from "@/shared/ui/analytics-chart";

export default function AnalyticsPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(ROUTES.LOGIN);
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-sm font-medium text-gray-500">Загрузка аналитики...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <main className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Аналитика склада</h2>
            <p className="mt-2 text-sm text-gray-500">Мониторинг остатков товаров и складских мощностей.</p>
          </div>
          
          <AnalyticsChart />
        </main>
      </div>
    </div>
  );
}
