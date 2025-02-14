import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { ELocalization } from '@/interfaces/enums';

export const locales = Object.values(ELocalization);
export const routing = defineRouting({
  defaultLocale: ELocalization.en,
  locales,
  localeDetection: true,
  localePrefix: 'as-needed',
});
{
}
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
