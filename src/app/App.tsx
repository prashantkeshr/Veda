import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { UserDataProvider } from './providers/UserDataProvider';
import { Router } from './Router';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/Veda/">
        <ThemeProvider>
          <UserDataProvider>
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </UserDataProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
