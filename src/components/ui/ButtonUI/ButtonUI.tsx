import { FC } from 'react';

import { IButtonUIProps } from './ButtonUI.props';

const ButtonUI: FC<IButtonUIProps> = ({ themeColor, children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonUI;
