export enum EColor {
  dark,
  white,
}
export enum ELocalization {
  uk = 'uk',
  en = 'en',
}

export type keyofELocalization = keyof typeof ELocalization;

export enum EAPIRequest {
  COMMON,
  HOME_PAGE,
  CAREER,
  CONTACTS,
  LIFE,
  LOCATIONS,
  ALL_NEWS,
  NEWS_INSTANCE,
  CHARITY_PAGE,
  ALL_CHARITIES,
  TEAM,
  ABOUT_US,
  MESSAGE_US,
  CHARITY_INSTANCE,
}

export type keyofEAPIRequest = keyof typeof EAPIRequest;
