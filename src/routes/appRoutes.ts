import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';

export const appRoutes: RouteConfig[] = [
	{
   key: 1,
   path: '/',
   exact: true,
   component: Home,
  },
]
