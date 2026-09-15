import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-stone-200 dark:border-stone-800 py-6 px-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <img src="/veda-logo-sm.png" alt="VEDA" className="w-7 h-7 rounded-lg object-cover flex-shrink-0" />
          <div>
            <div className="text-xs font-semibold text-stone-700 dark:text-stone-400 leading-tight">
              VEDA — Vital Education &amp; Data Archive
            </div>
            <div className="text-[11px] text-stone-400 dark:text-stone-600 leading-tight mt-0.5">
              &copy; 2024–2026 Virtual Education Development Association · Dhurta.Org
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-4 text-xs text-stone-400 dark:text-stone-600" aria-label="Footer navigation">
          <Link to="/about"   className="hover:text-veda-700 dark:hover:text-veda-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-veda-700 dark:hover:text-veda-400 transition-colors">Contact</Link>
          <Link to="/legal"   className="hover:text-veda-700 dark:hover:text-veda-400 transition-colors">Legal</Link>
          <a
            href="mailto:contact@dhurta.org"
            className="hover:text-veda-700 dark:hover:text-veda-400 transition-colors"
          >
            contact@dhurta.org
          </a>
        </nav>

      </div>
    </footer>
  );
}
