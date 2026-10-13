import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './index.css';
import { ConsentBanner } from './components/ConsentBanner';
import { useConsent } from './hooks/useConsent';

function Root() {
  const consent = useConsent();
  const analyticsAllowed = consent === 'accepted';

  return (
    <StrictMode>
      <App />
      <ConsentBanner />
      {analyticsAllowed && <Analytics />}
      {analyticsAllowed && <SpeedInsights />}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);