'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Keyboard, BarChart3 } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { ROUTES } from "@/shared/config/routes";

const menuItems = [
  { name: "Ввод данных", href: ROUTES.DATA_ENTRY, icon: Keyboard },
  { name: "Аналитика", href: ROUTES.ANALYTICS, icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-gray-200 bg-white pt-16">
      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive ? "text-indigo-600" : "text-gray-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="text-xs text-center text-gray-400 font-mono">mvp-sklad v0.1.0</div>
      </div>
    </aside>
  );
}
