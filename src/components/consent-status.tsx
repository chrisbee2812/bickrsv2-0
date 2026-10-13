
// src/components/ConsentStatus.tsx
import { useConsent } from '../hooks/useConsent';
import { setConsent } from '../lib/consent';

export default function ConsentStatus() {
  const consent = useConsent();
  const isActive = consent === 'accepted';

  const handleToggle = () => {
    // If active -> reject. If inactive/undecided -> accept.
    const next = isActive ? 'rejected' : 'accepted';
    setConsent(next);

    // Keep Google Consent Mode in sync
    window.gtag?.('consent', 'update', {
      analytics_storage: next === 'accepted' ? 'granted' : 'denied',
    });
  };

  return (
    <div>
      <p className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded">
        <span className="font-semibold">Current consent status:</span>{' '}
        Google Analytics cookies are currently{' '}
        <strong className={isActive ? 'text-green-600' : 'text-red-600'}>
          {isActive ? 'active' : 'inactive'}
        </strong>{' '}
        because you {isActive ? 'have given' : 'have not given'} consent
        {isActive ? '.' : ' (or have withdrawn it).'}
      </p>

      <button
        onClick={handleToggle}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {isActive ? 'Deactivate cookies' : 'Activate cookies'}
      </button>
    </div>
  );
}