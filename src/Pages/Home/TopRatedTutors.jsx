import React from "react";
import { Link } from "react-router";

const TopRatedTutors = ({ topRatedTutors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topRatedTutors.map((tutor) => (
        <div key={tutor._id} className="rounded-lg bg-slate-100 ">
          <div className="relative">
            <img
              className="w-full h-[250px] rounded-tr-lg rounded-tl-lg"
              src={tutor.image}
              alt=""
            />
          </div>

          <div className="bg-slate-200 rounded-bl-xl rounded-br-xl">
            <div className="px-6 space-y-1 py-3  text-black">
              <h2>{tutor.name}</h2>
              <p>
                <span className="font-bold">Language: </span>
                {tutor.language}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {tutor.price}
              </p>
              <p>
                <span className="font-bold">Reviews: </span>
                {tutor.review}
              </p>
              <p>
                <span className="font-bold">Email: </span>

                {tutor.email}
              </p>
            </div>
            <Link to={`/tutor/${tutor._id}`}>
              <button className="bg-secondary text-white px-3 w-full rounded-b-sm font-bold cursor-pointer rounded-bl-xl rounded-br-xl py-2">
                Show Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRatedTutors;
