import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  JSX,
  TextareaHTMLAttributes,
} from 'react';

export interface IInputUIProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean;
  labelText?: JSX.Element | string;
}

export interface ITextareaUIProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: boolean;
  labelText?: JSX.Element | string;
}
