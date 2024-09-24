import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ContainerUI from '@/components/ui/Navigation/ContainerUI/ContainerUI';
import Navigation from '@/components/ui/Navigation/Navigation';

import { IHeaderProps } from './Header.props';

const Header: FC<IHeaderProps> = ({ bg }) => {
  return (
    <header
      className={`${bg === 'white' ? 'bg-white' : 'bg-main-400'} bg-opacity-50`}
    >
      <ContainerUI>
        <Link href='/'>
          <Image src='./img/logo.svg' width={70} height={70} alt='Simpatik' />
        </Link>
        <Navigation
          color={bg === 'white' ? 'dark' : 'white'}
          withLangSwitcher
        />
      </ContainerUI>
    </header>
  );
};

export default Header;
