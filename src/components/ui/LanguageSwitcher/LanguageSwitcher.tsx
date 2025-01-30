'use client';

import { FC, useEffect } from 'react';

import clsx from 'clsx';
import { useParams, useSearchParams } from 'next/navigation';

import { EColor } from '@/interfaces/enums';

import { deleteCookie, getCookie } from '@/helpers/helperCookie';
import { staticValues } from '@/helpers/staticValues';

import styles from './LanguageSwitcher.module.scss';
import { ILanguageSwitcher } from './LanguageSwitcher.props';
import {
  type Locale,
  locales,
  usePathname,
  useRouter,
} from '@/i18n/i18n.config';

const LanguageSwitcher: FC<ILanguageSwitcher> = ({ themeColor, className }) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const changeLocale = (event: React.MouseEvent<HTMLSpanElement>) => {
    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });
    const newLocale = event.currentTarget?.dataset.lang as Locale;
    const cookies = getCookie(staticValues.COOKIE_LOCALIZATION_NEWS);
    if (typeof cookies !== 'undefined') {
      const pathnameArr = pathname.replace(/\/$/, '').split('/');

      let newPathname: string | undefined;
      let localizationsCookie;

      try {
        localizationsCookie = JSON.parse(cookies);
      } catch (error) {}

      if (localizationsCookie && localizationsCookie[newLocale]) {
        pathnameArr.splice(2, 1, localizationsCookie[newLocale]);
      } else {
        pathnameArr.splice(2, 1);
      }
      newPathname = pathnameArr.join('/');

      deleteCookie(staticValues.COOKIE_LOCALIZATION_NEWS);
      router.replace(
        { pathname: newPathname, query: { ...query } },
        { locale: newLocale },
      );
    } else {
      router.replace({ pathname, query: { ...query } }, { locale: newLocale });
    }
  };

  useEffect(() => {
    deleteCookie(staticValues.COOKIE_LOCALIZATION_NEWS);
  }, [pathname]);

  return (
    <div
      className={clsx(
        className,
        themeColor === EColor.white ? styles.white : styles.dark,
      )}
    >
      {locales.map((locale) => (
        <span
          key={locale}
          data-lang={locale}
          className={clsx(
            styles.language,
            locale === params.lang && styles.active,
          )}
          onClick={changeLocale}
        >
          {locale.toUpperCase()}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
