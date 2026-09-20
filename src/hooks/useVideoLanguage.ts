import { useState, useCallback } from 'react';

export type VideoLanguage = 'en' | 'hi' | 'ta' | 'te' | 'mr' | 'bn';

export const VIDEO_LANGUAGES: { code: VideoLanguage; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'en', label: 'English',  nativeLabel: 'English',  flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi',    nativeLabel: 'हिंदी',    flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil',    nativeLabel: 'தமிழ்',    flag: '🇮🇳' },
  { code: 'te', label: 'Telugu',   nativeLabel: 'తెలుగు',   flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi',  nativeLabel: 'मराठी',   flag: '🇮🇳' },
  { code: 'bn', label: 'Bengali',  nativeLabel: 'বাংলা',    flag: '🇮🇳' },
];

const STORAGE_KEY = 'veda-video-lang';

function detectDefaultLanguage(): VideoLanguage {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as VideoLanguage | null;
    if (stored && VIDEO_LANGUAGES.some(l => l.code === stored)) return stored;
  } catch {}
  // Auto-detect from browser
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  const match = VIDEO_LANGUAGES.find(l => l.code === browserLang);
  return match?.code ?? 'en';
}

export function useVideoLanguage() {
  const [lang, setLangState] = useState<VideoLanguage>(detectDefaultLanguage);

  const setLang = useCallback((code: VideoLanguage) => {
    setLangState(code);
    try { localStorage.setItem(STORAGE_KEY, code); } catch {}
  }, []);

  return { lang, setLang, languages: VIDEO_LANGUAGES };
}
