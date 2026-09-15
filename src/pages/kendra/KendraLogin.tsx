import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const SESSION_KEY = 'vk-auth';
const DEFAULT_HASH = 'b171e4ad30c4b17020a1e2f1be4dd66ab7ffb0f45dfc849c5a7ba6ba0942bc83';
const STORED_HASH = String(import.meta.env['VITE_KENDRA_HASH'] || DEFAULT_HASH);

async function hashPasskey(passkey: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(passkey));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function KendraLogin() {
  const navigate = useNavigate();
  const [passkey, setPasskey]   = useState('');
  const [showKey, setShowKey]   = useState(false);
  const [error,   setError]     = useState('');
  const [loading, setLoading]   = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!passkey.trim()) return;
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 600));
    const hash = await hashPasskey(passkey);
    if (hash === STORED_HASH) {
      sessionStorage.setItem(SESSION_KEY, '1');
      navigate('/veda-kendra/dashboard', { replace: true });
    } else {
      setError('Incorrect passkey. Try again.');
      setPasskey('');
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-veda-700 flex items-center justify-center mb-3 shadow-lg shadow-black/40">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
          <h1 className="text-lg font-bold text-stone-100 tracking-tight">VEDA Kendra</h1>
          <p className="text-xs text-stone-500 mt-0.5">Content Management System</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">
              Access Passkey
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
              <input
                ref={inputRef}
                type={showKey ? 'text' : 'password'}
                value={passkey}
                onChange={e => setPasskey(e.target.value)}
                placeholder="Enter passkey"
                autoComplete="current-password"
                autoFocus
                className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-600 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowKey(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 transition-colors"
                aria-label={showKey ? 'Hide passkey' : 'Show passkey'}
              >
                {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !passkey.trim()}
            className="w-full py-2.5 rounded-lg bg-veda-600 hover:bg-veda-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            {loading
              ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <ShieldCheck size={14} />
            }
            {loading ? 'Verifying…' : 'Enter Kendra'}
          </button>
        </form>

        <p className="text-center text-[11px] text-stone-700 mt-8">
          Dhurta.Org · VEDA Platform
        </p>
      </div>
    </div>
  );
}
