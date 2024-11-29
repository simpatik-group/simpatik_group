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
  NEWS,
  CHARITIES,
  TEAM,
  ABOUT_US,
  MESSAGE_US,
}

export type keyofEAPIRequest = keyof typeof EAPIRequest;
