import { Route, Redirect, useLocation } from "react-router-dom";
import permissionCheker from "../../../modules/auth/permissionChecker";
import LayoutPage from "../../../View/layout/LayoutPage";

function PrivateRoute({ path, component: Component, currentUser, ...reset }) {
  const location = useLocation();
  return (
    <Route
      {...reset}
      render={(props) => {
        const permissionChecker = new permissionCheker(currentUser);
        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: "/auth/signin", state: { from: location } }}
            />
          );
        }
        return (
          <LayoutPage>
            <Component {...props} />
          </LayoutPage>
        );
      }}
    />
  );
}

export default PrivateRoute;
