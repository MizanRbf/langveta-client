import React from "react";
import { Link } from "react-router";

const MyBookedTutors = () => {
  return (
    <div className="pt-25">
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="pb-10">My Booked Tutors</h1>
        <Link
          className="bg-secondary text-white p-2 rounded-sm font-bold"
          to={-1}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MyBookedTutors;
