'use client';

import { FC, useEffect, useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Navigation from '@/components/ui/Navigation/Navigation';
import Social from '@/components/ui/Social/Social';

import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

const Header: FC<IHeaderProps> = ({ bg }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  return (
    <header
      className={clsx(
        bg === 'white'
          ? 'bg-white-400 text-dark-400-400'
          : 'bg-dark-400 text-white-400',
        styles.header,
        { [styles.active]: active },
      )}
    >
      <ContainerUI>
        <div className={styles.wrap}>
          <Link href='/'>
            <Image src='./img/logo.svg' width={56} height={56} alt='Simpatik' />
          </Link>
          <div
            className={clsx(
              styles.hamburgerWrap,
              bg === 'white' ? styles.dark : styles.white,
            )}
            onClick={() => setActive(!active)}
          >
            <span className={clsx(styles.hamburger)}></span>
            <span className={clsx(styles.hamburger)}></span>
            <span className={clsx(styles.hamburger)}></span>
            <span className={clsx(styles.hamburger)}></span>
            <span className={clsx(styles.hamburger)}></span>
            <span className={clsx(styles.hamburger)}></span>
          </div>
          <div className={styles.menuMobile}>
            <Navigation
              className={clsx(styles.nav, styles.active)}
              color={bg === 'white' ? 'dark' : 'white'}
              withLangSwitcher
            />
            <Social />
          </div>
          {/* <Navigation
            className={clsx(styles.nav, styles.active)}
            color={bg === 'white' ? 'dark' : 'white'}
          /> */}
        </div>
      </ContainerUI>
    </header>
  );
};

export default Header;
