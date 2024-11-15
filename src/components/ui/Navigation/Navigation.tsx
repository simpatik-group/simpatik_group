'use client';

import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Color } from '@/interfaces/enums';

import { useOwnSelector } from '@/hooks/useOwnSelector';

import styles from './Navigation.module.scss';
import { INavigationProps } from './Navigation.props';

const Navigation: FC<INavigationProps> = ({ themeColor, className }) => {
  const commonContent = useOwnSelector('commonContent');

  const pathname = usePathname();
  // const menuItems = [
  //   {
  //     name: 'Про нас',
  //     href: '/',
  //   },
  //   {
  //     name: 'Життя в Сімпатік',
  //     href: '/life/',
  //   },
  //   {
  //     name: 'Наші команди',
  //     href: '/teams/',
  //   },
  //   {
  //     name: 'Кар`єра',
  //     href: '/career/',
  //   },
  //   {
  //     name: 'Наші локації',
  //     href: '/locations/',
  //   },
  //   {
  //     name: 'Контакти',
  //     href: '/contacts/',
  //   },
  // ];

  return (
    <nav
      className={clsx(
        styles.nav,
        className,
        themeColor === Color.white ? styles.white : styles.dark,
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
                <Link className={styles.link} href={item.url}>
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
