'use client';

import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

import styles from './Navigation.module.scss';
import { INavigationProps } from './Navigation.props';

const Navigation: FC<INavigationProps> = ({ themeColor, className }) => {
  const commonContent = useLocalization('COMMON');

  const pathname = usePathname().split('/')[1];

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
