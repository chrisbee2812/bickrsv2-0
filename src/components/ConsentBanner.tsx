// src/components/ConsentBanner.tsx
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie_consent';

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  if (!visible) return null;

  const handleChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem(STORAGE_KEY, choice);
    window.gtag?.('consent', 'update', { analytics_storage: choice === 'accepted' ? 'granted' : 'denied' });
    setVisible(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#1a1a1a', color: '#fff', padding: '1rem', zIndex: 9999, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
      <p style={{ margin: 0, fontSize: '0.875rem' }}>
        This site uses cookies for analytics. Choose how you'd like to proceed.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => handleChoice('accepted')} style={{ background: '#4CAF50', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
          Accept
        </button>
        <button onClick={() => handleChoice('rejected')} style={{ background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
          Reject
        </button>
      </div>
    </div>
  );
}