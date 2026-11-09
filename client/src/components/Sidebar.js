import {
  BarChart3,
  BrainCircuit,
  Building2,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  LayoutDashboard,
  Settings,
  Users,
  Zap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ryse-logo.png';

const groups = [
  {
    label: 'Main menu',
    items: [
      { label: 'Overview', path: '/', icon: LayoutDashboard },
      { label: 'User Analytics', path: '/analytics', icon: Users },
      { label: 'Feature Adoption', path: '/features', icon: Zap },
      { label: 'Customers', path: '/customers', icon: Building2 },
    ],
  },
  {
    label: 'Intelligence',
    items: [
      { label: 'Customer Health', path: '/health', icon: HeartPulse },
      { label: 'Adoption Insights', path: '/insights', icon: BrainCircuit },
    ],
  },
  {
    label: 'Preferences',
    items: [{ label: 'Settings', path: '/settings', icon: Settings }],
  },
];

function Sidebar({ isOpen, isCollapsed, onClose, onToggle }) {
  return (
    <>
      {isOpen && (
        <button type="button" className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden" aria-label="Close navigation" onClick={onClose} />
      )}
      <aside className={`fixed inset-y-0 left-0 z-40 flex flex-col overflow-y-auto bg-[#101b36] py-6 text-white shadow-xl transition-all duration-300 lg:translate-x-0 ${isCollapsed ? 'w-20 px-3' : 'w-72 px-5'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`mb-10 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-2'}`}>
          {isCollapsed ? (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-black text-[#101b36]">R</div>
          ) : (
            <div className="rounded-lg bg-white px-2 py-1.5">
              <img className="h-10 w-48 object-contain" src={logo} alt="RYSE Intelligence" />
            </div>
          )}
          <button type="button" className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden" onClick={onClose} aria-label="Close navigation">
            <span className="text-xl">×</span>
          </button>
        </div>

        <nav className="flex-1 space-y-7">
          {groups.map((group) => (
            <div key={group.label}>
              {!isCollapsed && <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{group.label}</div>}
              <div className="space-y-1.5">
                {group.items.map(({ label, path, icon: Icon }) => (
                  <NavLink
                    end={path === '/'}
                    to={path}
                    key={label}
                    onClick={onClose}
                    title={isCollapsed ? label : undefined}
                    className={({ isActive }) => `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${isCollapsed ? 'justify-center px-2' : ''} ${isActive ? 'bg-[#19b4a5] text-white shadow-lg shadow-teal-950/30' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={18} strokeWidth={isActive ? 2.4 : 2} />
                        {!isCollapsed && <span>{label}</span>}
                        {!isCollapsed && label === 'Adoption Insights' && <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-teal-200">New</span>}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {!isCollapsed && (
          <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex items-center gap-2 text-teal-300"><BarChart3 size={17} /><span className="text-xs font-semibold uppercase tracking-wider">Adoption health</span></div>
            <p className="text-sm leading-5 text-slate-300">Your workspace is showing strong adoption momentum this month.</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-[78%] rounded-full bg-teal-400" /></div>
            <p className="mt-2 text-right text-xs text-slate-400">78% healthy</p>
          </div>
        )}
        <button type="button" onClick={onToggle} className="hidden items-center justify-center rounded-xl border border-white/10 p-2.5 text-slate-400 hover:bg-white/10 hover:text-white lg:flex" aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!isCollapsed && <span className="ml-2 text-xs">Collapse menu</span>}
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
