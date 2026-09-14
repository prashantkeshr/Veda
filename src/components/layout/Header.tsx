import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Sun, Moon, Monitor } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider';
import { cn } from '../../utils/cn';

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`);
    }
  }

  const themes: Array<{ key: typeof theme; icon: typeof Sun; label: string }> = [
    { key: 'light', icon: Sun, label: 'Light mode' },
    { key: 'system', icon: Monitor, label: 'System mode' },
    { key: 'dark', icon: Moon, label: 'Dark mode' },
  ];

  return (
    <header className="h-16 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex items-center px-4 gap-3 flex-shrink-0">
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 rounded-md text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
        onClick={onMenuOpen}
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex-1 max-w-lg">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Search subjects, topics, resources…"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            className={cn(
              'w-full pl-9 pr-4 py-2 text-sm rounded-md',
              'bg-stone-50 dark:bg-stone-800',
              'border border-stone-200 dark:border-stone-700',
              'text-stone-900 dark:text-stone-100 placeholder-stone-400',
              'focus:outline-none focus:ring-2 focus:ring-veda-700/30 dark:focus:ring-veda-400/30',
              'transition'
            )}
          />
        </div>
      </form>

      <div className="ml-auto flex items-center gap-1">
        {/* Theme switcher */}
        <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-md p-0.5">
          {themes.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              aria-label={label}
              className={cn(
                'p-1.5 rounded transition-colors',
                theme === key
                  ? 'bg-white dark:bg-stone-700 text-veda-700 dark:text-veda-300 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
              )}
            >
              <Icon size={14} />
            </button>
          ))}
        </div>

        {/* VEDA brand link (mobile) */}
        <Link
          to="/"
          className="lg:hidden ml-1 flex items-center gap-1.5 font-bold text-veda-700 dark:text-veda-400 text-sm"
        >
          <div className="w-6 h-6 rounded bg-veda-700 dark:bg-veda-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">V</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
