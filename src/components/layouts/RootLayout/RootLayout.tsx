import { FC, ReactNode } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';

interface IRootLayout {
  children: ReactNode;
  color: 'dark' | 'white';
}

const RootLayout: FC<IRootLayout> = ({ children, color }) => {
  return (
    <div className='overflow-clip'>
      <Header bg={color} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
