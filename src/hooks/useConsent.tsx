// src/hooks/useConsent.ts
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie_consent';

export type ConsentState = 'pending' | 'accepted' | 'rejected';

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>('pending');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted' || saved === 'rejected') {
      setConsent(saved);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setConsent('rejected');
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  };

  return { consent, accept, reject };
}