'use client';
export const formatDate = (
  date: string,
  option: Intl.DateTimeFormatOptions,
): string => {
  const localDate = new Date(date);

  const userLocale =
    typeof navigator !== 'undefined' ? navigator.language : 'ua-Uk';

  const formatter = new Intl.DateTimeFormat(userLocale, option);

  const parts = formatter.formatToParts(localDate);
  const formattedDate = parts
    .filter((part) => part.type !== 'literal' && part.type !== 'era')
    .map((part) => part.value)
    .join(' ');
  return formattedDate;
};

// export const useFormatDate = (
//   date: string,
//   option: Intl.DateTimeFormatOptions,
// ): string => {
//   const [formattedDate, setFormattedDate] = useState<string>('');

//   useEffect(() => {
//     const localDate = new Date(date);

//     // Detect user locale on the client side
//     const userLocale =
//       typeof navigator !== 'undefined' ? navigator.language : 'en-US';

//     const formatter = new Intl.DateTimeFormat(userLocale, option);

//     const parts = formatter.formatToParts(localDate);
//     const formatted = parts
//       .filter((part) => part.type !== 'literal' && part.type !== 'era')
//       .map((part) => part.value)
//       .join(' ');

//     setFormattedDate(formatted);
//   }, [date]);

//   return formattedDate;
// };
