import { ArrowUpRight, MoreHorizontal } from 'lucide-react';

const activities = [
  { initials: 'AC', name: 'Acme Corporation', detail: 'Activated 3 new features', time: '12 min ago', color: 'bg-blue-100 text-blue-700' },
  { initials: 'NF', name: 'Northstar Finance', detail: 'Invited 24 team members', time: '48 min ago', color: 'bg-violet-100 text-violet-700' },
  { initials: 'GH', name: 'Greenhouse Labs', detail: 'Reached 80% adoption rate', time: '2 hrs ago', color: 'bg-emerald-100 text-emerald-700' },
  { initials: 'OR', name: 'Orion Retail', detail: 'Completed onboarding', time: '4 hrs ago', color: 'bg-amber-100 text-amber-700' },
];

function RecentActivity() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-[#101b36]">Recent customer activity</h2>
          <p className="mt-1 text-xs text-slate-400">Latest activity across your customer base</p>
        </div>
        <button type="button" className="text-xs font-semibold text-[#0d9f93] hover:text-[#087f75]">
          View all
        </button>
      </div>
      <div className="mt-5 divide-y divide-slate-100">
        {activities.map((activity) => (
          <div key={activity.name} className="flex items-center gap-3 py-3.5 first:pt-0 last:pb-0">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${activity.color}`}>
              {activity.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-700">{activity.name}</p>
              <p className="mt-0.5 truncate text-xs text-slate-400">{activity.detail}</p>
            </div>
            <div className="text-right">
              <p className="whitespace-nowrap text-[11px] text-slate-400">{activity.time}</p>
              <ArrowUpRight size={14} className="ml-auto mt-1 text-teal-500" />
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="mt-5 flex w-full items-center justify-center gap-1 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 hover:text-teal-600">
        <MoreHorizontal size={15} /> Load more activity
      </button>
    </section>
  );
}

export default RecentActivity;
