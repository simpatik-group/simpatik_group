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
import { INewsInstantMessage } from './newsInstanse.localization';
import { ITeamMessage } from './team.localization';

export interface IGetMessages {
  COMMON?: ICommonMessage;
  HOME_PAGE?: IHomeMessage;
  CAREER?: ICareerMessage;
  CONTACTS?: IContactsMessage;
  LIFE?: ILifeMessage;
  ALL_NEWS?: INewsMessage;
  NEWS_INSTANCE?: INewsInstantMessage;
  LOCATIONS?: ILocationsMessage;
  CHARITY_PAGE?: ICharityMessage;
  ALL_CHARITIES?: INewsMessage;
  CHARITY_INSTANCE?: INewsInstantMessage;
  TEAM?: ITeamMessage;
  ABOUT_US?: IAboutUsMessage;
}

export interface IPostData {
  MESSAGE_US?: IMessageUs;
}
