import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "../routes";
import lazyRouter from "../Lazyroutes";
import PublicRoute from "./PublicRoute";
import ScreenRoute from "./ScreenRoute";

function RoutesComponent() {
  const currentUser = "123456789";

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          exact
          key={route.path}
          path={route.path}
          component={lazyRouter({ loader: route.loader })}
          currentUser={currentUser}
        />
      ))}
      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          exact
          key={route.path}
          path={route.path}
          component={lazyRouter({ loader: route.loader })}
          currentUser={currentUser}
        />
      ))}

      {routes.screenRoutes.map((route) => (
        <ScreenRoute
          exact
          key={route.path}
          path={route.path}
          component={lazyRouter({ loader: route.loader })}
          currentUser={currentUser}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
