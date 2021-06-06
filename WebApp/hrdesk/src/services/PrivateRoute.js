import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !rest.isLoggedIn ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : !rest.hasPermission ? (
          <Redirect to={{ pathname: "/accessdenied" }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
