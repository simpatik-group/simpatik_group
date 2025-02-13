export function createNewsLocalizations(
  localizationList: { locale: string; url: string }[],
) {
  return JSON.stringify(
    localizationList.reduce(
      (acc, item) => {
        if (item.locale && item.url) {
          acc[item.locale] = item.url;
        }
        return acc;
      },
      {} as Record<string, string>,
    ),
  );
}
