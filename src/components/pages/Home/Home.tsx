'use client';

import { FC } from 'react';

import ContainerUI from '@/components/ui/ContainerUI/ContainerUI';
import Heading from '@/components/ui/Heading/Heading';
import ParticleImageComponent from '@/components/ui/ParticleImageComponent/ParticleImage';

import { Color } from '@/types/enums';

const Home: FC = () => {
  return (
    <>
      <ContainerUI>
        <Heading
          heading='h1'
          title='Надихати людей'
          shadowTitle='Inspire'
          themeColor={Color.dark}
        />
        <ParticleImageComponent />
      </ContainerUI>
    </>
  );
};

export default Home;
