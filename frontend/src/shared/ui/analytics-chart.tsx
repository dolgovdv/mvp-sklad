'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Янв', items: 1200 },
  { month: 'Фев', items: 2100 },
  { month: 'Мар', items: 1800 },
  { month: 'Апр', items: 2400 },
  { month: 'Май', items: 3100 },
  { month: 'Июн', items: 4200 },
];

export function AnalyticsChart() {
  return (
    <div className="w-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Движение товаров</h3>
        <p className="text-sm text-gray-500">Общее количество активных SKU на складе по месяцам</p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorItems" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="#9ca3af" fontSize={12} />
            <YAxis tickLine={false} axisLine={false} stroke="#9ca3af" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px' }} />
            <Area type="monotone" dataKey="items" name="Товары (шт)" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorItems)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
