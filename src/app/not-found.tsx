import { FC } from 'react';

import MessagesProvider from '@/context/messages.context';

import NotFound from '@/components/pages/NotFound/NotFound';

import requestService from '@/services/request.service';

const Page404: FC = async () => {
  const messages = await requestService.getRequest({
    localization: 'uk',
    urls: ['COMMON'],
  });

  return (
    <MessagesProvider messages={messages}>
      <NotFound />
    </MessagesProvider>
  );
};

export default Page404;
