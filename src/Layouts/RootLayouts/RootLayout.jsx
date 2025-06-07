import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-230px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
