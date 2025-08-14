import React from "react";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router";
import HashLink from "../HashLink";

const LargeDevice = ({ isHome, isScrolled }) => {
  const { user } = useAuth();
  return (
    <div
      className={`space-x-4  hidden lg:block *:px-3 transition-all duration-500 ease-in-out font-bold text-white`}
    >
      <NavLink
        onClick={() => window.scrollTo(0, 0)}
        to="/"
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${isActive && "underline"}`
        }
      >
        Home
      </NavLink>

      {isHome && (
        <>
          <HashLink
            href="#language"
            label="Language"
            isScrolled={isScrolled}
            isHome={isHome}
          />
          <HashLink
            href="#topRatedTutors"
            label="Top Rated Tutors"
            isScrolled={isScrolled}
            isHome={isHome}
          />
          <HashLink
            href="#contact"
            label="Contact"
            isScrolled={isScrolled}
            isHome={isHome}
          />
        </>
      )}

      <NavLink
        to="/findTutors"
        className={({ isActive }) =>
          `px-3 transition-all duration-300 ${isActive && "underline"}`
        }
      >
        Find tutors
      </NavLink>

      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-3 transition-all duration-300 ${isActive && "underline"}`
          }
        >
          Dashboard
        </NavLink>
      )}
    </div>
  );
};

export default LargeDevice;
