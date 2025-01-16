import { IAboutUsMessage } from './aboutUs.localization';
import { ICareerMessage } from './career.localization';
import { ICharityMessage } from './charity.localization';
import { ICommonMessage } from './common.localization';
import { IContactsMessage } from './contacts.localization';
import { IHomeMessage } from './home.localization';
import { ILifeMessage } from './life.localization';
import { ILocationsMessage } from './locations.localization';
import { IMessageUs } from './messageUs.request';
import { INewsMessage } from './news.localizatio';
import { ITeamMessage } from './team.localization';

export interface IGetMessages {
  COMMON?: ICommonMessage;
  HOME_PAGE?: IHomeMessage;
  ABOUT_US?: IAboutUsMessage;
  LIFE?: ILifeMessage;
  TEAM?: ITeamMessage;
  CAREER?: ICareerMessage;
  CONTACTS?: IContactsMessage;
  LOCATIONS?: ILocationsMessage;
  ALL_NEWS?: INewsMessage;
  CHARITY_PAGE?: ICharityMessage;
  ALL_CHARITIES?: INewsMessage;
}

export interface IPostData {
  MESSAGE_US?: IMessageUs;
}
