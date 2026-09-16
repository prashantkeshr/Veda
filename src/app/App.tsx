import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { UserDataProvider } from './providers/UserDataProvider';
import { Router } from './Router';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';
import { PWAUpdatePrompt } from '../components/ui/PWAUpdatePrompt';

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <ThemeProvider>
          <UserDataProvider>
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </UserDataProvider>
        </ThemeProvider>
      </BrowserRouter>
      <PWAUpdatePrompt />
    </ErrorBoundary>
  );
}
