import React, { useContext } from "react";
import { Redirect, Navigate, Outlet } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
const ProtectedRoutes = () => {
  let { user } = useContext(AuthContext);

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
