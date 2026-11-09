import { MoreHorizontal } from 'lucide-react';

function RecentActivity({ users }) {
  const recentUsers = [...users]
    .sort((first, second) => second.lastLoginDate.localeCompare(first.lastLoginDate))
    .slice(0, 8);

  const formatDate = (date) => new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-[#101b36]">Recent user activity</h2>
          <p className="mt-1 text-xs text-slate-400">Latest user logins across your customer base</p>
        </div>
        <button type="button" className="text-xs font-semibold text-[#0d9f93] hover:text-[#087f75]">
          View all
        </button>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400">
              <th className="pb-3 font-semibold">User name</th>
              <th className="pb-3 font-semibold">Company</th>
              <th className="pb-3 font-semibold">Last login</th>
              <th className="pb-3 text-right font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentUsers.map((user) => (
              <tr key={user.userId} className="text-sm">
                <td className="py-3.5 font-semibold text-slate-700">{user.userName}</td>
                <td className="py-3.5 text-slate-500">{user.companyName}</td>
                <td className="py-3.5 text-slate-500">{formatDate(user.lastLoginDate)}</td>
                <td className="py-3.5 text-right">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${user.accountStatus === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {user.accountStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="mt-2 flex w-full items-center justify-center gap-1 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 hover:text-teal-600">
        <MoreHorizontal size={15} /> Showing latest 8 users
      </button>
    </section>
  );
}

export default RecentActivity;
