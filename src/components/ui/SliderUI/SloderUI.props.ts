import { ReactNode } from 'react';
import { Settings } from 'react-slick';

import { IDivProps } from '@/interfaces/interfaces';

export interface ISliderUI extends IDivProps {
  settingsProps?: Settings;
  children: ReactNode;
}
