import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import NewsPage from '@/components/ui/NewsPage';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

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

  if (
    typeof news.NEWS_INSTANCE === 'undefined' ||
    news.NEWS_INSTANCE.length < 1
  ) {
    notFound();
  }

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <NewsPage />
    </RootLayout>
  );
}
