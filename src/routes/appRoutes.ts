import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';

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
];
