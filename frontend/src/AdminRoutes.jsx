import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";

const AdminRoutes = () => {
  let { user } = useContext(AuthContext);

  return user.username == "Yönetici" || user.username == "Jebolwski" ? (
    <Outlet />
  ) : (
    <Navigate to="/fouronefour" />
  );
};

export default AdminRoutes;
