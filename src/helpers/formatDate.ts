'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { keyofELocalization } from '@/interfaces/enums';

const modifyUkrainianLocale = () => {
  const ukLocale = dayjs.Ls['uk'];
  if (ukLocale && ukLocale.formats) {
    ukLocale.formats.LL = 'D MMMM YYYY';
  }
};

modifyUkrainianLocale();

export const formatDate = (
  date: string,
  option: Intl.DateTimeFormatOptions,
  locale: keyofELocalization,
): string => {
  dayjs.extend(localizedFormat);
  return dayjs(date).locale(locale).format('LL');
};
