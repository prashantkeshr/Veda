import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../utils/cn';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById('main-content');
    if (!el) return;
    const onScroll = () => setVisible(el.scrollTop > 320);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50',
        'w-9 h-9 rounded-full shadow-lg',
        'bg-veda-700 text-white dark:bg-veda-500',
        'flex items-center justify-center',
        'hover:bg-veda-800 dark:hover:bg-veda-600 transition-colors',
        'no-print'
      )}
    >
      <ArrowUp size={16} />
    </button>
  );
}
