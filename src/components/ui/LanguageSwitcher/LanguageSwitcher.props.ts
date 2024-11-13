import { Color } from '@/types/enums';
import { IDivProps } from '@/types/interfaces';

export interface ILanguageSwitcher extends IDivProps {
  themeColor: Color;
  withLangSwitcher?: boolean;
}
