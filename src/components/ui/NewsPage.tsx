'use client';

import { useEffect } from 'react';

import { INewsInstantMessage } from '@/interfaces/newsInstanse.localization';

import { useMessages } from '@/hooks/useLocalization';

import { createNewsLocalizations } from '@/helpers/createNewsLocalizations';
import { addCookie } from '@/helpers/helperCookie';
import { staticValues } from '@/helpers/staticValues';

interface NewsPageProps<Key> {
  messageKey: Key;
}

const NewsPage = <Key extends 'CHARITY_INSTANCE' | 'NEWS_INSTANCE'>({
  messageKey,
}: NewsPageProps<Key>) => {
  const newsMessage = useMessages(messageKey) as INewsInstantMessage;
  useEffect(() => {
    if (newsMessage && newsMessage[0].localizations.length > 0) {
      const cookieBody = createNewsLocalizations(
        newsMessage && newsMessage[0].localizations,
      );
      addCookie({
        name: staticValues.COOKIE_LOCALIZATION_NEWS,
        value: cookieBody,
      });
    } else {
      addCookie({
        name: staticValues.COOKIE_LOCALIZATION_NEWS,
        value: '',
      });
    }
  }, [newsMessage]);
  return <div>{newsMessage?.[0].title}</div>;
};

export default NewsPage;
