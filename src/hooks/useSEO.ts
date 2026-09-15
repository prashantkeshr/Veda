import { useEffect } from 'react';

const BASE_TITLE = 'VEDA — Vital Education & Data Archive';
const BASE_DESC = 'A connected knowledge platform for engineering, science, and competitive exam preparation.';

export function useSEO(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | VEDA` : BASE_TITLE;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = description ?? BASE_DESC;
    return () => {
      document.title = BASE_TITLE;
      if (meta) meta.content = BASE_DESC;
    };
  }, [title, description]);
}
