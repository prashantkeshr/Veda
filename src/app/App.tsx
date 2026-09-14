import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { UserDataProvider } from './providers/UserDataProvider';
import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter basename="/Veda/">
      <ThemeProvider>
        <UserDataProvider>
          <Router />
        </UserDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
