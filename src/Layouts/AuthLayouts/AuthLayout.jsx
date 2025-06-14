import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const AuthLayout = () => {
  return (
    <div className="">
      <div className="min-h-screen bg-[url(/assets/Banner.jpg)] bg-no-repeat bg-cover bg-center relative px-4 md:px-0 pb-40 md:pb-0">
        <div className="absolute top-0 right-0 left-0 h-screen bg-black opacity-70"></div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
