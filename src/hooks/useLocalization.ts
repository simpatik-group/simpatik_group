import { useContext } from 'react';

import {
  ILocalizationContext,
  LocalizationContext,
} from '@/context/localization.context';

export function useLocalization<Key extends keyof ILocalizationContext>(
  key: Key,
) {
  const context = useContext(LocalizationContext);
  const selector = context && context[key];

  if (!context) {
    throw new Error(
      'useLocalization must be used within a LocalizationProvider',
    );
  }

  return selector;
}
