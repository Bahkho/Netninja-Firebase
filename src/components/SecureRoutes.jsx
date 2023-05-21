import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const SecureRoutes = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Outlet />;
    // return children ? children : <Outlet />;
  } else {
    return <Navigate to="/" replace={true} />;
  }

  // return children;
};

export default SecureRoutes;
