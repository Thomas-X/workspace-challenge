import React, { FC } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ROUTES } from '../routes';

const queryCache = new QueryCache();
const history = createHashHistory();

interface Props {}

const App: FC<Props> = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Router history={history}>
        <Switch>
          {Object.entries(ROUTES).map(([key, route]) => (
            <Route path={route.path} key={key}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </ReactQueryCacheProvider>
  );
};

export default App;
