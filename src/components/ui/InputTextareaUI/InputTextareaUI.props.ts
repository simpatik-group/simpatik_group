import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export interface IInputUIProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelText?: JSX.Element | string;
}

export interface ITextareaUIProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  labelText?: JSX.Element | string;
}
