type Props = {};

const fetchData = async () => {
  const response = await fetch('https://apitest2.megabox.best/api/ua/boxes');
  const data = await response.json();
  return data;
};
const ContactsPage = async (props: Props) => {
  // const data = await fetchData();
  // console.log('data:', data);
  return <div className='font-black text-7xl'>My new page</div>;
};

export default ContactsPage;
