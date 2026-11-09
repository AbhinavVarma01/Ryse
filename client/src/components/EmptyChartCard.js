import { MoreHorizontal } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function EmptyChartCard({ title, description, data, variant = 'line' }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-[#101b36]">{title}</h2>
          <p className="mt-1 text-xs text-slate-400">{description}</p>
        </div>
        <button type="button" aria-label={`${title} options`} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
          <MoreHorizontal size={19} />
        </button>
      </div>
        <div className="mt-6 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {variant === 'line' ? (
              <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#e8edf3" vertical={false} />
                <XAxis dataKey="shortDate" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #e2e8f0', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
                <Line type="monotone" dataKey="dailyActiveUsers" name="Daily active" stroke="#19b4a5" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="weeklyActiveUsers" name="Weekly active" stroke="#6574cd" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="monthlyActiveUsers" name="Monthly active" stroke="#f59e0b" strokeWidth={2} dot={false} />
              </LineChart>
            ) : (
              <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid stroke="#e8edf3" vertical={false} />
                <XAxis dataKey="featureName" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} interval={0} angle={-25} textAnchor="end" height={55} />
                <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #e2e8f0', fontSize: 12 }} />
                <Bar dataKey="uniqueUsers" name="Users" fill="#19b4a5" radius={[5, 5, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
    </section>
  );
}

export default EmptyChartCard;
