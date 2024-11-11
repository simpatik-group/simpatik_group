'use client';

import { FC } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navigation.module.scss';
import { INavigationProps } from './Navigation.props';

const Navigation: FC<INavigationProps> = ({
  color,
  withLangSwitcher,
  className,
}) => {
  const pathname = usePathname();
  console.log('color:', color);

  return (
    <nav
      className={clsx(
        className,
        color === 'white' ? 'text-white' : 'text-grey-400',
      )}
    >
      <ul>
        <li>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === '/',
            })}
            href='/'
          >
            Про нас
          </Link>
        </li>
        <li>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === '/life',
            })}
            href='/life'
          >
            Життя в Сімпатік
          </Link>
        </li>
        <li>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === '/teams',
            })}
            href='/teams'
          >
            Наші команди
          </Link>
        </li>
        <li>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === '/career',
            })}
            href='/career'
          >
            Кар`єра
          </Link>
        </li>
        <li>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === '/locations',
            })}
            href='/locations'
          >
            Наші локації
          </Link>
        </li>
        <li>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === '/contacts',
            })}
            href='/contacts'
          >
            Контакти
          </Link>
        </li>
        {withLangSwitcher && (
          <li>
            <Link className={clsx(styles.link, styles.language)} href='/'>
              UA | EN
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
