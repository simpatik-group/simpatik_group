import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Locale, locales } from './i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locales.includes(locale as Locale)) {
    return notFound();
  }

  return { locale };
});
