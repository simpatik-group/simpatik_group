import { getRequestConfig } from 'next-intl/server';

import { Locale, locales, routing } from './i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locales.includes(locale as Locale)) {
    return { locale: routing.defaultLocale };
  }

  return { locale };
});
