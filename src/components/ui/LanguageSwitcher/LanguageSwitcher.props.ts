import { Color } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

export interface ILanguageSwitcher extends IDivProps {
  themeColor: Color;
  withLangSwitcher?: boolean;
}
