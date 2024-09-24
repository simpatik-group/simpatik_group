import RootLayout from '@/components/layouts/RootLayout/RootLayout';

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
    <RootLayout color='dark'>
      <div className='font-black text-7xl'>Життя в Сімпатік</div>
    </RootLayout>
  );
};

export default ContactsPage;
