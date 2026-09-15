import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export function OfflineBanner() {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const goOffline = () => setOffline(true);
    const goOnline  = () => setOffline(false);
    window.addEventListener('offline', goOffline);
    window.addEventListener('online',  goOnline);
    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online',  goOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      role="status"
      aria-live="assertive"
      className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-medium no-print"
    >
      <WifiOff size={13} className="flex-shrink-0" />
      You are offline — VEDA is available from cache, but some content may be unavailable.
    </div>
  );
}
