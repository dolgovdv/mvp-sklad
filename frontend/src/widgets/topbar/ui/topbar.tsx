'use client';
import { useSession, signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";

export function Topbar() {
  const { data: session } = useSession();
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          mvp-<span className="text-indigo-600">sklad</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col text-right hidden sm:flex">
          <span className="text-sm font-medium text-gray-700">{session?.user?.name || "Пользователь"}</span>
          <span className="text-xs text-gray-400">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="ml-2 flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all"
        >
          <LogOut className="h-4 w-4" />
          <span>Выйти</span>
        </button>
      </div>
    </header>
  );
}
