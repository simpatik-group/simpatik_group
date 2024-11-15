import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Home from '@/components/pages/Home/Home';

import { Color } from '@/interfaces/enums';

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
export const revalidate = 3600; // invalidate every hour

export default async function HomePage() {
  const { data: homePage } = await fetch(
    process.env.NEXT_PUBLIC_DOMAIN + '/homepage?populate=*&locale=uk',
    { cache: 'force-cache' },
  ).then((res) => res.json());

  const { data: commonContent } = await fetch(
    process.env.NEXT_PUBLIC_DOMAIN +
      '/common?populate=social_links.image&populate=menu&locale=uk',
    { cache: 'force-cache' },
  ).then((res) => res.json());

  const homePageLocalization = { homePage, commonContent };
  return (
    <RootLayout localization={homePageLocalization} themeColor={Color.dark}>
      <Home />
    </RootLayout>
  );
}
