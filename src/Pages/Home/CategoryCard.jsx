import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const CategoryCard = ({ tutorCategory }) => {
  console.log(tutorCategory);
  return (
    <Link to="">
      <div className="bg-slate-200 p-3 rounded-sm flex items-center justify-between  shadow-xl hover:bg-slate-300 duration-300">
        <div>
          <img src={tutorCategory.icon} alt="" />
          <h3>{tutorCategory.title}</h3>
          <p>
            <span className="font-semibold">Teachers:</span>{" "}
            {tutorCategory.teachers}
          </p>
        </div>
        <IoIosArrowForward />
      </div>
    </Link>
  );
};

export default CategoryCard;
