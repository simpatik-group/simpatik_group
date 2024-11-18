'use client';

import { FC, useContext } from 'react';

import { LocalizationContext } from '@/context/localization.context';

import Inspire from './Inspire/Inspire';
import LocationsHomePage from './LocationsHomePage/LocationsHomePage';

const Home: FC = () => {
  const context = useContext(LocalizationContext);
  console.log('🚀 ~ context:', context);
  return (
    <>
      <Inspire />
      <LocationsHomePage />
    </>
  );
};

export default Home;
