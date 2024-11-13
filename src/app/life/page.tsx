import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { Color } from '@/types/enums';

type Props = {};

const fetchData = async () => {
  // const response = await fetch(
  //   process.env.NEXT_PUBLIC_DOMAIN + '/homepage?populate=*&locale=uk',
  // );
  // const data = await response.json();
  // return data;
};
const LifePage = async (props: Props) => {
  // const data = await fetchData();
  // console.log('data:', data);
  return (
    <RootLayout themeColor={Color.dark}>
      <div className='font-black text-7xl'>Життя в Сімпатік</div>
    </RootLayout>
  );
};

export default LifePage;
