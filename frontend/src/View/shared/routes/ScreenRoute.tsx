import { Route, Redirect, useLocation } from "react-router-dom";
import permissionCheker from "../../../modules/auth/permissionChecker";
import LayoutPage from "../../layout/LayoutPage";

function ScreenRoute({ path, component: Component, currentUser, ...reset }) {
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
          <div className="children__content">
            <Component {...props} />
          </div>
        );
      }}
    />
  );
}

export default ScreenRoute;
