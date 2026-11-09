import { Search, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerProfile from '../components/CustomerProfile';
import customers from '../data/customers';

function CustomersPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(() => customers.filter((customer) => customer.companyName.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className="mx-auto max-w-[1440px]"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h2 className="text-2xl font-bold text-[#101b36]">Customers</h2><p className="mt-2 text-sm text-slate-500">Browse customer accounts and adoption performance.</p></div><div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search customers" className="w-44 bg-transparent outline-none placeholder:text-slate-400" /></div></div><section className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><table className="w-full min-w-[700px] text-left"><thead><tr className="border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-400"><th className="pb-3">Customer</th><th className="pb-3">Users</th><th className="pb-3">Active</th><th className="pb-3">Adoption</th><th className="pb-3 text-right">Open</th></tr></thead><tbody className="divide-y divide-slate-100">{filtered.map((customer) => <tr key={customer.customerId} onClick={() => setSelected(customer)} className="cursor-pointer text-sm hover:bg-slate-50"><td className="py-4 font-semibold text-slate-700"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-700"><Users size={16} /></span>{customer.companyName}</div></td><td className="py-4 text-slate-500">{customer.totalRegisteredUsers}</td><td className="py-4 text-slate-500">{customer.activeUsers}</td><td className="py-4 font-semibold text-slate-700">{customer.adoptionPercentage.toFixed(1)}%</td><td className="py-4 text-right text-xs font-semibold text-teal-600">View details</td></tr>)}</tbody></table>{filtered.length === 0 && <p className="py-10 text-center text-sm text-slate-500">No customers match your search.</p>}</section>{selected && <CustomerProfile customer={selected} onClose={() => setSelected(null)} />}<button type="button" onClick={() => navigate('/health')} className="mt-4 text-sm font-semibold text-teal-700 hover:text-teal-900">View customer health monitoring →</button></div>;
}

export default CustomersPage;
