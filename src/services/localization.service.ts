import { ICommonLocalization } from '@/interfaces/common.localization';
import { ELocalization } from '@/interfaces/enums';
import { IHomeLocalization } from '@/interfaces/home.localization';
import { ILifeLocalization } from '@/interfaces/life.localization';

interface IAPIRequest {
  url: string;
  method?: string;
  localization?: keyof typeof ELocalization;
}

class LocalizationService {
  private COMMON = `/common?populate=social_links.image&populate=menu`;
  private HOME_PAGE = `/homepage?populate=*`;
  private CAREER = `/career?populate=*`;
  private CONTACT = `/contact?populate=*`;
  private LIFE = `/life?populate=*`;
  private LOCATIONS = `/location?populate=*`;
  private POSTS = `/posts?populate=*`;
  private TEAM = `/team?populate=*`;
  private API = async ({ url, method, localization = 'uk' }: IAPIRequest) =>
    await fetch(
      process.env.NEXT_PUBLIC_DOMAIN + url + `&locale=${localization}`,
      {
        method,
        cache: 'force-cache',
      },
    );

  async getCommon(
    localization?: keyof typeof ELocalization,
  ): Promise<ICommonLocalization> {
    const resp = await this.API({ url: this.COMMON, localization });
    const data = await resp.json();
    return data.data;
  }

  async getHomePage(
    localization?: keyof typeof ELocalization,
  ): Promise<IHomeLocalization> {
    const resp = await this.API({ url: this.HOME_PAGE, localization });
    const data = await resp.json();
    return data.data;
  }
  async getLife(
    localization?: keyof typeof ELocalization,
  ): Promise<ILifeLocalization> {
    const resp = await this.API({ url: this.LIFE, localization });
    const data = await resp.json();
    return data.data;
  }
}

export default new LocalizationService();

// private API = async ({ url, method, localization = 'uk' }: IAPIRequest) => {
//     const resp = await fetch(
//       `${process.env.NEXT_PUBLIC_DOMAIN}${url}&locale=${localization}`,
//       {
//         method,
//         cache: 'force-cache',
//       },
//     );
//     const data = await resp.json();
//     return data.data;
//   };
//   private createFetcher<T>({ url, method }: Omit<IAPIRequest, 'localization'>) {
//     return async (
//       localization: keyof typeof ELocalization = 'uk',
//     ): Promise<T> => {
//       return await this.API({ url, method, localization });
//     };
//   }

//   getCommon = this.createFetcher<ICommonLocalization>({
//     url: this.COMMON,
//     method: 'GET',
//   });

//   getHomePage = this.createFetcher<IHomeLocalization>({
//     url: this.HOME_PAGE,
//     method: 'GET',
//   });
