import { FC, useContext } from 'react';

import { LocalizationContext } from '@/context/localization.context';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import Heading from '@/components/ui/Heading/Heading';
import ParticleImageComponent from '@/components/ui/ParticleImageComponent/ParticleImage';

import { EColor } from '@/interfaces/enums';

const Inspire: FC = () => {
  const context = useContext(LocalizationContext);
  return (
    <ParticlesLayout className='pt-8'>
      <div>
        <Heading
          className='uppercase h1'
          heading='h1'
          title='Надихати людей'
          themeColor={EColor.white}
        />
        <p className='uppercase h6'>{context?.homePage?.hero_text}</p>
      </div>
      <ParticleImageComponent />
    </ParticlesLayout>
  );
};

export default Inspire;
