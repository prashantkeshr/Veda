export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function formatPages(pages: number): string {
  return `${pages} pages`;
}

export function truncate(text: string, maxLen = 120): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).trimEnd() + '…';
}

export function slugToTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function difficultyLabel(d: string): string {
  const map: Record<string, string> = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    expert: 'Expert',
  };
  return map[d] ?? d;
}

export function levelLabel(l: string): string {
  const map: Record<string, string> = {
    'primary': 'Primary',
    'secondary': 'Secondary',
    'higher-secondary': 'Class 11–12',
    'diploma': 'Diploma',
    'undergraduate': 'UG / B.Tech',
    'postgraduate': 'PG / M.Tech',
    'doctoral': 'PhD',
    'professional': 'Professional',
    'vocational': 'Vocational',
    'competitive-exam': 'Competitive Exam',
    'certification': 'Certification',
    'skill-development': 'Skill Dev',
    'general': 'General',
  };
  return map[l] ?? l;
}

export function resourceTypeLabel(t: string): string {
  const map: Record<string, string> = {
    pdf: 'PDF',
    doc: 'DOC',
    ppt: 'Presentation',
    xls: 'Spreadsheet',
    image: 'Image',
    text: 'Text',
    markdown: 'Markdown',
    article: 'Article',
    website: 'Website',
    video: 'Video',
    audio: 'Audio',
    'question-paper': 'Question Paper',
    notes: 'Notes',
    syllabus: 'Syllabus',
    assignment: 'Assignment',
    'practice-set': 'Practice Set',
    'mock-test': 'Mock Test',
    notification: 'Notification',
    reference: 'Reference',
  };
  return map[t] ?? t;
}

export function verificationLabel(v: string): string {
  const map: Record<string, string> = {
    official: 'Official',
    verified: 'Verified',
    trusted: 'Trusted',
    community: 'Community',
    unverified: 'Unverified',
    'needs-review': 'Needs Review',
    outdated: 'Outdated',
  };
  return map[v] ?? v;
}

export function highlightMatch(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}
