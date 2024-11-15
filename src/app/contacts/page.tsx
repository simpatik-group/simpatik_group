import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { Color } from '@/interfaces/enums';

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
    <RootLayout themeColor={Color.white}>
      <div className='font-black text-7xl'>Контакти</div>
    </RootLayout>
  );
};

export default ContactsPage;
