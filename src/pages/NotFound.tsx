import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/ui';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-6xl font-black text-stone-200 dark:text-stone-800 mb-4">404</div>
      <h1 className="text-xl font-bold text-stone-800 dark:text-stone-200 mb-2">Page not found</h1>
      <p className="text-sm text-stone-500 mb-6 max-w-xs">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary" className="gap-2">
          <Home size={15} /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
