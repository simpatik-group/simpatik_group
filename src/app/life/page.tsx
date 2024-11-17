import RootLayout from '@/components/layouts/RootLayout/RootLayout';
import Life from '@/components/pages/Life/Life';

import { EColor } from '@/interfaces/enums';

import localizationService from '@/services/localization.service';

type Props = {};

const fetchData = async () => {};
const LifePage = async (props: Props) => {
  const lifePage = await localizationService.getLife();

  return (
    <RootLayout localization={{ lifePage }} themeColor={EColor.dark}>
      <Life />
    </RootLayout>
  );
};

export default LifePage;
