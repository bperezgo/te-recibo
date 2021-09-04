import { InputText, InputTextProps } from '../components/InputText';
import { ISignupConfig } from '../interfaces/signupConfig.interface';

export const SIGNUP_FORM_CONFIG: ISignupConfig<InputTextProps>[] = [
  {
    Component: InputText,
    props: {
      label: 'Nombre',
      id: '1',
      variant: 'outlined',
    },
  },
  {
    Component: InputText,
    props: {
      label: 'Email',
      id: '2',
      variant: 'outlined',
    },
  },
  {
    Component: InputText,
    props: {
      label: 'Número de telefono',
      id: '3',
      variant: 'outlined',
    },
  },
  {
    Component: InputText,
    props: {
      type: 'password',
      label: 'Password',
      id: '4',
      variant: 'outlined',
    },
  },
];
