import { EColor } from '@/interfaces/enums';
import { IDivProps } from '@/interfaces/interfaces';

export interface ILanguageSwitcher extends IDivProps {
  themeColor: EColor;
  withLangSwitcher?: boolean;
}
