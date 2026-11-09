import {
  BarChart3,
  BrainCircuit,
  Building2,
  LayoutDashboard,
  Users,
  Zap,
} from 'lucide-react';
import logo from '../assets/ryse-logo.png';

const navigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'User Analytics', icon: Users },
  { label: 'Feature Adoption', icon: Zap },
  { label: 'Customers', icon: Building2 },
  { label: 'AI Insights', icon: BrainCircuit },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
          aria-label="Close navigation"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-[#101b36] px-5 py-6 text-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-12 flex items-center justify-between px-2">
          <div className="rounded-lg bg-white px-2 py-1.5">
            <img className="h-10 w-48 object-contain" src={logo} alt="RYSE Intelligence" />
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-slate-400 hover:bg-white/10 lg:hidden"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <span className="text-xl">×</span>
          </button>
        </div>

        <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Workspace
        </div>
        <nav className="space-y-1.5">
          {navigation.map(({ label, icon: Icon, active }) => (
            <button
              type="button"
              key={label}
              className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-sm font-medium transition ${
                active
                  ? 'bg-[#19b4a5] text-white shadow-lg shadow-teal-950/30'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={18} strokeWidth={active ? 2.4 : 2} />
              <span>{label}</span>
              {label === 'AI Insights' && (
                <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-teal-200">
                  New
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center gap-2 text-teal-300">
            <BarChart3 size={17} />
            <span className="text-xs font-semibold uppercase tracking-wider">Adoption health</span>
          </div>
          <p className="text-sm leading-5 text-slate-300">
            Your workspace is showing strong adoption momentum this month.
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-[78%] rounded-full bg-teal-400" />
          </div>
          <p className="mt-2 text-right text-xs text-slate-400">78% healthy</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
