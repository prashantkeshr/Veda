import { LayoutGrid } from 'lucide-react';
import { EmptyState } from '../components/ui';

export function ContentStudio() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Content Studio</h1>
      <EmptyState
        icon={<LayoutGrid size={40} />}
        title="Content management tools"
        description="Create, edit, and publish subjects, topics, and resources. Coming in a future phase."
      />
    </div>
  );
}
