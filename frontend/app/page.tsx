'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DEFAULT_ROUTE } from "@/shared/config/routes";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Мгновенный автоматический редирект на дефолтный роут из конфига
    router.replace(DEFAULT_ROUTE);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-sm font-medium text-gray-400">Перенаправление...</div>
    </div>
  );
}
