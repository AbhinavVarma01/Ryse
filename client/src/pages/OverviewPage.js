import { Activity, CircleUserRound, UserCheck, UserX } from 'lucide-react';
import EmptyChartCard from '../components/EmptyChartCard';
import KpiCard from '../components/KpiCard';
import RecentActivity from '../components/RecentActivity';
import users from '../data/users';
import customers from '../data/customers';
import features from '../data/features';
import activity from '../data/activity';

function OverviewPage() {
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.accountStatus === 'Active').length;
  const inactiveUsers = totalUsers - activeUsers;
  const adoptionRate = ((activeUsers / totalUsers) * 100).toFixed(1);
  const latestActivity = activity[activity.length - 1];
  const chartActivity = activity.map((item) => ({
    ...item,
    shortDate: new Date(`${item.date}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  }));

  const getAdoptionStatus = (percentage) => {
    if (percentage >= 75) return { label: 'High', className: 'bg-emerald-50 text-emerald-700' };
    if (percentage >= 50) return { label: 'Medium', className: 'bg-amber-50 text-amber-700' };
    return { label: 'Low', className: 'bg-rose-50 text-rose-700' };
  };

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#101b36] md:text-3xl">Hello Abhinav! <span aria-hidden="true">👋</span></h2>
          <p className="mt-2 text-sm text-slate-500">Here&apos;s what&apos;s happening with your user adoption today.</p>
        </div>
        <button type="button" className="flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 shadow-sm hover:border-teal-300 hover:text-teal-700">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live data
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Total registered users" value={totalUsers.toLocaleString()} icon={CircleUserRound} iconClass="bg-blue-50 text-blue-600" />
        <KpiCard label="Daily active users" value={latestActivity.dailyActiveUsers.toLocaleString()} icon={UserCheck} iconClass="bg-teal-50 text-teal-600" />
        <KpiCard label="Inactive users" value={inactiveUsers.toLocaleString()} icon={UserX} iconClass="bg-rose-50 text-rose-500" />
        <KpiCard label="Overall adoption rate" value={`${adoptionRate}%`} icon={Activity} iconClass="bg-violet-50 text-violet-600" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <EmptyChartCard title="User activity" description="Daily, weekly and monthly active users over time" data={chartActivity} />
        <EmptyChartCard title="Feature usage" description="Unique users using each product feature" data={features} variant="bar" />
      </div>

      <div className="mt-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-bold text-[#101b36]">Customer adoption</h2>
              <p className="mt-1 text-xs text-slate-400">Adoption health across your customer base</p>
            </div>
            <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">{customers.length} customers</span>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Total users</th>
                  <th className="pb-3 font-semibold">Active users</th>
                  <th className="pb-3 font-semibold">Adoption</th>
                  <th className="pb-3 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {customers.map((customer) => {
                  const status = getAdoptionStatus(customer.adoptionPercentage);
                  return (
                    <tr key={customer.customerId} className="text-sm">
                      <td className="py-3.5 font-semibold text-slate-700">{customer.companyName}</td>
                      <td className="py-3.5 text-slate-500">{customer.totalRegisteredUsers}</td>
                      <td className="py-3.5 text-slate-500">{customer.activeUsers}</td>
                      <td className="py-3.5 font-semibold text-slate-700">{customer.adoptionPercentage.toFixed(1)}%</td>
                      <td className="py-3.5 text-right"><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${status.className}`}>{status.label}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="mt-6">
        <RecentActivity users={users} />
      </div>
    </div>
  );
}

export default OverviewPage;
