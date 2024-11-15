'use client';

import { useOwnSelector } from '@/hooks/useOwnSelector';

const Life = () => {
  const lifePage = useOwnSelector('lifePage');
  return (
    <>
      <p>{lifePage?.advantages_title}</p>
    </>
  );
};

export default Life;
