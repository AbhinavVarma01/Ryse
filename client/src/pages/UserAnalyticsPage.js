import { useState } from 'react';
import { Activity, UserPlus, Users } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import MetricCard from '../components/MetricCard';
import activity from '../data/activity';

function UserAnalyticsPage() {
  const [range, setRange] = useState(30);
  const data = activity.slice(-range).map((item) => ({ ...item, shortDate: item.date.slice(5) }));
  const latest = data[data.length - 1];
  return <div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h2 className="text-2xl font-bold text-[#101b36]">User analytics</h2><p className="mt-2 text-sm text-slate-500">Understand engagement, registrations and usage momentum.</p></div><select value={range} onChange={(event) => setRange(Number(event.target.value))} className="w-fit rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-teal-400"><option value={7}>Last 7 days</option><option value={14}>Last 14 days</option><option value={30}>Last 30 days</option></select></div>
    <div className="mt-7 grid gap-4 sm:grid-cols-3"><MetricCard label="DAU" value={latest.dailyActiveUsers} helper="Latest daily active users" icon={Activity} /><MetricCard label="WAU" value={latest.weeklyActiveUsers} helper="Latest weekly active users" icon={Users} iconClass="bg-blue-50 text-blue-600" /><MetricCard label="New registrations" value={latest.newRegistrations} helper="Latest daily registrations" icon={UserPlus} iconClass="bg-violet-50 text-violet-600" /></div>
    <div className="mt-6 grid gap-6 xl:grid-cols-2"><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-bold text-[#101b36]">Engagement trends</h3><p className="mt-1 text-xs text-slate-400">DAU, WAU and MAU over the selected period</p><div className="mt-6 h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={data}><CartesianGrid stroke="#e8edf3" vertical={false} /><XAxis dataKey="shortDate" tick={{ fontSize: 10 }} /><YAxis tick={{ fontSize: 10 }} /><Tooltip /><Legend /><Line dataKey="dailyActiveUsers" name="DAU" stroke="#19b4a5" strokeWidth={2} dot={false} /><Line dataKey="weeklyActiveUsers" name="WAU" stroke="#6574cd" strokeWidth={2} dot={false} /><Line dataKey="monthlyActiveUsers" name="MAU" stroke="#f59e0b" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div></section><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-bold text-[#101b36]">Registration trends</h3><p className="mt-1 text-xs text-slate-400">New users joining each day</p><div className="mt-6 h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><CartesianGrid stroke="#e8edf3" vertical={false} /><XAxis dataKey="shortDate" tick={{ fontSize: 10 }} /><YAxis tick={{ fontSize: 10 }} /><Tooltip /><Bar dataKey="newRegistrations" name="Registrations" fill="#19b4a5" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></section></div></div>;
}

export default UserAnalyticsPage;
