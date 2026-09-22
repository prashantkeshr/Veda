import { useEffect } from 'react';

const BASE_TITLE = 'VEDA — Vital Education & Data Archive';
const BASE_DESC  = 'A connected knowledge platform for engineering, science, and competitive exam preparation.';
const BASE_URL   = 'https://veda.dhurta.org';
const BASE_IMAGE = 'https://veda.dhurta.org/veda-logo.png';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

export function useSEO(title?: string, description?: string, path?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} | VEDA` : BASE_TITLE;
    const desc      = description ?? BASE_DESC;
    const url       = path ? `${BASE_URL}${path}` : BASE_URL + '/';

    document.title = fullTitle;

    // Primary meta
    setMeta('meta[name="description"]',   'content', desc);

    // Canonical
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    // Open Graph
    setMeta('meta[property="og:title"]',       'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', desc);
    setMeta('meta[property="og:url"]',         'content', url);
    setMeta('meta[property="og:image"]',       'content', BASE_IMAGE);

    // Twitter / X Card
    setMeta('meta[name="twitter:title"]',       'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', desc);
    setMeta('meta[name="twitter:image"]',       'content', BASE_IMAGE);

    return () => {
      document.title = BASE_TITLE;
      setMeta('meta[name="description"]',         'content', BASE_DESC);
      setMeta('meta[property="og:title"]',        'content', BASE_TITLE);
      setMeta('meta[property="og:description"]',  'content', BASE_DESC);
      setMeta('meta[property="og:url"]',          'content', BASE_URL + '/');
      setMeta('meta[name="twitter:title"]',       'content', BASE_TITLE);
      setMeta('meta[name="twitter:description"]', 'content', BASE_DESC);
      const can = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (can) can.href = BASE_URL + '/';
    };
  }, [title, description, path]);
}
