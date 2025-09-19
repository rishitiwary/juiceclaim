'use client';

import { useEffect } from 'react';
import '../lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialize i18n
    const initI18n = async () => {
      await import('@/lib/i18n');
    };
    initI18n();
  }, []);

  return <>{children}</>;
}
