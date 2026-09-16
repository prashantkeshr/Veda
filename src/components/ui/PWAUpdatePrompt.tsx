import { useRegisterSW } from 'virtual:pwa-register/react';

export function PWAUpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    // Check for updates every 30 minutes while the tab is open
    onRegistered(registration) {
      if (registration) {
        setInterval(() => registration.update(), 30 * 60 * 1000);
      }
    },
  });

  if (!needRefresh) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-lg dark:border-stone-700 dark:bg-stone-900"
    >
      <span className="text-sm text-stone-700 dark:text-stone-200">
        New content available
      </span>
      <button
        onClick={() => updateServiceWorker(true)}
        className="rounded-lg bg-veda-700 px-3 py-1 text-sm font-medium text-white hover:bg-veda-800 focus-visible:outline-2"
      >
        Reload
      </button>
      <button
        onClick={() => setNeedRefresh(false)}
        aria-label="Dismiss"
        className="ml-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
      >
        ✕
      </button>
    </div>
  );
}
