import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { Color } from '@/interfaces/enums';

type Props = {};

const fetchData = async () => {};
const LifePage = async (props: Props) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DOMAIN + '/life?populate=*&locale=uk',
    { cache: 'force-cache' },
  );
  const { data } = await res.json();
  const lifePage = { lifePage: data };
  return (
    <RootLayout localization={lifePage} themeColor={Color.dark}>
      <Life />
    </RootLayout>
  );
};

export default LifePage;
