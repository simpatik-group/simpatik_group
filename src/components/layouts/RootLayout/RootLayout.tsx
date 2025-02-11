'use client';

import { FC, ReactNode, useEffect } from 'react';

import { LazyMotion, domAnimation } from 'motion/react';

import MessagesProvider, { IMessagesContext } from '@/context/messages.context';

import type { EColor } from '@/interfaces/enums';

import { scrollMe } from '@/helpers/scrollFunction';

import Footer from './Footer/Footer';
import Header from './Header/Header';

type SearchParams = { [key: string]: string | string[] | undefined };
interface IRootLayout {
  children: ReactNode;
  themeColor: EColor;
  messages: IMessagesContext;
  searchParams?: SearchParams;
}

const RootLayout: FC<IRootLayout> = ({
  messages,
  children,
  themeColor,
  searchParams,
}) => {
  const query = searchParams?.id;

  useEffect(() => {
    if (query) {
      setTimeout(() => {
        scrollMe({ elem: document.querySelector(`#${query}`), noSmooth: true });
      }, 50);
    }
  }, [query]);

  return (
    <MessagesProvider messages={messages}>
      <LazyMotion features={domAnimation}>
        <div className='overflow-clip'>
          <Header themeColor={themeColor} />
          <main>{children}</main>
          <Footer />
        </div>
      </LazyMotion>
    </MessagesProvider>
  );
};
export default RootLayout;
