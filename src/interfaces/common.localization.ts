export interface ICommonMessage {
  id: number;
  address_title: string;
  address_text: string;
  phone_title: string;
  phone_text: string;
  email_title: string;
  email_text: string;
  locale: string;
  social_title: string;
  social_links: SocialLink[];
  menu: Menu[];
  notfound_title: string;
  notfound_text: string;
}

interface SocialLink {
  id: number;
  title: string;
  url: string;
  image: {
    id: number;
    url: string;
  };
}

interface Menu {
  id: number;
  title: string;
  url: string;
}
