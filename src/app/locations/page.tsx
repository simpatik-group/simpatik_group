import RootLayout from '@/components/layouts/RootLayout/RootLayout';

import { Color } from '@/types/enums';

const fetchData = async () => {
  const response = await fetch('https://apitest2.megabox.best/api/ua/boxes');
  const data = await response.json();
  return data;
};
const ContactsPage = () => {
  // const data = await fetchData();
  // console.log('data:', data);

  return (
    <RootLayout themeColor={Color.dark}>
      <div className='font-black text-7xl'>Наші локації</div>
    </RootLayout>
  );
};

export default ContactsPage;
