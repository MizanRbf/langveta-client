import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import {
  FaDollarSign,
  FaLanguage,
  FaSackDollar,
  FaStar,
} from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router";

const TutorCard = ({ singleTutor }) => {
  const { _id, name, image, language, price, review, description } =
    singleTutor;
  return (
    <div className="bg-slate-200 rounded-sm shadow-xl text-black border border-slate-300">
      <div className="flex gap-4 p-3 items-center">
        <img className="w-20 rounded-xl" src={image} alt="" />
        <div>
          <h3>{name}</h3>
          <p className="flex items-center gap-1">
            <IoLanguageSharp />
            <span className="font-semibold">Language:</span> {language}
          </p>
          <p className="flex items-center gap-1">
            <FaSackDollar />
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="flex items-center gap-1">
            <MdPreview />
            <span className="font-semibold">Review:</span> {review}
          </p>
          <p className="flex items-center gap-1">
            <FaInfoCircle />
            <span className="font-semibold">Details:</span> {description}
          </p>
        </div>
      </div>
      <Link to={`/tutor/${_id}`}>
        <button className="bg-secondary text-white px-3 w-full rounded-b-sm font-bold cursor-pointer">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default TutorCard;
