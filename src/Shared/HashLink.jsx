import { useLocation } from "react-router";
import React, { useEffect, useState } from "react";
const HashLink = ({ href, label, isScrolled }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.hash === href);
  }, [location, href]);

  return (
    <a
      href={href}
      className={`px-3 transition-all duration-300 ${
        isActive
          ? "text-white bg-primary rounded-xs"
          : isScrolled
          ? "text-black"
          : "text-white"
      }`}
    >
      {label}
    </a>
  );
};

export default HashLink;
