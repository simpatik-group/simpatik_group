import { keyofEAPIRequest } from '@/interfaces/enums';
import { IGetMessages, IPostData } from '@/interfaces/request.request';

import { staticValues } from '@/helpers/staticValues';

interface IAPIRequest {
  url: keyofEAPIRequest;
  options?: {
    body: IPostData[keyof IPostData];
    method?: string;
  };
  localization?: string;
  pagination?: string;
  restQueryParams?: string;
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
  private TEAM = `/team?populate=*`;
  private CAREER = `/career?populate=*`;
  private LOCATIONS = `/location?populate=*`;
  private CONTACTS = `/contact?populate=*`;
  private ALL_NEWS = `/posts?fields=title&fields=description&fields=date&fields=url&sort=date:desc&pagination[limit]=${staticValues.PAGINATION_VALUE}`;
  private NEWS_INSTANCE = `/posts?populate=*`;
  private CHARITY_PAGE = `/charity-page?populate=*`;
  private ALL_CHARITIES = `/charities?fields=title&fields=description&fields=date&fields=url&populate[cover][fields]=url&sort=date:desc&pagination[limit]=${staticValues.PAGINATION_VALUE}`;
  private CHARITY_INSTANCE = `/charities?fields=title&fields=description&fields=date&fields=url&populate[cover][fields]=url`;
  private MESSAGE_US = `/messages`;

  private API = async ({
    url,
    localization,
    options,
    pagination,
    restQueryParams,
  }: IAPIRequest) => {
    if (!(url in this)) {
      console.log(`Invalid URL key: ${url}`);
      throw new Error(`Invalid URL key: ${url}`);
    }

    const requestUrl = `${process.env.NEXT_PUBLIC_DOMAIN}${this[url]}${
      localization ? `&locale=${localization}` : ''
    }${pagination ? pagination : ''}${restQueryParams ? restQueryParams : ''}`;

    const fetchOptions: RequestInit = {
      next: { revalidate: Number(process.env.REVALIDATING_TIME) },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    };
    if (options?.method) fetchOptions.method = options.method;
    if (options?.body)
      fetchOptions.body = JSON.stringify({ data: options.body });

    const resp = await fetch(requestUrl, fetchOptions);
    if (!resp.ok) {
      console.log(
        `API Error: ${resp.status} ${resp.statusText}, url: ${requestUrl}`,
      );
      throw new Error(
        `API Error: ${resp.status} ${resp.statusText}, url: ${requestUrl}`,
      );
    }

    const data = await resp.json();

    if (pagination) return data;

    return data.data;
  };

  async getRequest({
    localization,
    urls,
    options,
    pagination,
    restQueryParams,
  }: IGetRequest): Promise<IGetMessages> {
    const returnedMessages: IGetMessages = {};

    await Promise.all(
      urls.map(async (url) => {
        returnedMessages[url] = await this.API({
          url,
          localization,
          options,
          pagination,
          restQueryParams,
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
