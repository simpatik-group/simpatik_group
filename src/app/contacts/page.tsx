import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { EColor } from '@/interfaces/enums';

type Props = {};

const fetchData = async () => {
  const response = await fetch('https://apitest2.megabox.best/api/ua/boxes');
  const data = await response.json();
  return data;
};
const ContactsPage = async (props: Props) => {
  // const data = await fetchData();
  // console.log('data:', data);
  return (
    <RootLayout themeColor={EColor.white}>
      <div className='font-black text-7xl'>Контакти</div>
    </RootLayout>
  );
};

export default ContactsPage;
