'use client';

import { useLocalization } from '@/hooks/useLocalization';

const Life = () => {
  const lifePage = useLocalization('lifePage');
  return (
    <>
      <p>{lifePage?.advantages_title}</p>
    </>
  );
};

export default Life;
