'use client';

export function setStoredLocale(locale: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('factora-ledger-locale', locale);
  // Set cookie for next-intl middleware
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
}
