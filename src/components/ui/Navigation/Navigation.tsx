'use client';

import { FC } from 'react';

import clsx from 'clsx';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './Navigation.module.scss';
import { INavigationProps } from './Navigation.props';
import { Link, usePathname } from '@/i18n/i18n.config';

const Navigation: FC<INavigationProps> = ({ themeColor, className }) => {
  const commonContent = useMessages('COMMON');

  const pathname = usePathname().split('/').at(-2);

  return (
    <nav
      className={clsx(
        styles.nav,
        className,
        themeColor === EColor.white ? styles.white : styles.dark,
      )}
    >
      <ul>
        {commonContent?.menu.map((item) => {
          if (pathname === item.url) {
            return (
              <li key={item.id}>
                <span className={clsx(styles.link, styles.active)}>
                  {item.title}
                </span>
              </li>
            );
          } else {
            return (
              <li key={item.url}>
                <Link className={styles.link} href={`/${item.url}`}>
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
