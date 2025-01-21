'use client';

import { FC } from 'react';

import clsx from 'clsx';
import { useParams } from 'next/navigation';

import { EColor } from '@/interfaces/enums';

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

  const changeLocale = (event: React.MouseEvent<HTMLSpanElement>) => {
    const newLocale = event.currentTarget?.dataset.lang as Locale;

    router.replace(pathname, { locale: newLocale });
  };

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
