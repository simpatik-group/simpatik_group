export interface ILifeMessage {
  id: number;
  hero_title: string;
  hero_text: string;
  advantages_title: string;
  news_title: string;
  loadmore_button: string;
  locale: string;
  advantages_title_shadow: any;
  advantages: Advantage[];
}

interface Advantage {
  id: number;
  title: string;
  text: string;
}

// TODO finish types
