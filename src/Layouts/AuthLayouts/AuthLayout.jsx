import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen bg-[url(/assets/Banner.jpg)] bg-no-repeat bg-cover bg-center">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
