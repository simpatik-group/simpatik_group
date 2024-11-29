'use client';

import { useMessages } from '@/hooks/useLocalization';

const Life = () => {
  const lifePage = useMessages('LIFE');
  return (
    <>
      <p>{lifePage?.advantages_title}</p>
    </>
  );
};

export default Life;
