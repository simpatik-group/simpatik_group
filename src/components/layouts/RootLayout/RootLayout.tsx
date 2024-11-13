import { FC, ReactNode } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Color } from '@/types/enums';

interface IRootLayout {
  children: ReactNode;
  themeColor: Color;
}

const RootLayout: FC<IRootLayout> = ({ children, themeColor }) => {
  return (
    <div className='overflow-clip'>
      <Header themeColor={themeColor} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
