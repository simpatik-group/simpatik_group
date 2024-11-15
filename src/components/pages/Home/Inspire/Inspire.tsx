import { FC, useContext } from 'react';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import Heading from '@/components/ui/Heading/Heading';
import ParticleImageComponent from '@/components/ui/ParticleImageComponent/ParticleImage';

import { LocalizationContext } from '@/context/localization.context';
import { Color } from '@/types/enums';

const Inspire: FC = () => {
  const context = useContext(LocalizationContext);
  console.log('🚀 ~ context:', context);
  return (
    <ParticlesLayout className='pt-8'>
      <div>
        <Heading
          className='uppercase h1'
          heading='h1'
          title='Надихати людей'
          themeColor={Color.white}
        />
        <p className='uppercase h6'>{context?.homePage.data.hero_title}</p>
      </div>
      <ParticleImageComponent />
    </ParticlesLayout>
  );
};

export default Inspire;
