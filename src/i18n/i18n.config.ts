import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'uk'] as const;
export const routing = defineRouting({
  defaultLocale: 'en',
  locales,
  localeDetection: true,
  localePrefix: 'as-needed',
});
{
}
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
