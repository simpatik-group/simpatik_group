export interface ICareerMessage {
  id: number;
  hero_title: string;
  hero_text: string;
  hero_title_shadow: string;
  locale: string;
  vacancy: Vacancy[];
  vacancy_button: string;
  numbers: Number[];
}

interface Number {
  id: number;
  number: string;
  text: string;
}

interface Vacancy {
  id: number;
  title: string;
  description: string;
  url: string;
}
