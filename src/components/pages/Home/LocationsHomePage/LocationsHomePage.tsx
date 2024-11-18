import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

const LocationsHomePage: FC = () => {
  const locationsData = useLocalization('LOCATIONS');
  return (
    <ContainerUI className='md:grid-cols-2'>
      <div>
        <Heading
          className='uppercase h1 mb-6'
          heading='h1'
          title={locationsData?.title || ''}
          shadowTitle={locationsData?.title_shadow}
          themeColor={EColor.white}
        />
      </div>
    </ContainerUI>
  );
};

export default LocationsHomePage;
