import { Redirect, Route } from "react-router-dom";
import permissionCheker from "../../../modules/auth/permissionChecker";

function PublicRoute({ path, component: Component, currentUser, ...reset }) {
  return (
    <Route
      {...reset}
      render={(props) => {
        const permissionChecker = new permissionCheker(currentUser);
        if (permissionChecker.isAuthenticated) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
