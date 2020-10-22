import { FunctionComponent } from 'react';
import { Home } from './ui/home/screens/Home';

type Route = {
  path: string;
  component: FunctionComponent;
};

export const ROUTES: { [key: string]: Route } = {
  home: {
    component: Home,
    path: '/',
  },
};
