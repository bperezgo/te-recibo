import { InputText } from '../../components/InputText';

export const LOGIN_FORM_CONFIG = [
  {
    component: InputText,
    props: {
			key: 1,
      label: 'Nombre',
      id: '1',
      variant: 'outlined',
    },
  },
  {
    component: InputText,
    props: {
			key: 2,
      label: 'Email',
      id: '2',
      variant: 'outlined',
    },
  },
  {
    component: InputText,
    props: {
			key: 3,
      label: 'Número de telefono',
      id: '3',
      variant: 'outlined',
    },
  },
  {
    component: InputText,
    props: {
			key: 4,
      type: 'password',
      label: 'Password',
      id: '4',
      variant: 'outlined',
    },
  },
];
