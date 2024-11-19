export interface IHomeLocalization {
  id: number;
  hero_title: string;
  hero_text: string;
  numbers_title: string;
  numbers_title_shadow: string;
  partners_title: string;
  partners_title_shadow: string;
  partners_text: string;
  feedback_title: string;
  feedback_title_shadow: string;
  locale: string;
  location_button: string;
  fag_title: string;
  fag_title_shadow: string;
  fag_text: string;
  fag_button: string;
  history_title: string;
  history_title_shadow: string;
  history_description: string;
  history_button: string;
  military_aid_button: string;
  military_aid_title: string;
  military_aid_shadow: string;
  military_aid_description: string;
  military_aid_cover: Image;
  numbers: Number[];
  feedbacks: Feedback[];
  partner_logos: Image[];
  fag: Fag[];
  history_cover: HistoryCover[];
}

interface Number {
  id: number;
  number: string;
  text: string;
}

interface Feedback {
  id: number;
  feedback_content: string;
  feedback_person: string;
  feedback_company: string;
}

interface Image {
  id: number;
  url: string;
}

interface Fag {
  id: number;
  fag_question: string;
  faq_answer: string;
}

interface HistoryCover {
  id: number;
  url: string;
}
