import { NavLink } from 'react-router-dom';
import {
  Home, Search, BookOpen, Hash, GraduationCap,
  FileText, ClipboardList, Route, User, LayoutGrid,
  Map, X, Code2, ClipboardCheck, BarChart2, Trophy, Settings2, Layers
} from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
  { to: '/', icon: Home, label: 'Home', end: true },
  { to: '/search', icon: Search, label: 'Search' },
  { divider: true },
  { to: '/subjects', icon: BookOpen, label: 'Subjects' },
  { to: '/topics', icon: Hash, label: 'Topics' },
  { to: '/courses', icon: GraduationCap, label: 'Courses' },
  { to: '/resources', icon: FileText, label: 'Resources' },
  { to: '/exams', icon: ClipboardList, label: 'Exams' },
  { to: '/learning-paths', icon: Route, label: 'Learning Paths' },
  { divider: true },
  { to: '/my-learning', icon: User, label: 'My Learning' },
  { to: '/quiz', icon: ClipboardCheck, label: 'Practice Quiz' },
  { to: '/flashcards', icon: Layers, label: 'Flashcards' },
  { to: '/insights', icon: BarChart2, label: 'Insights' },
  { to: '/achievements', icon: Trophy, label: 'Achievements' },
  { divider: true },
  { to: '/settings', icon: Settings2, label: 'Settings' },
  { to: '/knowledge-map', icon: Map, label: 'Knowledge Map' },
  { to: '/content-studio', icon: LayoutGrid, label: 'Content Studio' },
  { to: '/api-explorer', icon: Code2, label: 'API Explorer' },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-64 z-40 bg-white dark:bg-stone-900',
          'border-r border-stone-200 dark:border-stone-800',
          'flex flex-col transition-transform duration-200',
          'lg:translate-x-0 lg:static lg:z-auto',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-stone-200 dark:border-stone-800">
          <NavLink to="/" className="flex items-center gap-2.5" onClick={onClose}>
            <div className="w-8 h-8 rounded-lg bg-veda-700 dark:bg-veda-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div>
              <div className="font-bold text-stone-900 dark:text-stone-100 text-sm leading-tight">VEDA</div>
              <div className="text-xs text-stone-500 dark:text-stone-500 leading-tight">Knowledge Platform</div>
            </div>
          </NavLink>
          <button
            className="lg:hidden p-1 rounded text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {navItems.map((item, i) => {
            if ('divider' in item) {
              return <div key={i} className="my-2 border-t border-stone-100 dark:border-stone-800" />;
            }
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors mb-0.5',
                    isActive
                      ? 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-300'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100'
                  )
                }
              >
                <Icon size={16} strokeWidth={1.75} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 dark:border-stone-800">
          <div className="text-xs text-stone-400 dark:text-stone-600">
            <div className="font-semibold text-stone-500 dark:text-stone-500">VEDA</div>
            <div>Dhurta.Org · VEDA Association</div>
          </div>
        </div>
      </aside>
    </>
  );
}
