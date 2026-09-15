import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import { SiteFooter } from './SiteFooter';
import { InstallBanner } from '../ui/InstallBanner';
import { ScrollToTop } from '../ui/ScrollToTop';
import { ReadingProgress } from '../ui/ReadingProgress';
import { OfflineBanner } from '../ui/OfflineBanner';
import { OnboardingModal, useOnboarding } from '../onboarding/OnboardingModal';

export function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState('');
  const showOnboarding = useOnboarding();

  // Global Ctrl+K / Cmd+K → focus search
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        navigate('/search');
        setTimeout(() => {
          const el = document.getElementById('veda-search-input');
          if (el) (el as HTMLInputElement).focus();
        }, 50);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    const title = document.title.replace(' | VEDA', '').replace(' — Vital Education & Data Archive', '');
    setAnnouncement(`Navigated to ${title}`);
  }, [pathname]);

  return (
    <div className="flex h-screen bg-stone-50 dark:bg-stone-950 overflow-hidden">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-veda-700 focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Screen reader route announcer */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuOpen={() => setSidebarOpen(true)} />
        <OfflineBanner />
        <InstallBanner />

        <main
          id="main-content"
          ref={mainRef}
          className="flex-1 overflow-y-auto pb-16 lg:pb-0"
          tabIndex={-1}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8">
            <Outlet />
            <SiteFooter />
          </div>
        </main>
      </div>

      <ScrollToTop />
      <ReadingProgress />
      <BottomNav />
      {showOnboarding && <OnboardingModal />}
    </div>
  );
}
