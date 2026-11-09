import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

function KpiCard({ label, value, change, trend, icon: Icon, iconClass }) {
  const isPositive = trend === 'up';
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}>
          <Icon size={19} />
        </div>
        <span className={`flex items-center gap-0.5 text-xs font-semibold ${isPositive ? 'text-emerald-600' : 'text-rose-500'}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-[#101b36]">{value}</p>
      <p className="mt-1 text-xs text-slate-400">vs. previous 30 days</p>
    </article>
  );
}

export default KpiCard;
