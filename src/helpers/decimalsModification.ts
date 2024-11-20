export const decimalsModification = (value: number): string => {
  if (value >= 10) return value.toString();
  return '0' + value;
};
