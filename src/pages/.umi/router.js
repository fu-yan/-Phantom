import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layout/index.js').default,
    "routes": [
      {
        "path": "/cinecism",
        "exact": true,
        "component": require('../cinecism/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/movie",
        "exact": true,
        "component": require('../movie/index.js').default
      },
      {
        "path": "/movie/:id",
        "exact": true,
        "component": require('../movie/$id.js').default
      },
      {
        "path": "/read",
        "exact": true,
        "component": require('../read/index.js').default
      },
      {
        "path": "/read/:id",
        "exact": true,
        "component": require('../read/$id.js').default
      },
      {
        "path": "/speech",
        "exact": true,
        "component": require('../speech/index.js').default
      },
      {
        "component": () => React.createElement(require('C:/Users/shinelon/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/shinelon/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
