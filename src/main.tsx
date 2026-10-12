// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.tsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './index.css';
import { ConsentBanner } from './components/ConsentBanner.tsx';

const GA_ID = 'G-8HNVQE69CC';
const saved = localStorage.getItem('cookie_consent');

if (saved === 'accepted') {
  ReactGA.initialize(GA_ID);
  window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ConsentBanner />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);