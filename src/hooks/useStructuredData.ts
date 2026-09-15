import { useEffect, useMemo } from 'react';

export const LD_BASE = 'https://veda.dhurta.org';

export const LD_PROVIDER = {
  '@type': 'Organization',
  name: 'VEDA — Vital Education & Data Archive',
  url: LD_BASE + '/',
  logo: LD_BASE + '/veda-logo.png',
} as const;

export function useStructuredData(data: Record<string, unknown> | null) {
  // Stringify once — stable as long as content hasn't changed
  const json = useMemo(
    () => (data ? JSON.stringify(data) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data ? JSON.stringify(data) : null],
  );

  useEffect(() => {
    const existing = document.getElementById('veda-page-ld') as HTMLScriptElement | null;
    if (!json) {
      existing?.remove();
      return;
    }
    const el = existing ?? document.createElement('script');
    el.id = 'veda-page-ld';
    el.type = 'application/ld+json';
    el.textContent = json;
    if (!existing) document.head.appendChild(el);
    return () => { document.getElementById('veda-page-ld')?.remove(); };
  }, [json]);
}
