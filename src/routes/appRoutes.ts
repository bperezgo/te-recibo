import { RouteConfig } from 'react-router-config';
import { Home } from '../Home/view';
import { Login } from '../Login/view';
import { Signup } from '../Signup/view';

export const appRoutes: RouteConfig[] = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: 2,
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    key: 3,
    path: '/sign-up',
    exact: true,
    component: Signup,
  },
];
