import { useState } from 'react';
import { Hash } from 'lucide-react';
import { topicRepo, subjectRepo } from '../repositories';
import { TopicCard } from '../components/knowledge/TopicCard';
import { EmptyState, SectionHeader } from '../components/ui';
import { cn } from '../utils/cn';

export function Topics() {
  const [search, setSearch] = useState('');
  const [subjectId, setSubjectId] = useState('');

  const subjects = subjectRepo.getAll();
  const topics = search
    ? topicRepo.getAll({ search })
    : subjectId
    ? topicRepo.getBySubjectId(subjectId)
    : topicRepo.getAll();

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Topics"
        description={`${topics.length} topic${topics.length !== 1 ? 's' : ''} across all subjects`}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search topics…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 text-sm rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
        />
        <select
          value={subjectId}
          onChange={e => setSubjectId(e.target.value)}
          className="px-3 py-2 text-sm rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
        >
          <option value="">All subjects</option>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
        </select>
      </div>

      {topics.length === 0 ? (
        <EmptyState icon={<Hash size={40} />} title="No topics found" description="Try adjusting your search." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topics.map(t => {
            const subjectName = subjectRepo.getById(t.subjectIds[0])?.shortTitle;
            return <TopicCard key={t.id} topic={t} subjectName={subjectName} />;
          })}
        </div>
      )}
    </div>
  );
}
