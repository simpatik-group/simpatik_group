import { FC } from 'react';

import { IContainerProps } from './ContainerUI.props';

const ContainerUI: FC<IContainerProps> = ({ children }) => {
  return <div className='container m-auto p-3'>{children}</div>;
};

export default ContainerUI;
