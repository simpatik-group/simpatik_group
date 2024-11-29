import { ILocalizationContext } from '@/context/localization.context';

import { keyofELocalization } from '@/interfaces/enums';

interface IAPIRequest {
  url: keyof ILocalizationContext;
  options?: {
    body: {};
    method?: string;
  };
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
  private CONTACT_US = `/emails`;
  private ABOUTUS = `/about-us?populate=hero_image&populate=section.image`;

  private API = async ({ url, localization, options }: IAPIRequest) => {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}${this[url]}&locale=${localization}`,
      {
        method: options?.method || 'GET',
        body: JSON.stringify(options?.body),
        next: { revalidate: Number(process.env.REVALIDATING_TIME) },
      },
    );
    const data = await resp.json();
    return data.data;
  };

  async getLocalizations(
    localization: keyofELocalization,
    namespace: (keyof ILocalizationContext)[],
    options?: {
      body: {};
      method?: string;
    },
  ): Promise<ILocalizationContext> {
    const returnedMessages: ILocalizationContext = {};

    await Promise.all(
      namespace.map(async (url) => {
        returnedMessages[url] = await this.API({
          url,
          localization,
          options,
        });
      }),
    );

    return returnedMessages;
  }
}

export default new LocalizationService();
