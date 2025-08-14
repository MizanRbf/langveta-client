import { useLocation } from "react-router";
import React, { useEffect, useState } from "react";
const HashLink = ({ href, label, isScrolled, isHome }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.hash === href);
  }, [location, href]);

  return (
    <a
      href={href}
      className={`px-3 transition-all duration-300 ${isActive && "underline"}`}
    >
      {label}
    </a>
  );
};

export default HashLink;
