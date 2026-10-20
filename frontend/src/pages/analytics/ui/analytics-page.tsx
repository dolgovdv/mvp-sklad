import { AnalyticsChart } from "@/shared/ui/analytics-chart";

export function AnalyticsPage() {
  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Аналитика склада</h2>
        <p className="mt-2 text-sm text-gray-500">Мониторинг остатков товаров и складских мощностей.</p>
      </div>

      <AnalyticsChart />
    </>
  );
}
