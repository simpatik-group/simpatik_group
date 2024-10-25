import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ContainerUI from '@/components/ui/Navigation/ContainerUI/ContainerUI';
import Navigation from '@/components/ui/Navigation/Navigation';

import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

const Header: FC<IHeaderProps> = ({ bg }) => {
  console.log('bg:', bg);
  return (
    <header
      className={`${bg === 'white' ? 'bg-white-400 text-dark-400-400' : 'bg-dark-400 text-white-400'} text-wh sticky `}
    >
      <ContainerUI>
        <div className={styles.wrap}>
          <Link href='/'>
            <Image src='./img/logo.svg' width={56} height={56} alt='Simpatik' />
          </Link>
          <div className={`${styles.hamburgerWrap} ${styles.active}`}>
            <span
              className={`${styles.hamburger} ${bg === 'white' ? styles.dark : styles.white}`}
            ></span>
          </div>
          <Navigation
            color={bg === 'white' ? 'dark' : 'white'}
            withLangSwitcher
          />
        </div>
      </ContainerUI>
    </header>
  );
};

export default Header;
