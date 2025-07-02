import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { Tooltip } from "react-tooltip";

import { RxCross2 } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import DarkMood from "../DarkMood";

import { MdMenu } from "react-icons/md";

import LargeDevice from "./LargeDevice";
import SmallDevice from "./SmallDevice";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // useEffect hashActive

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  // sign out
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        // console.log("signOut successfully");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className={` text-black fixed right-0 top-0 left-0 z-999 transform transition-all duration-300 ease-in-out ${
        isHome
          ? isScrolled
            ? "bg-white py-3 shadow-xl"
            : "bg-[rgba(0,0,0,0.52)] py-5"
          : "bg-white shadow-xl py-4"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <div>
            <img
              className="w-35 bg-white rounded-sm border-2 px-2 border-primary py-1 md:py-2"
              src="/assets/logo2.png"
              alt=""
            />
          </div>
        </div>

        {/* Menubar for Large Device */}
        <LargeDevice isHome={isHome} isScrolled={isScrolled}></LargeDevice>

        {/* Menubar for Small Device */}
        <SmallDevice
          open={open}
          setOpen={setOpen}
          handleSignOut={handleSignOut}
          isHome={isHome}
          isScrolled={isScrolled}
        ></SmallDevice>

        {/* Login Info */}
        <div className="flex gap-4 items-center">
          <div className="bg-white rounded-4xl p-1 rounded-">
            <DarkMood></DarkMood>
          </div>
          {/* User Info */}
          <div>
            {user && (
              <a className="my-anchor-element">
                <div className="relative group ring-primary ring-1 ring-offset-1 rounded-full">
                  <img
                    className=" rounded-full min-w-[30px] md:min-w-[35px] h-[30px] md:h-[35px]"
                    src={user?.photoURL || "/default-avatar.png"}
                    alt="User"
                  />
                </div>

                <Tooltip anchorSelect=".my-anchor-element" place="left">
                  <p>{user?.displayName || "User"}</p>
                </Tooltip>
              </a>
            )}
          </div>

          {/* Responsive Icon */}
          <div
            className={`py-1 px-3 rounded-sm lg:hidden ${
              isScrolled ? "bg-slate-200 shadow-2xl" : "bg-white"
            }`}
          >
            <span onClick={() => setOpen(!open)}>
              {open ? (
                <RxCross2
                  className={`cursor-pointer   text-2xl ${
                    isHome
                      ? isScrolled
                        ? "text-black"
                        : "text-black"
                      : "text-black"
                  }`}
                />
              ) : (
                <MdMenu
                  className={`cursor-pointer text-2xl ${
                    isHome
                      ? isScrolled
                        ? "text-black"
                        : "text-black"
                      : "text-black"
                  }`}
                />
              )}
            </span>
          </div>
          {/* Log Button */}
          <div className="hidden lg:block">
            {user ? (
              <button
                onClick={handleSignOut}
                className="cursor-pointer bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
