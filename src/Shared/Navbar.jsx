import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

import { Tooltip } from "react-tooltip";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../Hooks/useAuth";
import DarkMood from "./DarkMood";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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

          {/* Menubar for Small Device */}
          <nav
            className={`top-18 lg:hidden right-0 left-0 absolute py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
              open
                ? "opacity-100 translate-y-2 visible"
                : "opacity-0 -translate-y-5 invisible"
            }`}
          >
            <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
              <li>
                <button onClick={() => setOpen(false)}>
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li>
                <button onClick={() => setOpen(false)}>
                  <Link to="/dashboard">Dashboard</Link>
                </button>
              </li>
            </ul>
            {/* Login Button */}

            <div className="px-10">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer py-2 mt-2 bg-white rounded-sm text-primary shadow-2xl w-full hover:bg-[rgb(248,237,208)]"
                >
                  Logout
                </button>
              ) : (
                <Link to="/auth/login">
                  <button
                    className="cursor-pointer py-2 mt-2 bg-white rounded-sm
                    text-primary shadow-2xl w-full"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>

        {/* Menubar for Large Device */}
        <div
          className={`space-x-4  hidden lg:block *:px-3 transition-all duration-500 ease-in-out font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 transition-all duration-300 ${
                isHome
                  ? isActive
                    ? "text-white bg-primary rounded-xs"
                    : isScrolled
                    ? "text-black"
                    : "text-white"
                  : "text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/findTutors"
            className={({ isActive }) =>
              `px-3 transition-all duration-300 ${
                isActive
                  ? "text-white bg-primary rounded-xs"
                  : isHome
                  ? isScrolled
                    ? "text-black"
                    : "text-white"
                  : "text-black"
              }`
            }
          >
            Find tutors
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 transition-all duration-300 ${
                  isActive
                    ? "text-white bg-primary rounded-xs"
                    : isHome
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

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
