import { FC } from 'react';

import { IDivProps } from '@/interfaces/interfaces';

const ContainerUI: FC<IDivProps> = ({ children }) => {
  return <div className='container px-4'>{children}</div>;
};

export default ContainerUI;
