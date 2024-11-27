import { IDivProps } from '@/interfaces/interfaces';

export interface IModalProps extends IDivProps {
  active: boolean;
  toggleActive: () => void;
  modalContent: IModalContent;
}

export interface IModalContent {
  type?: 'success' | 'failed';
  title: JSX.Element | string;
  info: JSX.Element | string;
}
