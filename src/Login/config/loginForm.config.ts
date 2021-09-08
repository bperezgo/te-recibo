import { InputText, InputTextProps } from '../../lib/components/InputText';
import { ILoginConfig } from '../interfaces/loginConfig.interface';

export const LOGIN_FORM_CONFIG: ILoginConfig<InputTextProps>[] = [
  {
    Component: InputText,
    props: {
      label: 'Email',
      id: '2',
      variant: 'outlined',
      name: 'email',
    },
  },
  {
    Component: InputText,
    props: {
      type: 'password',
      label: 'Password',
      id: '4',
      variant: 'outlined',
      name: 'password',
    },
  },
];
