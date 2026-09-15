import { useState, useEffect } from 'react';

export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const el = document.getElementById('main-content');
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const max = scrollHeight - clientHeight;
      setPct(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  if (pct <= 0) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 h-[3px] bg-veda-600 dark:bg-veda-400 transition-[width] duration-100 no-print"
      style={{ width: `${pct}%` }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
