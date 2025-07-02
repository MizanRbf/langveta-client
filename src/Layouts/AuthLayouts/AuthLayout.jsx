import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/Banner.jpg')] bg-no-repeat bg-cover bg-center z-0"></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Page Content */}
      <div className="relative z-20 px-4 md:px-0 pb-40 min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
