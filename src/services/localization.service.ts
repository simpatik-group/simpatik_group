import { ILocalizationContext } from '@/context/localization.context';

import { keyofELocalization } from '@/interfaces/enums';

interface IAPIRequest {
  url: keyof ILocalizationContext;
  method?: string;
  localization: keyofELocalization;
}

class LocalizationService {
  private COMMON = `/common?populate=social_links.image&populate=menu`;
  private HOME_PAGE = `/homepage?populate=*`;
  private CAREER = `/career?populate=*`;
  private CONTACTS = `/contact?populate=*`;
  private LIFE = `/life?populate=*`;
  private LOCATIONS = `/location?populate=*`;
  private NEWS = `/posts?populate=*`;
  private CHARITIES = `/posts?populate=*`;
  private TEAM = `/team?populate=*`;

  private API = async ({ url, method, localization }: IAPIRequest) => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}${this[url]}&locale=${localization}`,
      {
        method,
        next: { revalidate: Number(process.env.REVALIDATING_TIME) },
      },
    );
    const data = await resp.json();
    return data.data;
  };

  async getLocalizations(
    localization: keyofELocalization,
    namespace: (keyof ILocalizationContext)[],
    method?: string,
  ): Promise<ILocalizationContext> {
    const returnedMessages: ILocalizationContext = {};

    await Promise.all(
      namespace.map(async (url) => {
        returnedMessages[url] = await this.API({
          url,
          localization,
          method,
        });
      }),
    );

    return returnedMessages;
  }
}

export default new LocalizationService();
