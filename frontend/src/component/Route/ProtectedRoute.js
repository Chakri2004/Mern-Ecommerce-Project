import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return <Redirect to="/login" />;
        if (isAdmin && user.role !== "admin") return <Redirect to="/login" />;
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
