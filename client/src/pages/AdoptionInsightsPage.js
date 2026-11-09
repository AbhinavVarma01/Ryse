import { AlertCircle, CheckCircle2, Lightbulb, RefreshCw, ShieldAlert, TrendingDown, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import customers from '../data/customers';
import features from '../data/features';
import users from '../data/users';
import { buildInsights } from '../utils/adoptionInsights';

const severityStyles = { Critical: 'bg-rose-50 text-rose-700 border-rose-100', High: 'bg-orange-50 text-orange-700 border-orange-100', Medium: 'bg-amber-50 text-amber-700 border-amber-100', Positive: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
const severityIcons = { Critical: ShieldAlert, High: TrendingDown, Medium: Lightbulb, Positive: TrendingUp };

function AdoptionInsightsPage() {
  const [insights, setInsights] = useState(() => buildInsights(customers, features, users));
  const [generatedAt, setGeneratedAt] = useState(new Date());
  const generate = () => { setInsights(buildInsights(customers, features, users)); setGeneratedAt(new Date()); };
  return <div className="mx-auto max-w-[1100px]"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h2 className="text-2xl font-bold text-[#101b36]">Adoption insights</h2><p className="mt-2 text-sm text-slate-500">Transparent, rule-based recommendations from your adoption data.</p></div><button type="button" onClick={generate} className="flex w-fit items-center gap-2 rounded-lg bg-[#19b4a5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#108f84]"><RefreshCw size={16} /> Generate insights</button></div><div className="mt-5 flex items-center gap-2 text-xs text-slate-400"><CheckCircle2 size={14} className="text-teal-500" /> Last calculated {generatedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} · {insights.length} signals found</div><div className="mt-7 space-y-4">{insights.map((insight) => { const Icon = severityIcons[insight.severity] || AlertCircle; return <article key={insight.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"><div className="flex flex-col gap-4 md:flex-row"><div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${severityStyles[insight.severity]}`}><Icon size={20} /></div><div className="flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold text-[#101b36]">{insight.title}</h3><span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${severityStyles[insight.severity]}`}>{insight.severity}</span></div><p className="mt-2 text-sm font-medium text-slate-700">{insight.related}</p><p className="mt-2 text-sm text-slate-500"><span className="font-semibold text-slate-700">Problem:</span> {insight.problem}</p><p className="mt-1 text-sm text-slate-500"><span className="font-semibold text-slate-700">Evidence:</span> {insight.evidence}</p><div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"><span className="font-semibold text-teal-700">Recommended action:</span> {insight.recommendation}</div></div></div></article>; })}</div>{insights.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center"><AlertCircle className="mx-auto text-slate-400" /><p className="mt-3 font-semibold text-slate-700">No insights detected</p><p className="mt-1 text-sm text-slate-500">Your current data is within the configured thresholds.</p></div>}</div>;
}

export default AdoptionInsightsPage;
