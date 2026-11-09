import { ArrowDownRight, ArrowUpRight, CheckCircle2, X, Zap } from 'lucide-react';
import users from '../data/users';

function CustomerProfile({ customer, onClose }) {
  if (!customer) return null;
  const customerUsers = users.filter((user) => user.companyName === customer.companyName);
  const featureAverage = customerUsers.length ? (customerUsers.reduce((total, user) => total + user.featuresUsed, 0) / customerUsers.length).toFixed(1) : '0.0';
  const change = customer.adoptionPercentage - ((customer.previousMonthActiveUsers / customer.totalRegisteredUsers) * 100);
  const declining = change < 0;
  const actions = declining
    ? ['Contact the customer champion.', 'Schedule an onboarding refresher.', 'Monitor engagement over the next seven days.']
    : ['Share advanced feature playbooks.', 'Invite more users to the workspace.', 'Celebrate the latest adoption milestone.'];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40" role="dialog" aria-modal="true">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close customer profile" onClick={onClose} />
      <aside className="relative z-10 h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl md:p-8">
        <div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-teal-600">Customer profile</p><h2 className="mt-2 text-2xl font-bold text-[#101b36]">{customer.companyName}</h2></div><button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100" aria-label="Close"><X size={20} /></button></div>
        <div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-500">Adoption</p><p className="mt-1 text-2xl font-bold text-[#101b36]">{customer.adoptionPercentage.toFixed(1)}%</p></div><div className="rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-500">Active users</p><p className="mt-1 text-2xl font-bold text-[#101b36]">{customer.activeUsers}/{customer.totalRegisteredUsers}</p></div></div>
        <div className="mt-6 rounded-2xl border border-slate-200 p-5"><div className="flex items-center justify-between"><h3 className="font-bold text-[#101b36]">Engagement trend</h3><span className={`flex items-center gap-1 text-sm font-semibold ${declining ? 'text-rose-600' : 'text-emerald-600'}`}>{declining ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}{change.toFixed(1)} pts</span></div><p className="mt-2 text-sm text-slate-500">Compared with the previous month&apos;s active-user rate of {((customer.previousMonthActiveUsers / customer.totalRegisteredUsers) * 100).toFixed(1)}%.</p></div>
        <div className="mt-6 rounded-2xl border border-slate-200 p-5"><div className="flex items-center gap-2"><Zap size={17} className="text-teal-600" /><h3 className="font-bold text-[#101b36]">Feature usage</h3></div><p className="mt-3 text-3xl font-bold text-[#101b36]">{featureAverage}<span className="ml-1 text-sm font-medium text-slate-400">features per user</span></p><div className="mt-3 flex flex-wrap gap-2">{customerUsers.map((user) => <span key={user.userId} className="rounded-full bg-teal-50 px-2.5 py-1 text-xs text-teal-700">{user.userName}: {user.featuresUsed}</span>)}</div></div>
        <div className="mt-6 rounded-2xl bg-[#effaf8] p-5"><div className="flex items-center gap-2 text-teal-700"><CheckCircle2 size={17} /><h3 className="font-bold">Recommended actions</h3></div><ul className="mt-3 space-y-2 text-sm text-slate-600">{actions.map((action) => <li key={action}>• {action}</li>)}</ul></div>
      </aside>
    </div>
  );
}

export default CustomerProfile;
