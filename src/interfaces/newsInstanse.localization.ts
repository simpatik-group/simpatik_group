export type INewsInstantMessage = Root[];

interface Root {
  id: number;
  title: string;
  content: IRichTextContent[];
  photos_title: string;
  locale: string;
  photos_title_shadow: string;
  url: string;
  date: string;
  description: string;
  cover?: Photo;
  photos?: Photo[];
  localizations: Localization[];
}

export interface IRichTextContent {
  type: string;
  text?: string;
  children?: IRichTextContent[];
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  format?: string;
  level?: number;
}

interface Photo {
  id: number;
  url: string;
}

interface Localization {
  id: number;
  title: string;
  locale: string;
  url: string;
}
