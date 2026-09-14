import { NavLink } from 'react-router-dom';
import { Home, Search, BookOpen, Map, User } from 'lucide-react';
import { cn } from '../../utils/cn';

const items = [
  { to: '/', icon: Home, label: 'Home', end: true },
  { to: '/search', icon: Search, label: 'Search' },
  { to: '/subjects', icon: BookOpen, label: 'Subjects' },
  { to: '/knowledge-map', icon: Map, label: 'Map' },
  { to: '/my-learning', icon: User, label: 'My Learning' },
];

export function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 flex items-stretch" aria-label="Bottom navigation">
      {items.map(({ to, icon: Icon, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            cn(
              'flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-medium transition-colors',
              isActive
                ? 'text-veda-700 dark:text-veda-400'
                : 'text-stone-500 dark:text-stone-500'
            )
          }
        >
          <Icon size={20} strokeWidth={1.75} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
