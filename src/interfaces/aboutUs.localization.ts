export interface IAboutUsMessage {
  id: number;
  hero_title: string;
  hero_title_shadow: string;
  hero_image: Image;
  locale: string;
  section: Section[];
}

interface Section {
  id: number;
  title: string;
  title_shadow: string;
  text: string;
  image?: Image[];
}

interface Image {
  id: number;
  url: string;
}
