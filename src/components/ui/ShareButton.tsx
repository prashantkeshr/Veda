import { useState } from 'react';
import { Share2, Check, Link } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ShareButtonProps {
  title: string;
  className?: string;
}

export function ShareButton({ title, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled or API failed — fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked — silent fail
    }
  }

  return (
    <button
      onClick={handleShare}
      aria-label={copied ? 'Link copied' : 'Share this page'}
      title={copied ? 'Link copied!' : 'Share'}
      className={cn(
        'flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors',
        'border border-stone-200 dark:border-stone-700',
        copied
          ? 'text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20'
          : 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-300',
        'no-print',
        className
      )}
    >
      {copied ? <Check size={13} /> : 'share' in navigator ? <Share2 size={13} /> : <Link size={13} />}
      {copied ? 'Copied!' : 'Share'}
    </button>
  );
}
