import { getLocale } from 'next-intl/server';

import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Home from '@/components/pages/Home/Home';

import { EColor } from '@/interfaces/enums';

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

export default async function HomePage() {
  const locale = await getLocale();

  const messages = await requestService.getRequest({
    localization: locale,
    urls: ['COMMON', 'HOME_PAGE', 'LOCATIONS'],
  });

  return (
    <RootLayout messages={messages} themeColor={EColor.dark}>
      <Home />
    </RootLayout>
  );
}
