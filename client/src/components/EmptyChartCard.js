import { BarChart3, MoreHorizontal, TrendingUp } from 'lucide-react';

function EmptyChartCard({ title, description, variant = 'line' }) {
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
      <div className="relative mt-6 flex h-52 flex-col justify-end overflow-hidden rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-4 pb-5">
        <div className="absolute inset-x-4 top-8 space-y-8">
          <div className="border-t border-slate-200" />
          <div className="border-t border-slate-200" />
          <div className="border-t border-slate-200" />
        </div>
        <div className="relative z-10 flex items-center justify-center gap-2 text-slate-400">
          {variant === 'line' ? <TrendingUp size={17} /> : <BarChart3 size={17} />}
          <span className="text-sm">Chart data will appear here</span>
        </div>
        <div className="relative z-10 mt-4 flex justify-between px-1 text-[10px] text-slate-400">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
        </div>
      </div>
    </section>
  );
}

export default EmptyChartCard;
