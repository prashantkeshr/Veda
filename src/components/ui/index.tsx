export { ErrorBoundary } from './ErrorBoundary';

import { type ReactNode, type ButtonHTMLAttributes, type HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

// ── Button ─────────────────────────────────────────────────────────────

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses: Record<string, string> = {
  primary: 'bg-veda-700 text-white hover:bg-veda-800 dark:bg-veda-500 dark:hover:bg-veda-600',
  secondary: 'bg-stone-100 text-stone-800 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700',
  ghost: 'text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800',
  outline: 'border border-stone-300 text-stone-700 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-800',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm rounded',
  md: 'px-4 py-2 text-sm rounded-md',
  lg: 'px-5 py-2.5 text-base rounded-md',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', size = 'md', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';

// ── Badge ──────────────────────────────────────────────────────────────

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'teal';
}

const badgeVariants: Record<string, string> = {
  default: 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
  blue: 'bg-veda-50 text-veda-700 dark:bg-veda-900/40 dark:text-veda-300',
  green: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  amber: 'bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  red: 'bg-red-50 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  purple: 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  teal: 'bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
};

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold',
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}

// ── Card ───────────────────────────────────────────────────────────────

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg',
        hover && 'hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-sm transition-all cursor-pointer',
        className
      )}
      {...props}
    />
  );
}

// ── Spinner ────────────────────────────────────────────────────────────

export function Spinner({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sz = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';
  return (
    <svg className={cn('animate-spin text-veda-700 dark:text-veda-400', sz, className)} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

// ── EmptyState ─────────────────────────────────────────────────────────

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      {icon && <div className="mb-4 text-stone-300 dark:text-stone-700">{icon}</div>}
      <h3 className="text-base font-semibold text-stone-700 dark:text-stone-300 mb-1">{title}</h3>
      {description && <p className="text-sm text-stone-500 dark:text-stone-500 max-w-xs">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

// ── DifficultyBadge ────────────────────────────────────────────────────

export function DifficultyBadge({ level }: { level: string }) {
  const map: Record<string, { variant: BadgeProps['variant']; label: string }> = {
    beginner: { variant: 'green', label: 'Beginner' },
    intermediate: { variant: 'amber', label: 'Intermediate' },
    advanced: { variant: 'red', label: 'Advanced' },
    expert: { variant: 'purple', label: 'Expert' },
  };
  const { variant = 'default', label = level } = map[level] ?? {};
  return <Badge variant={variant}>{label}</Badge>;
}

// ── ResourceTypeBadge ──────────────────────────────────────────────────

const typeConfig: Record<string, { variant: BadgeProps['variant']; label: string }> = {
  pdf: { variant: 'red', label: 'PDF' },
  notes: { variant: 'blue', label: 'Notes' },
  video: { variant: 'purple', label: 'Video' },
  article: { variant: 'teal', label: 'Article' },
  'question-paper': { variant: 'amber', label: 'PYQ' },
  'practice-set': { variant: 'green', label: 'Practice' },
  'mock-test': { variant: 'amber', label: 'Mock Test' },
  syllabus: { variant: 'default', label: 'Syllabus' },
  reference: { variant: 'default', label: 'Reference' },
  website: { variant: 'teal', label: 'Website' },
};

export function ResourceTypeBadge({ type }: { type: string }) {
  const { variant = 'default', label = type } = typeConfig[type] ?? {};
  return <Badge variant={variant}>{label}</Badge>;
}

// ── VerificationBadge ──────────────────────────────────────────────────

export function VerificationBadge({ status }: { status: string }) {
  const map: Record<string, { variant: BadgeProps['variant']; label: string }> = {
    official: { variant: 'blue', label: '✓ Official' },
    verified: { variant: 'green', label: '✓ Verified' },
    trusted: { variant: 'green', label: '✓ Trusted' },
    community: { variant: 'default', label: 'Community' },
    unverified: { variant: 'amber', label: 'Unverified' },
    'needs-review': { variant: 'amber', label: 'Needs Review' },
    outdated: { variant: 'red', label: 'Outdated' },
  };
  const { variant = 'default', label = status } = map[status] ?? {};
  return <Badge variant={variant}>{label}</Badge>;
}

// ── Divider ────────────────────────────────────────────────────────────

export function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-stone-200 dark:border-stone-800', className)} />;
}

// ── Section Header ─────────────────────────────────────────────────────

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({ title, description, action, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4 mb-4', className)}>
      <div>
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">{title}</h2>
        {description && <p className="text-sm text-stone-500 dark:text-stone-500 mt-0.5">{description}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
