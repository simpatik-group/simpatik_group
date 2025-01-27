import { getLocale, setRequestLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Home from '@/components/pages/Home/Home';

import { EColor } from '@/interfaces/enums';
import { PageParams } from '@/interfaces/localozation';

import { routing } from '@/i18n/i18n.config';
import requestService from '@/services/request.service';

// https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
// генерація метаданих
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // read route params
//   // const id = (await params).id

//   // fetch data
//   const product = await fetch(
//     process.env.NEXT_PUBLIC_DOMAIN + '/homepage?populate=*&locale=uk',
//   ).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.data.hero_title + ' | test',
//   };
// }
// export function generateStaticParams() {
//   return locales
//     .filter((locale) => locale !== routing.defaultLocale)
//     .map((locale) => ({ locale }));
// }

export default async function HomePage({ params }: { params: PageParams }) {
  const { lang } = (await params) as { lang: string };
  setRequestLocale(lang || routing.defaultLocale);
  const locale = await getLocale();
  const messages = await requestService.getRequest({
    localization: locale || routing.defaultLocale,
    urls: ['COMMON', 'HOME_PAGE', 'LOCATIONS'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Home />
    </RootLayout>
  );
}
