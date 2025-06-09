import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const AuthLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-[url(/assets/Banner.jpg)] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute top-0 right-0 left-0 h-screen bg-black opacity-60"></div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
