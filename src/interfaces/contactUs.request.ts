export interface IContactUs {
  data: {
    name: string;
    phone: string;
    email?: string;
    recaptcha: string;
    message: string;
  };
}
