import React, { FC } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ROUTES } from '../routes';
import { isDev } from '../util/isDev';
import { Nav } from './components/Nav';

const queryCache = new QueryCache();

interface Props {}

const App: FC<Props> = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <Nav />
        <Switch>
          {Object.entries(ROUTES).map(([key, route]) => (
            <Route path={route.path} key={key} exact>
              <route.component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={isDev()} />
    </ReactQueryCacheProvider>
  );
};

export default App;
