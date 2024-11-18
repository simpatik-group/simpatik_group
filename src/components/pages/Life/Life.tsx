'use client';

import { useLocalization } from '@/hooks/useLocalization';

const Life = () => {
  const lifePage = useLocalization('LIFE');
  return (
    <>
      <p>{lifePage?.advantages_title}</p>
    </>
  );
};

export default Life;
