'use client';

import { FC, useEffect, useState } from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Navigation from '@/components/ui/Navigation/Navigation';
import Social from '@/components/ui/Social/Social';

import { EColor } from '@/interfaces/enums';

import { urlPaths } from '@/helpers/urlPath';

import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

const HeaderLayoutDynamic = dynamic(
  () => import('@/components/layouts/ParticlesLayout/ParticlesLayout'),
);

const Header: FC<IHeaderProps> = ({ themeColor }) => {
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
      id='header'
      className={clsx(
        themeColor === EColor.white ? styles.white : styles.dark,
        styles.header,
        { [styles.active]: active },
      )}
    >
      <HeaderLayoutDynamic className={styles.headerMobileBg} id='Header' />
      <ContainerUI withoutGridSystem>
        <div className={styles.wrap}>
          <Link href={urlPaths.HOMEPAGE}>
            <Image
              priority
              src={
                active
                  ? '/img/logo.svg'
                  : themeColor === EColor.white
                    ? '/img/logo-dark.svg'
                    : '/img/logo.svg'
              }
              width={56}
              height={56}
              alt='Simpatik'
              className={styles.logo}
            />
          </Link>
          <div
            className={clsx(styles.hamburgerWrap)}
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
            <div className={styles.menuDesktop}>
              {/* <LanguageSwitcher
                className='text-center'
                themeColor={
                  active
                    ? EColor.white
                    : themeColor === EColor.white
                      ? EColor.dark
                      : EColor.white
                }
              /> */}
              <Navigation
                className={clsx(styles.nav, styles.active)}
                themeColor={
                  active
                    ? EColor.white
                    : themeColor === EColor.white
                      ? EColor.dark
                      : EColor.white
                }
              />
            </div>
            <Social className='pb-[26px] lg:!hidden' />
          </div>
        </div>
      </ContainerUI>
    </header>
  );
};

export default Header;
