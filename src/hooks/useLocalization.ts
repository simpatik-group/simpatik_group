import { useContext } from 'react';

import { MessagesContext } from '@/context/messages.context';

import { IGetMessages } from '@/interfaces/request.request';

export function useMessages<Key extends keyof IGetMessages>(key: Key) {
  const context = useContext(MessagesContext);
  const selector = context && context[key];

  if (!context) {
    throw new Error('useMessages must be used within a messagesProvider');
  }

  return selector;
}
