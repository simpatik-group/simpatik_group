export interface ILocationsLocalization {
  id: number;
  title: string;
  locale: string;
  title_shadow: string;
  location: Location[];
}

interface Location {
  id: number;
  title: string;
  text: string;
  url?: string;
  position_homepage?: number;
}
