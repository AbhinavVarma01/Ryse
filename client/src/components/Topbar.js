import { Bell, CalendarDays, ChevronDown, Menu, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Overview',
  '/analytics': 'User Analytics',
  '/features': 'Feature Adoption',
  '/customers': 'Customers',
  '/health': 'Customer Health',
  '/insights': 'Adoption Insights',
  '/settings': 'Settings',
};

function Topbar({ onMenuClick }) {
  const { pathname } = useLocation();
  const title = titles[pathname] || 'Overview';

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur md:px-8">
      <div className="flex items-center gap-4">
        <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" aria-label="Open navigation" onClick={onMenuClick}><Menu size={21} /></button>
        <div>
          <p className="text-xs font-medium text-slate-400">Workspace / {title}</p>
          <h1 className="mt-0.5 text-xl font-bold tracking-tight text-[#101b36] md:text-2xl">{title}</h1>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button type="button" className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:border-teal-300 sm:flex"><CalendarDays size={16} className="text-teal-600" /><span>Last 30 days</span><ChevronDown size={14} className="text-slate-400" /></button>
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 md:flex"><Search size={16} className="text-slate-400" /><span>Search</span><kbd className="ml-3 rounded border border-slate-200 px-1.5 py-0.5 text-[10px] text-slate-400">⌘ K</kbd></div>
        <button type="button" className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100" aria-label="Notifications"><Bell size={19} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-teal-500 ring-2 ring-white" /></button>
        <div className="hidden h-8 w-px bg-slate-200 sm:block" />
        <button type="button" className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-50"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8f4ef] text-sm font-bold text-[#087f75]">JD</span><span className="hidden text-left md:block"><span className="block text-sm font-semibold text-slate-700">Abhinav Varma</span><span className="block text-xs text-slate-400">Admin</span></span><ChevronDown size={16} className="hidden text-slate-400 md:block" /></button>
      </div>
    </header>
  );
}

export default Topbar;
