import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
        <FloatingCTA />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
