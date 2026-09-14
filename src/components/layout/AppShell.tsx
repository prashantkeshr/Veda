import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

export function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-stone-50 dark:bg-stone-950 overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuOpen={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto pb-16 lg:pb-0">
          <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
