import { FC } from 'react';

import { getLocale } from 'next-intl/server';

import MessagesProvider from '@/context/messages.context';

import NotFound from '@/components/pages/NotFound/NotFound';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

const Page404: FC = async () => {
  const locale = await getLocale();
  const messages = await requestService.getRequest({
    localization: locale || routing.defaultLocale,
    urls: ['COMMON'],
  });

  return (
    <MessagesProvider messages={messages}>
      <NotFound />
    </MessagesProvider>
  );
};

export default Page404;
