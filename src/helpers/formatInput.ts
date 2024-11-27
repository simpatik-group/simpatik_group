export const formatPhoneNumber = (value: string) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');

  // Apply the mask
  let masked = '+38(0';

  if (digits.length > 3) masked += digits.substring(3, 5);
  if (digits.length > 5) masked += `)${digits.substring(5, 8)}`;
  if (digits.length > 8) masked += `-${digits.substring(8, 10)}`;
  if (digits.length > 10) masked += `-${digits.substring(10, 12)}`;

  return masked;
};
