'use client';

import { FC } from 'react';

import FAQ from '@/components/ui/FAQ/FAQ';

import CharityHomePage from './CharityHomePage/CharityHomePage';
import FeedbacksHomePage from './FeedbacksHomePage/FeedbacksHomePage';
import HistoryHomePage from './HistoryHomePage/HistoryHomePage';
import InspireHomePage from './InspireHomePage/InspireHomePage';
import LocationsHomePage from './LocationsHomePage/LocationsHomePage';
import NumbersHomePage from './NumbersHomePage/NumbersHomePage';
import PartnersHomePage from './PartnersHomePage/PartnersHomePage';

const Home: FC = () => {
  return (
    <>
      <InspireHomePage />
      <LocationsHomePage />
      <HistoryHomePage />
      <NumbersHomePage />
      <CharityHomePage />
      <section className='pageSection'>
        <PartnersHomePage />
        <FeedbacksHomePage />
      </section>
      <FAQ />
    </>
  );
};

export default Home;
