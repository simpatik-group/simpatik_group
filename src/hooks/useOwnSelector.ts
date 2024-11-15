import { useContext } from 'react';

import {
  ILocalizationContext,
  LocalizationContext,
} from '@/context/localization.context';

export function useOwnSelector<Key extends keyof ILocalizationContext>(
  key: Key,
) {
  const context = useContext(LocalizationContext);
  const selector = context && context[key];

  if (!context) {
    throw new Error(
      'useOwnSelector must be used within a LocalizationProvider',
    );
  }

  return selector;
}
