// import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  console.log(window.location.pathname, "from the authRoute");
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
