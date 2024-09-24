'use client';

import { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { INavigationProps } from './Navigation.props';

const Navigation: FC<INavigationProps> = ({ color, withLangSwitcher }) => {
  const pathname = usePathname();
  console.log('pathname:', pathname);

  return (
    <nav className={color === 'white' ? 'text-white' : 'text-main-400'}>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
            Про нас
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/life' ? 'active' : ''}`}
            href='/life'
          >
            Життя в Сімпатік
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/teams' ? 'active' : ''}`}
            href='/teams'
          >
            Наші команди
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/career' ? 'active' : ''}`}
            href='/career'
          >
            Кар`єра
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/locations' ? 'active' : ''}`}
            href='/locations'
          >
            Наші локації
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/contacts' ? 'active' : ''}`}
            href='/contacts'
          >
            Контакти
          </Link>
        </li>
        {withLangSwitcher && (
          <li>
            <Link
              className={`link ${pathname === '/about' ? 'active' : ''}`}
              href='/'
            >
              UA | EN
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
