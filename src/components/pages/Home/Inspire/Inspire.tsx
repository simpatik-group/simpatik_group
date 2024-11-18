import { FC } from 'react';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import ParticleImageComponent from '@/components/ui/ParticleImageComponent/ParticleImage';
import Social from '@/components/ui/Social/Social';

import { EColor } from '@/interfaces/enums';

import { useLocalization } from '@/hooks/useLocalization';

const Inspire: FC = () => {
  const homePage = useLocalization('HOME_PAGE');
  return (
    <ParticlesLayout className='pt-8 pb-2'>
      <ContainerUI className='md:grid-cols-2'>
        <div>
          <Heading
            className='uppercase h1 mb-6'
            heading='h1'
            title={homePage?.hero_title || ''}
            themeColor={EColor.white}
          />
          <p className='uppercase h6'>{homePage?.hero_text}</p>
        </div>
        <div>
          <ParticleImageComponent />
          <Social className='!hidden md:!flex md:mt-10 md:!justify-end' />
        </div>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default Inspire;