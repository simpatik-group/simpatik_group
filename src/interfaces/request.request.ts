import { IAboutUsMessage } from './aboutUs.localization';
import { ICareerMessage } from './career.localization';
import { ICommonMessage } from './common.localization';
import { IContactsMessage } from './contacts.localization';
import { IHomeMessage } from './home.localization';
import { ILifeMessage } from './life.localization';
import { ILocationsMessage } from './locations.localization';
import { IMessageUs } from './messageUs.request';
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
  NEWS?: ILifeMessage;
  CHARITIES?: ILifeMessage;
}

export interface IPostData {
  MESSAGE_US?: IMessageUs;
}
