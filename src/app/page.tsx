import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Home from '@/components/pages/Home/Home';

import { Color } from '@/types/enums';

const HomePage = () => {
  return (
    <RootLayout themeColor={Color.dark}>
      <Home />
    </RootLayout>
  );
};

export default HomePage;
