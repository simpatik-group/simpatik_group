import { FC, ReactNode } from 'react';

import Header from './Header/Header';

interface IRootLayout {
  children: ReactNode;
  color: 'dark' | 'white';
}

const RootLayout: FC<IRootLayout> = ({ children, color }) => {
  return (
    <div className='overflow-clip'>
      <Header bg={color}></Header>
      <main>{children}</main>
      <footer className='text-dark-400'>
        {/* <Navigation color={color} /> */}
      </footer>
    </div>
  );
};
export default RootLayout;
