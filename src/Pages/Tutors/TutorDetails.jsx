import React from "react";
import { useLoaderData } from "react-router";

const TutorDetails = () => {
  const tutor = useLoaderData();
  const { _id, name, image, language, price, review, description } = tutor;
  return (
    <div className="pt-25 px-4">
      <div className="max-w-[1400px] mx-auto px-4 border border-slate-200 rounded-sm">
        <div className="flex items-center gap-4 p-3">
          <img className="w-60 rounded-xl" src={image} alt="" />
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
      </div>
    </div>
  );
};

export default TutorDetails;
