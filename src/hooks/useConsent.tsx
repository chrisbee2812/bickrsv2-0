// src/hooks/useConsent.ts
import { useEffect, useState } from 'react';
import { CONSENT_EVENT, CONSENT_STORAGE_KEY, getConsent, type ConsentChoice } from '../lib/consent';

export function useConsent(): ConsentChoice | null {
  const [consent, setConsentState] = useState<ConsentChoice | null>(() => getConsent());

  // useEffect(() => {
  //   const handleStorage = (e: StorageEvent) => {
  //     if (e.key === CONSENT_STORAGE_KEY) setConsentState(getConsent());
  //   };

  //   // Fires for changes in *other* tabs
  //   window.addEventListener('storage', handleStorage);

  //   // Also poll on focus, in case the banner updates localStorage in this tab
  //   const handleFocus = () => setConsentState(getConsent());
  //   window.addEventListener('focus', handleFocus);

  //   return () => {
  //     window.removeEventListener('storage', handleStorage);
  //     window.removeEventListener('focus', handleFocus);
  //   };
  // }, []);

  useEffect(() => {
  const handler = () => setConsentState(getConsent());
  window.addEventListener(CONSENT_EVENT, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(CONSENT_EVENT, handler);
    window.removeEventListener('storage', handler);
  };
}, []);

  return consent;
}