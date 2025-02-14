export enum EColor {
  dark,
  white,
}
export enum ELocalization {
  uk = 'uk',
  en = 'en',
}

export type keyofELocalization = keyof typeof ELocalization;

export const ELocalizationText: Record<ELocalization, string> = {
  uk: 'УКР',
  en: 'ENG',
};

export enum EAPIRequest {
  COMMON,
  HOME_PAGE,
  CAREER,
  CONTACTS,
  LIFE,
  ALL_NEWS,
  NEWS_INSTANCE,
  LOCATIONS,
  CHARITY_PAGE,
  ALL_CHARITIES,
  CHARITY_INSTANCE,
  TEAM,
  ABOUT_US,
  MESSAGE_US,
}

export type keyofEAPIRequest = keyof typeof EAPIRequest;
