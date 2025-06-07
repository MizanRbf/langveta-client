import React from "react";

const TutorCard = ({ singleTutor }) => {
  const { name, image, language, price, review, description } = singleTutor;
  return (
    <div className="bg-slate-200 rounded-sm shadow-xl">
      <div className="flex gap-4 p-3">
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
      <button className="bg-secondary text-white px-3 w-full rounded-b-sm font-bold">
        Book Now
      </button>
    </div>
  );
};

export default TutorCard;
