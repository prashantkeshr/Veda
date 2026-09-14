import { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { examRepo } from '../repositories';
import { Card, Badge, EmptyState, SectionHeader } from '../components/ui';

export function Exams() {
  const [search, setSearch] = useState('');
  const exams = search ? examRepo.getAll({ search }) : examRepo.getAll();

  return (
    <div className="space-y-6">
      <SectionHeader title="Exams" description="Competitive and entrance examinations" />
      <input
        type="search"
        placeholder="Search exams…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md px-3 py-2 text-sm rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
      />

      {exams.length === 0 ? (
        <EmptyState icon={<ClipboardList size={40} />} title="No exams found" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map(e => (
            <Link key={e.id} to={`/exams/${e.slug}`}>
              <Card hover className="p-5 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                    <ClipboardList size={18} className="text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{e.title}</h3>
                    <p className="text-xs text-stone-400 mt-0.5">{e.conductingBody}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">{e.description}</p>
                <div className="flex items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                  <Badge variant="red" className="capitalize">{e.type}</Badge>
                  <span className="text-xs text-stone-400">{e.level}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
