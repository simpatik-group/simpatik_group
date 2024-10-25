import { FC, ReactNode } from 'react';

import Navigation from '@/components/ui/Navigation/Navigation';

import Header from './Header/Header';

interface IRootLayout {
  children: ReactNode;
  color: 'dark' | 'white';
}

const RootLayout: FC<IRootLayout> = ({ children, color }) => {
  return (
    <>
      <Header bg={color}></Header>
      <main>{children}</main>
      <footer className='text-dark-400'>
        <Navigation color={color} />
      </footer>
    </>
  );
};
export default RootLayout;
