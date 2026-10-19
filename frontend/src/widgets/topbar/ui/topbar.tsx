'use client';

import { useSession, signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import { ROUTES } from "@/shared/config/routes";

export function Topbar() {
  const { data: session } = useSession();

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      {/* Логотип приложения */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          mvp-<span className="text-indigo-600">sklad</span>
        </span>
      </div>

      {/* Блок пользователя */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-gray-50 border border-gray-100 px-3 py-1.5">
          {session?.user?.image ? (
            <img
              src={session.user.image}
              alt="Avatar"
              className="h-6 w-6 rounded-full border border-indigo-100"
            />
          ) : (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <User className="h-3 w-3" />
            </div>
          )}
          <span className="text-sm font-medium text-gray-700">
            {session?.user?.name || "Пользователь"}
          </span>
        </div>

        {/* Кнопка Выйти */}
        <button
          onClick={() => signOut({ callbackUrl: ROUTES.LOGIN })}
          className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden md:inline">Выйти</span>
        </button>
      </div>
    </header>
  );
}
