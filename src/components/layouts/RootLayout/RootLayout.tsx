'use client';

import { FC, ReactNode, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import MessagesProvider, { IMessagesContext } from '@/context/messages.context';

import type { EColor } from '@/interfaces/enums';

import { scrollMe } from '@/helpers/scrollFunction';

import Footer from './Footer/Footer';
import Header from './Header/Header';

interface IRootLayout {
  children: ReactNode;
  themeColor: EColor;
  messages: IMessagesContext;
}

const RootLayout: FC<IRootLayout> = ({ messages, children, themeColor }) => {
  const query = useSearchParams().get('id');

  useEffect(() => {
    if (query) {
      setTimeout(() => {
        scrollMe({ elem: document.querySelector(`#${query}`), noSmooth: true });
      }, 50);
    }
  }, [query]);

  return (
    <MessagesProvider messages={messages}>
      <div className='overflow-clip'>
        <Header themeColor={themeColor} />
        <main>{children}</main>
        <Footer />
      </div>
    </MessagesProvider>
  );
};
export default RootLayout;
