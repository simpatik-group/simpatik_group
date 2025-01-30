'use client';

import { keyofELocalization } from '@/interfaces/enums';

export const formatDate = (
  date: string,
  option: Intl.DateTimeFormatOptions,
  locale: keyofELocalization,
): string => {
  const localDate = new Date(date);
  let userLocale = 'en-US';

  switch (locale) {
    case 'uk':
      userLocale = 'ua-Uk';
      break;
    default:
      break;
  }

  const formatter = new Intl.DateTimeFormat(userLocale, option);

  const parts = formatter.formatToParts(localDate);
  // const parts = formatter.format(localDate); for full date

  const formattedDate = parts
    .filter((part) => part.type !== 'literal' && part.type !== 'era')
    .map((part) => part.value)
    .join(' ');
  return formattedDate;
};
