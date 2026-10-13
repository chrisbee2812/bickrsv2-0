// src/lib/consent.ts
export type ConsentChoice = 'accepted' | 'rejected';

export const CONSENT_STORAGE_KEY = 'cookie_consent';

export const CONSENT_EVENT = 'cookie-consent-change';

/**
 * Read the current cookie consent value from localStorage.
 * Returns `null` if the user hasn't made a choice yet.
 */
export function getConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

/**
 * Persist a consent choice. (Optional – the banner already does this.)
 */
export function setConsent(choice: ConsentChoice): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

/**
 * Remove the stored consent (e.g. for a "reset" button or testing).
 */
export function clearConsent(): void {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}

/**
 * Returns true only if the user explicitly accepted.
 */
export function hasAnalyticsConsent(): boolean {
  return getConsent() === 'accepted';
}