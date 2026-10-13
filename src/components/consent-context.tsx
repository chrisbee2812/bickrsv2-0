// context/ConsentContext.tsx

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing?: boolean; // if you need more categories
};

type ConsentContextType = {
  consent: ConsentState;
  updateConsent: (newConsent: Partial<ConsentState>) => void;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  resetConsent: () => void;
};

const defaultConsent: ConsentState = {
  necessary: true,  // always true – necessary cookies can't be rejected
  analytics: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [showBanner, setShowBanner] = useState(false);

  // Load saved consent from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('consent');
    if (saved) {
      setConsent(JSON.parse(saved));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  // Save to localStorage and update Google Consent Mode whenever consent changes
  useEffect(() => {
    localStorage.setItem('consent', JSON.stringify(consent));
    updateGoogleConsent(consent);
  }, [consent]);

  const updateConsent = (newConsent: Partial<ConsentState>) => {
    setConsent(prev => ({ ...prev, ...newConsent }));
    setShowBanner(false);
  };

  const acceptAll = () => {
    setConsent({ necessary: true, analytics: true });
    setShowBanner(false);
  };

  const rejectAll = () => {
    setConsent({ necessary: true, analytics: false });
    setShowBanner(false);
  };

  const resetConsent = () => {
  setConsent({ necessary: true, analytics: false });
  setShowBanner(true);
  localStorage.removeItem('consent');
};

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, showBanner, acceptAll, rejectAll, resetConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('useConsent must be used within ConsentProvider');
  return context;
};

// Helper to signal consent to Google
function updateGoogleConsent(consent: ConsentState) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
    });
  }
}