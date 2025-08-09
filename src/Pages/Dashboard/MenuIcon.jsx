import React from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const MenuIcon = ({ setOpen, open }) => {
  return (
    <div
      className={`py-1 px-3 rounded-sm lg:hidden 
        fixed right-10 bg-primary`}
    >
      <span onClick={() => setOpen(!open)}>
        {open ? (
          <RxCross2 className={`cursor-pointer text-white text-2xl `} />
        ) : (
          <MdMenu className={`cursor-pointer text-white text-2xl`} />
        )}
      </span>
    </div>
  );
};

export default MenuIcon;
