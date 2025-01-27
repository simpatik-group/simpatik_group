export interface ILifeMessage {
  id: number;
  hero_title: string;
  hero_text: string;
  hero_title_shadow: string;
  locale: string;
  advantages_title: string;
  advantages_title_shadow: string;
  advantages: Advantage[];
  video_url: string;
  news_title: string;
  news_title_shadow: string;
  loadmore_button: string;
  readmore_button: string;
}

interface Advantage {
  id: number;
  title: string;
  text: string;
}
