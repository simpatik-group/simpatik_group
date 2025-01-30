import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import NewsPage from '@/components/ui/NewsPage/NewsPage';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { locales, routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: string; slug: string };
  const messages = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['CHARITY_INSTANCE'],
    restQueryParams: `&filters[url][$eq]=${slug}`,
  });

  return {
    title: messages.CHARITY_INSTANCE?.[0].title,
    openGraph: {
      title: messages.CHARITY_INSTANCE?.[0].title,
    },
  };
}

export async function generateStaticParams() {
  const allMessages = await Promise.all(
    locales.map((locale) =>
      requestService.getRequest({
        localization: locale,
        urls: ['ALL_CHARITIES'],
        pagination: '&pagination[start]=0',
      }),
    ),
  );

  const staticParams = allMessages.flatMap(
    (resp, index) =>
      resp.ALL_CHARITIES?.data.map((item) => ({
        lang: locales[index],
        slug: item.url,
      })) || [],
  );

  return staticParams;
}

export default async function LifePage({ params }: { params: PageParams }) {
  const { lang, slug } = (await params) as { lang: string; slug: string };
  setRequestLocale(lang || routing.defaultLocale);

  const common = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['COMMON'],
  });
  const news = await requestService.getRequest({
    localization: lang || routing.defaultLocale,
    urls: ['CHARITY_INSTANCE'],
    restQueryParams: `&filters[url][$eq]=${slug}`,
  });
  const messages = { ...common, ...news };

  if (
    typeof news.CHARITY_INSTANCE === 'undefined' ||
    news.CHARITY_INSTANCE.length < 1
  ) {
    notFound();
  }

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <NewsPage messageKey='CHARITY_INSTANCE' />
    </RootLayout>
  );
}
