export enum EColor {
  dark,
  white,
}
export enum ELocalization {
  uk = 'uk',
  en = 'en',
}

export type keyofELocalization = keyof typeof ELocalization;
