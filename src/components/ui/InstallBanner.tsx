import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { cn } from '../../utils/cn';

export function InstallBanner() {
  const { canInstall, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem('veda-install-banner-dismissed') === '1'; }
    catch { return false; }
  });

  function dismiss() {
    setDismissed(true);
    try { localStorage.setItem('veda-install-banner-dismissed', '1'); } catch {}
  }

  if (!canInstall || dismissed) return null;

  return (
    <div className={cn(
      'flex items-center gap-3 px-4 py-2.5',
      'bg-veda-700 text-white text-sm',
      'border-b border-veda-800'
    )}>
      <Download size={15} className="flex-shrink-0" />
      <span className="flex-1">Install VEDA for offline access and a faster experience.</span>
      <button
        onClick={install}
        className="px-3 py-1 rounded bg-white/20 hover:bg-white/30 font-medium text-xs transition-colors flex-shrink-0"
      >
        Install
      </button>
      <button
        onClick={dismiss}
        aria-label="Dismiss install banner"
        className="p-1 rounded hover:bg-white/20 transition-colors flex-shrink-0"
      >
        <X size={14} />
      </button>
    </div>
  );
}
