import React from "react";
import { Link } from "react-router";

const TutorCard = ({ singleTutor }) => {
  const { _id, name, image, language, price, review, description } =
    singleTutor;
  return (
    <div className="bg-slate-200 rounded-sm shadow-xl">
      <div className="flex gap-4 p-3 items-center">
        <img className="w-20 rounded-xl" src={image} alt="" />
        <div>
          <h3>{name}</h3>
          <p>
            <span className="font-semibold">Language:</span> {language}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price}
          </p>
          <p>
            <span className="font-semibold">Review:</span> {review}
          </p>
          <p>
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
