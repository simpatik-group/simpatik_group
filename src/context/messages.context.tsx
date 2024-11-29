'use client';

import { FC, ReactNode, createContext } from 'react';

import { IGetMessages } from '@/interfaces/request.request';

export interface IMessagesContext {}

interface IMessagesProps {
  messages: IGetMessages;
  children: ReactNode;
}

export const MessagesContext = createContext<IGetMessages | undefined>(
  undefined,
);

const MessagesProvider: FC<IMessagesProps> = ({ messages, children }) => {
  return (
    <MessagesContext.Provider value={messages}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
