import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useTheme } from '../app/providers/ThemeProvider';
import { useUserData } from '../app/providers/UserDataProvider';
import { assessmentsDB } from '../db/assessments';
import { getAllProgress, getAllBookmarks, getAllQuizAttempts } from '../db';
import {
  Settings2, Sun, Moon, Monitor, Download, Smartphone,
  Database, Trash2, CheckCircle, AlertTriangle, Info,
} from 'lucide-react';
import { cn } from '../utils/cn';

// ── Section wrapper ───────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-stone-100 dark:border-stone-800">
        <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wide">{title}</h2>
      </div>
      <div className="divide-y divide-stone-100 dark:divide-stone-800">
        {children}
      </div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-4 px-5 py-4">{children}</div>;
}

function RowLabel({ title, description }: { title: string; description?: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{title}</p>
      {description && <p className="text-xs text-stone-400 mt-0.5">{description}</p>}
    </div>
  );
}

// ── Confirm dialog ────────────────────────────────────────────────────────

function ConfirmDialog({ message, onConfirm, onCancel }: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-stone-200 dark:border-stone-700 max-w-sm w-full p-6 space-y-4">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-stone-700 dark:text-stone-300">{message}</p>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
          >
            Delete Everything
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Settings() {
  useSEO('Settings', 'App preferences, data management, and install options for VEDA.');
  const { theme, setTheme } = useTheme();
  const { canInstall, installed, install } = usePWAInstall();
  const { quizAttempts, bookmarks, progressMap } = useUserData();

  const [exportStatus, setExportStatus] = useState<Status>('idle');
  const [clearStatus, setClearStatus] = useState<Status>('idle');
  const [showConfirm, setShowConfirm] = useState(false);

  const themes = [
    { key: 'light' as const, icon: Sun, label: 'Light' },
    { key: 'system' as const, icon: Monitor, label: 'System' },
    { key: 'dark' as const, icon: Moon, label: 'Dark' },
  ];

  async function exportData() {
    setExportStatus('loading');
    try {
      const [progress, bmarks, attempts, sessions] = await Promise.all([
        getAllProgress(),
        getAllBookmarks(),
        getAllQuizAttempts(),
        assessmentsDB.getAllSessions(),
      ]);
      const data = {
        exportedAt: new Date().toISOString(),
        version: '1.0',
        platform: 'VEDA — Vital Education & Data Archive',
        progress,
        bookmarks: bmarks,
        quizAttempts: attempts,
        quizSessions: sessions,
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `veda-export-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportStatus('success');
      setTimeout(() => setExportStatus('idle'), 3000);
    } catch {
      setExportStatus('error');
      setTimeout(() => setExportStatus('idle'), 3000);
    }
  }

  async function clearAllData() {
    setShowConfirm(false);
    setClearStatus('loading');
    try {
      const databases = ['veda-user-data', 'veda-studio', 'veda-assessments'];
      await Promise.all(databases.map(name =>
        new Promise<void>((resolve, reject) => {
          const req = indexedDB.deleteDatabase(name);
          req.onsuccess = () => resolve();
          req.onerror = () => reject(req.error);
          req.onblocked = () => resolve(); // proceed even if blocked
        })
      ));
      // Clear localStorage keys
      const keysToRemove = Object.keys(localStorage).filter(k => k.startsWith('veda-'));
      keysToRemove.forEach(k => { try { localStorage.removeItem(k); } catch {} });
      setClearStatus('success');
      setTimeout(() => { setClearStatus('idle'); window.location.reload(); }, 1500);
    } catch {
      setClearStatus('error');
      setTimeout(() => setClearStatus('idle'), 3000);
    }
  }

  const totalTopics = Object.keys(progressMap).length;
  const completed = Object.values(progressMap).filter(s => s === 'completed').length;

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-8">
      {showConfirm && (
        <ConfirmDialog
          message="This will permanently delete all your progress, bookmarks, quiz history, and Content Studio data. This cannot be undone."
          onConfirm={clearAllData}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-stone-700 flex items-center justify-center">
          <Settings2 size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Settings</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">Preferences and data management</p>
        </div>
      </div>

      {/* Appearance */}
      <Section title="Appearance">
        <Row>
          <RowLabel title="Theme" description="Controls the colour scheme across the app" />
          <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-1 gap-0.5">
            {themes.map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                aria-label={`${label} theme`}
                title={label}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
                  theme === key
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                )}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </Row>
      </Section>

      {/* Install */}
      <Section title="Install App">
        <Row>
          <RowLabel
            title="Add to Home Screen"
            description={installed
              ? 'VEDA is installed — enjoy offline access and faster loading'
              : 'Install VEDA as an app for offline access and a native-like experience'}
          />
          {installed ? (
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex-shrink-0">
              <CheckCircle size={15} />
              Installed
            </div>
          ) : canInstall ? (
            <button
              onClick={install}
              className="flex items-center gap-1.5 px-4 py-2 bg-veda-700 text-white rounded-lg text-sm font-medium hover:bg-veda-800 transition-colors flex-shrink-0"
            >
              <Download size={14} />
              Install
            </button>
          ) : (
            <div className="flex items-center gap-1.5 text-stone-400 text-xs text-right flex-shrink-0 max-w-[160px]">
              <Smartphone size={14} className="flex-shrink-0" />
              Use browser menu to install
            </div>
          )}
        </Row>
      </Section>

      {/* Data */}
      <Section title="Your Data">
        <Row>
          <RowLabel title="Summary" description="Stored locally in your browser (IndexedDB)" />
          <div className="text-right flex-shrink-0">
            <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 tabular-nums">
              {completed}/{totalTopics} topics · {quizAttempts.length} quizzes · {bookmarks.length} bookmarks
            </div>
            <div className="text-xs text-stone-400 mt-0.5">on this device</div>
          </div>
        </Row>

        <Row>
          <RowLabel
            title="Export Data"
            description="Download all your progress, bookmarks, and quiz history as JSON"
          />
          <button
            onClick={exportData}
            disabled={exportStatus === 'loading'}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0',
              exportStatus === 'success'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                : exportStatus === 'error'
                ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            )}
          >
            {exportStatus === 'success'
              ? <><CheckCircle size={14} /> Downloaded</>
              : exportStatus === 'error'
              ? <><AlertTriangle size={14} /> Failed</>
              : <><Database size={14} /> Export</>
            }
          </button>
        </Row>

        <Row>
          <RowLabel
            title="Clear All Data"
            description="Permanently delete all progress, bookmarks, quizzes, and studio content"
          />
          <button
            onClick={() => setShowConfirm(true)}
            disabled={clearStatus === 'loading'}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0',
              clearStatus === 'success'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30'
            )}
          >
            {clearStatus === 'loading'
              ? 'Clearing…'
              : clearStatus === 'success'
              ? <><CheckCircle size={14} /> Cleared</>
              : <><Trash2 size={14} /> Clear Data</>
            }
          </button>
        </Row>
      </Section>

      {/* About */}
      <Section title="About">
        {[
          { label: 'Platform', value: 'VEDA — Vital Education & Data Archive' },
          { label: 'Organisation', value: 'Dhurta.Org · VEDA Association' },
          { label: 'Focus', value: 'Engineering, Science & Competitive Exam Prep' },
          { label: 'Storage', value: 'IndexedDB (local-only, no server)' },
          { label: 'Version', value: 'Phase 10 Build' },
        ].map(({ label, value }) => (
          <Row key={label}>
            <span className="text-sm text-stone-500 dark:text-stone-400">{label}</span>
            <span className="text-sm text-stone-900 dark:text-stone-100 text-right max-w-[60%]">{value}</span>
          </Row>
        ))}
        <div className="px-5 py-4 flex items-start gap-2 text-xs text-stone-400">
          <Info size={13} className="flex-shrink-0 mt-0.5" />
          All your data is stored exclusively on this device. Exporting before clearing is recommended.
        </div>
      </Section>
    </div>
  );
}
