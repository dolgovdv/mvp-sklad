'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Topbar } from "@/widgets/topbar";
import { Sidebar } from "@/widgets/sidebar";
import { ROUTES } from "@/shared/config/routes";

export default function DataEntryPage() {
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
        <div className="text-sm font-medium text-gray-500">Загрузка интерфейса...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <main className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ввод данных</h2>
            <p className="mt-2 text-sm text-gray-500">Используйте эту форму для оперативного добавления новых SKU и партий на склад.</p>
            
            <div className="mt-8 border-2 border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-400 text-sm bg-gray-50">
              Форма добавления товаров (TanStack Form + shadcn/ui)
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
