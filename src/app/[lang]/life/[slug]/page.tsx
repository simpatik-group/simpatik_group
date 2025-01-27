import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { urlPaths } from '@/helpers/urlPath';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export default async function LifePage({ params }: { params: PageParams }) {
  // const locale = await getLocale();
  const { lang, slug } = (await params) as { lang: string; slug: string };
  setRequestLocale(lang || routing.defaultLocale);
  // const searchParams = useSearchParams();
  const common = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON'],
  });
  const news = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['NEWS_INSTANCE'],
    restQueryParams: `&filters[url][$eq]=${slug}`,
  });
  const messages = { ...common, ...news };

  console.log('🚀 ~ LifePage ~ news.NEWS_INSTANCE:', news.NEWS_INSTANCE);
  if (
    typeof news.NEWS_INSTANCE === 'undefined' ||
    news.NEWS_INSTANCE.length < 1
  ) {
    redirect(urlPaths.LIFE);
  }

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <p>ID of News {messages.NEWS_INSTANCE?.[0].id}</p>
      <p>{messages.NEWS_INSTANCE?.[0].title}</p>
    </RootLayout>
  );
}
