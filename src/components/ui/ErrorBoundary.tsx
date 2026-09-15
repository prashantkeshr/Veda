import { Component, type ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  override render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    if (this.props.fallback) return this.props.fallback;

    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-4">
        <div className="w-14 h-14 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
          <AlertTriangle size={24} className="text-red-500" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Something went wrong</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-sm">
            An unexpected error occurred. Refresh the page or go back to try again.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => this.setState({ error: null })}
            className="px-4 py-2 text-sm rounded-md bg-veda-700 text-white hover:bg-veda-800 transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => { window.location.href = '/'; }}
            className="px-4 py-2 text-sm rounded-md border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          >
            Go home
          </button>
        </div>
        {import.meta.env.DEV && (
          <details className="text-left max-w-lg w-full">
            <summary className="text-xs text-stone-400 cursor-pointer">Error details (dev only)</summary>
            <pre className="mt-2 text-[11px] bg-stone-100 dark:bg-stone-900 rounded p-3 overflow-auto text-red-600 dark:text-red-400 whitespace-pre-wrap">
              {error.stack ?? error.message}
            </pre>
          </details>
        )}
      </div>
    );
  }
}
