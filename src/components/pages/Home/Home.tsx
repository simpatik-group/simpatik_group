'use client';

import { FC, useContext } from 'react';

import { LocalizationContext } from '@/context/localization.context';

import Inspire from './Inspire/Inspire';

const Home: FC = () => {
  const selector = useContext(LocalizationContext);
  console.log('🚀 ~ selector:', selector);
  return (
    <>
      <Inspire />
    </>
  );
};

export default Home;
