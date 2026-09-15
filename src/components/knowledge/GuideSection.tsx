import { cn } from '../../utils/cn';

interface Props {
  guide: string;
  className?: string;
}

function parseGuide(text: string): Array<{ type: 'h2' | 'h3' | 'ul' | 'p'; content: string; items?: string[] }> {
  const blocks: Array<{ type: 'h2' | 'h3' | 'ul' | 'p'; content: string; items?: string[] }> = [];
  const paragraphs = text.split(/\n\n+/);

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'h2', content: trimmed.slice(3).trim() });
    } else if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'h3', content: trimmed.slice(4).trim() });
    } else if (trimmed.split('\n').every(l => l.trimStart().startsWith('- ') || l.trimStart().startsWith('* '))) {
      const items = trimmed.split('\n').map(l => l.trimStart().slice(2));
      blocks.push({ type: 'ul', content: '', items });
    } else {
      blocks.push({ type: 'p', content: trimmed });
    }
  }
  return blocks;
}

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="px-1 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-xs font-mono">$1</code>');
}

export function GuideSection({ guide, className }: Props) {
  const blocks = parseGuide(guide);

  return (
    <div className={cn('prose prose-stone dark:prose-invert max-w-none text-sm', className)}>
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={i}
              className="text-base font-bold text-stone-800 dark:text-stone-100 mt-5 mb-2 first:mt-0"
            >
              {block.content}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3
              key={i}
              className="text-sm font-semibold text-stone-700 dark:text-stone-200 mt-4 mb-1.5"
            >
              {block.content}
            </h3>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1 my-2">
              {(block.items ?? []).map((item, j) => (
                <li
                  key={j}
                  className="text-stone-600 dark:text-stone-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderInline(item) }}
                />
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="text-stone-600 dark:text-stone-400 leading-relaxed my-2"
            dangerouslySetInnerHTML={{ __html: renderInline(block.content) }}
          />
        );
      })}
    </div>
  );
}
