import RootLayout from '@/components/layouts/RootLayout/RootLayout';

type Props = {};
const HomePage = async (props: Props) => {
  return (
    <RootLayout color='dark'>
      <div className='title'>Home</div>
    </RootLayout>
  );
};

export default HomePage;
