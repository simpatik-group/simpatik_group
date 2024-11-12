'use client';

import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navigation.module.scss';
import { INavigationProps } from './Navigation.props';

const Navigation: FC<INavigationProps> = ({ color, className }) => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: 'Про нас',
      href: '/',
    },
    {
      name: 'Життя в Сімпатік',
      href: '/life/',
    },
    {
      name: 'Наші команди',
      href: '/teams/',
    },
    {
      name: 'Кар`єра',
      href: '/career/',
    },
    {
      name: 'Наші локації',
      href: '/locations/',
    },
    {
      name: 'Контакти',
      href: '/contacts/',
    },
  ];

  return (
    <nav
      className={clsx(
        styles.nav,
        className,
        color === 'white' ? styles.white : styles.dark,
      )}
    >
      <ul>
        {menuItems.map((item) => {
          if (pathname === item.href) {
            return (
              <li key={item.href}>
                <span className={clsx(styles.link, styles.active)}>
                  {item.name}
                </span>
              </li>
            );
          } else {
            return (
              <li key={item.href}>
                <Link className={styles.link} href={item.href}>
                  {item.name}
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
