export type INewsInstantMessage = Root[];

interface Root {
  id: number;
  title: string;
  content: Content[];
  photos_title: string;
  locale: string;
  photos_title_shadow: string;
  url: string;
  date: string;
  description: string;
  cover: Cover;
  photos: Photo[];
  localizations: Localization[];
}

interface Content {
  type: string;
  children: NestedNode[];
  level?: number;
  format?: string;
}

interface NestedNode {
  type: string;
  text?: string;
  children?: NestedNode[];
  bold?: boolean;
  format?: string;
}

interface Cover {
  id: number;
  url: string;
}

interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
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
