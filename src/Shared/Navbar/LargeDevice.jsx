import React from "react";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router";
import HashLink from "../HashLink";

const LargeDevice = ({ isHome, isScrolled }) => {
  const { user } = useAuth();
  return (
    <div
      className={`space-x-4  hidden lg:block *:px-3 transition-all duration-500 ease-in-out font-bold ${
        isScrolled ? "text-black" : "text-white"
      }`}
    >
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
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

      {isHome && (
        <>
          <HashLink href="#language" label="Language" isScrolled={isScrolled} />
          <HashLink
            href="#topRatedTutors"
            label="Top Rated Tutors"
            isScrolled={isScrolled}
          />
          <HashLink
            href="#global"
            label="Global Learners"
            isScrolled={isScrolled}
          />
        </>
      )}

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
  );
};

export default LargeDevice;
