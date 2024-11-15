'use client';

import { FC, useContext } from 'react';

import { LocalizationContext } from '@/context/localization.context';

const Life: FC = () => {
  const context = useContext(LocalizationContext);
  console.log('🚀 ~ context:', context);
  return (
    <>
      <p>{context?.homePage.data.advantages_title}</p>
    </>
  );
};

export default Life;
