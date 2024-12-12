export interface ITeamMessage {
  id: number;
  hero_title: string;
  hero_text: string;
  hero_title_shadow: string;
  locale: string;
  departments: Departments[];
}

interface Departments {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
  };
}
