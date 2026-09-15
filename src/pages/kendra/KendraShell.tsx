import { useEffect } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { LayoutDashboard, LogOut, GitBranch, FileStack, HelpCircle, UploadCloud, BookMarked } from 'lucide-react';

const SESSION_KEY = 'vk-auth';

const NAV = [
  { to: '/veda-kendra/dashboard', icon: LayoutDashboard, label: 'Dashboard'        },
  { to: '/veda-kendra/editor',    icon: GitBranch,       label: 'Subjects & Topics' },
  { to: '/veda-kendra/resources', icon: FileStack,       label: 'Resources & Exams' },
  { to: '/veda-kendra/questions', icon: HelpCircle,      label: 'Question Bank'     },
  { to: '/veda-kendra/courses',   icon: BookMarked,      label: 'Courses & Paths'   },
  { to: '/veda-kendra/publish',   icon: UploadCloud,     label: 'Publish'           },
];

export function KendraShell() {
  const navigate  = useNavigate();
  const isAuthed  = sessionStorage.getItem(SESSION_KEY) === '1';

  useEffect(() => {
    if (!isAuthed) navigate('/veda-kendra', { replace: true });
  }, [isAuthed, navigate]);

  if (!isAuthed) return null;

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    navigate('/veda-kendra', { replace: true });
  }

  return (
    <div className="flex h-screen bg-stone-950 text-stone-100 overflow-hidden">

      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 border-r border-stone-800 flex flex-col">

        {/* Brand */}
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-stone-800">
          <div className="w-7 h-7 rounded-lg bg-veda-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-stone-100 truncate">VEDA Kendra</div>
            <div className="text-[10px] text-stone-500 uppercase tracking-wider">CMS</div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {NAV.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => [
                'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors',
                isActive
                  ? 'bg-veda-900/60 text-veda-300 font-medium'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/80',
              ].join(' ')}
            >
              <Icon size={15} className="flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Sign out */}
        <div className="p-3 border-t border-stone-800">
          <button
            onClick={logout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-stone-500 hover:text-red-400 hover:bg-stone-900 transition-colors"
          >
            <LogOut size={15} className="flex-shrink-0" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="flex items-center justify-between px-6 py-3 border-b border-stone-800 flex-shrink-0">
          <span className="text-sm font-semibold text-stone-300">Content Management</span>
          <span className="text-xs text-stone-600">Dhurta.Org · VEDA Platform</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
