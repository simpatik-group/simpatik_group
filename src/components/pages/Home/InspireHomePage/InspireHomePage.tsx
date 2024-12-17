import { FC } from 'react';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import ParticleImageComponent from '@/components/ui/ParticleImageComponent/ParticleImageComponent';
import Social from '@/components/ui/Social/Social';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

const Inspire: FC = () => {
  const homePage = useMessages('HOME_PAGE');

  return (
    <ParticlesLayout id='Inspire' className='pt-8 pb-2 md:pb-14'>
      <ContainerUI withoutGridSystem className='md:grid-cols-2 items-center'>
        <div>
          <Heading
            className='uppercase h1 !mb-6'
            heading='h1'
            title={homePage?.hero_title || ''}
            textColor={EColor.white}
          />
          <p className='uppercase h6'>{homePage?.hero_text}</p>
        </div>
        <div className='md:-mt-10'>
          <ParticleImageComponent className='w-full' />
          <Social className='!hidden md:!flex md:mt-10 md:!justify-end' />
        </div>
      </ContainerUI>
    </ParticlesLayout>
  );
};

export default Inspire;
