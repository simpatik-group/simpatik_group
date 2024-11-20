'use client';

import { FC, useContext } from 'react';

import { LocalizationContext } from '@/context/localization.context';

import CharityHomePage from './CharityHomePage/CharityHomePage';
import HistoryHomePage from './HistoryHomePage/HistoryHomePage';
import InspireHomePage from './InspireHomePage/InspireHomePage';
import LocationsHomePage from './LocationsHomePage/LocationsHomePage';
import NumbersHomePage from './NumbersHomePage/NumbersHomePage';

const Home: FC = () => {
  const context = useContext(LocalizationContext);
  console.log('🚀 ~ context:', context);

  return (
    <>
      <InspireHomePage />
      <LocationsHomePage />
      <HistoryHomePage />
      <NumbersHomePage />
      <CharityHomePage />
    </>
  );
};

export default Home;
