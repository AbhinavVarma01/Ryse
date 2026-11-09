import { Activity, CircleUserRound, UserCheck, UserX } from 'lucide-react';
import EmptyChartCard from '../components/EmptyChartCard';
import KpiCard from '../components/KpiCard';
import RecentActivity from '../components/RecentActivity';

function OverviewPage() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#101b36] md:text-3xl">Good morning, Jordan <span aria-hidden="true">👋</span></h2>
          <p className="mt-2 text-sm text-slate-500">Here&apos;s what&apos;s happening with your user adoption today.</p>
        </div>
        <button type="button" className="flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 shadow-sm hover:border-teal-300 hover:text-teal-700">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live data
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Total users" value="12,840" change="+12.8%" trend="up" icon={CircleUserRound} iconClass="bg-blue-50 text-blue-600" />
        <KpiCard label="Active users" value="9,642" change="+8.4%" trend="up" icon={UserCheck} iconClass="bg-teal-50 text-teal-600" />
        <KpiCard label="Inactive users" value="3,198" change="-4.2%" trend="down" icon={UserX} iconClass="bg-rose-50 text-rose-500" />
        <KpiCard label="Adoption rate" value="75.1%" change="+6.7%" trend="up" icon={Activity} iconClass="bg-violet-50 text-violet-600" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <EmptyChartCard title="User activity" description="Daily active and inactive users over time" />
        <EmptyChartCard title="Feature usage" description="Usage across your most important features" variant="bar" />
      </div>

      <div className="mt-6">
        <RecentActivity />
      </div>
    </div>
  );
}

export default OverviewPage;
