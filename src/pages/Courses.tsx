import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courseRepo } from '../repositories';
import { Card, Badge, EmptyState, SectionHeader } from '../components/ui';

export function Courses() {
  const [search, setSearch] = useState('');
  const courses = search ? courseRepo.getAll({ search }) : courseRepo.getAll();

  return (
    <div className="space-y-6">
      <SectionHeader title="Courses" description="Degree programmes and exam preparation tracks" />
      <input
        type="search"
        placeholder="Search courses…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md px-3 py-2 text-sm rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
      />

      {courses.length === 0 ? (
        <EmptyState icon={<GraduationCap size={40} />} title="No courses found" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(c => (
            <Link key={c.id} to={`/courses/${c.slug}`}>
              <Card hover className="p-5 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm leading-snug">{c.title}</h3>
                    <p className="text-xs text-stone-400 mt-0.5">{c.durationYears} year{c.durationYears !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">{c.description}</p>
                <div className="flex items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                  <Badge variant="amber" className="capitalize">{c.academicLevel.replace(/-/g, ' ')}</Badge>
                  <span className="text-xs text-stone-400">{c.semesters.length} semesters</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
