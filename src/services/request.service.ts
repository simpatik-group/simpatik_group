import { keyofEAPIRequest, keyofELocalization } from '@/interfaces/enums';
import { IGetMessages, IPostData } from '@/interfaces/request.request';

interface IAPIRequest {
  url: keyofEAPIRequest;
  options?: {
    body: IPostData[keyof IPostData];
    method?: string;
  };
  localization?: keyofELocalization;
}
interface IGetRequest extends Omit<IAPIRequest, 'url'> {
  urls: (keyof IGetMessages)[];
}
interface IPostRequest extends Omit<IAPIRequest, 'localization'> {
  url: keyof IPostData;
}

class RequestService {
  private COMMON = `/common?populate=social_links.image&populate=menu`;
  private HOME_PAGE = `/homepage?populate=*`;
  private ABOUT_US = `/about-us?populate=hero_image&populate=section.image`;
  private LIFE = `/life?populate=*`;
  private TEAM = `/team?populate=departments.image`;
  private CAREER = `/career?populate=*`;
  private LOCATIONS = `/location?populate=*`;
  private CONTACTS = `/contact?populate=*`;
  private NEWS = `/posts?filters[type][$eq]=news&populate=*`;
  private CHARITIES = `/posts?filters[type][$eq]=charity&populate=*`;
  private MESSAGE_US = `/messages`;

  private API = async ({ url, localization, options }: IAPIRequest) => {
    if (!(url in this)) {
      throw new Error(`Invalid URL key: ${url}`);
    }

    const requestUrl = `${process.env.NEXT_PUBLIC_DOMAIN}${this[url]}${localization ? `&locale=${localization}` : ''}`;

    const fetchOptions: RequestInit = {
      next: { revalidate: Number(process.env.REVALIDATING_TIME) },
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (options?.method) fetchOptions.method = options.method;
    if (options?.body)
      fetchOptions.body = JSON.stringify({ data: options.body });

    const resp = await fetch(requestUrl, fetchOptions);
    if (!resp.ok) {
      throw new Error(`API Error: ${resp.status} ${resp.statusText}`);
    }

    const data = await resp.json();
    return data.data;
  };

  async getRequest({
    localization,
    urls,
    options,
  }: IGetRequest): Promise<IGetMessages> {
    const returnedMessages: IGetMessages = {};

    await Promise.all(
      urls.map(async (url) => {
        returnedMessages[url] = await this.API({
          url,
          localization,
          options,
        });
      }),
    );

    return returnedMessages;
  }

  async postRequest({ url, options }: IPostRequest): Promise<IPostData> {
    return await this.API({
      url,
      options,
    });
  }
}

export default new RequestService();
