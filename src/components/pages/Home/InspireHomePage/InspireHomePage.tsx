import { FC } from 'react';

import Image from 'next/image';

import ParticlesLayout from '@/components/layouts/ParticlesLayout/ParticlesLayout';
import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import ParticleImageComponent from '@/components/ui/ParticleImageComponent/ParticleImageComponent';
import Social from '@/components/ui/Social/Social';

import { EColor } from '@/interfaces/enums';

import { useMessages } from '@/hooks/useLocalization';

import styles from './InspireHomePage.module.scss';

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
          <div className={styles.textWrap}>
            <p className='uppercase h6'>{homePage?.hero_text}</p>
            <Image
              src='./img/pointer-icon.svg'
              alt='pointer'
              width={64}
              height={64}
              className={styles.pointer}
            />
          </div>
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
