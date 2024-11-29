import { IAboutUsMessage } from './aboutUs.localization';
import { ICommonMessage } from './common.localization';
import { IContactsMessage } from './contacts.localization';
import { IHomeMessage } from './home.localization';
import { ILifeMessage } from './life.localization';
import { ILocationsMessage } from './locations.localization';
import { IMessageUs } from './messageUs.request';

export interface IGetMessages {
  COMMON?: ICommonMessage;
  HOME_PAGE?: IHomeMessage;
  LIFE?: ILifeMessage;
  CAREER?: ILifeMessage;
  CONTACTS?: IContactsMessage;
  LOCATIONS?: ILocationsMessage;
  NEWS?: ILifeMessage;
  CHARITIES?: ILifeMessage;
  TEAM?: ILifeMessage;
  ABOUT_US?: IAboutUsMessage;
}

export interface IPostData {
  MESSAGE_US?: IMessageUs;
}
