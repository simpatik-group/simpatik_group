'use client';

import { FC, useEffect } from 'react';

import { useMessages } from '@/hooks/useLocalization';

import { createNewsLocalizations } from '@/helpers/createNewsLocalizations';
import { addCookie } from '@/helpers/helperCookie';
import { staticValues } from '@/helpers/staticValues';

const NewsPage: FC = () => {
  const newsMessage = useMessages('NEWS_INSTANCE');
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
