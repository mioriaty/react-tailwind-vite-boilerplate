import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Page404 from 'containers/404Page/404Page';
import { HomePage } from 'containers/HomePage';
import { Page } from './types';

export const pages: Page[] = [
  { path: '/', exact: true, component: HomePage },
  { path: '/page404', exact: true, component: Page404 },
];

const Routes = () => {
  return (
    <BrowserRouter>
      {/* === HEADER... === */}

      {/* === PAGE CONTENT... === */}
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return <Route key={path} component={component} exact={exact} path={path} />;
        })}
        <Route component={Page404} />
      </Switch>

      {/* === FOOTER... === */}
    </BrowserRouter>
  );
};

export default Routes;
