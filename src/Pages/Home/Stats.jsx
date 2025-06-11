import React from "react";
import CountUp from "react-countup";

const Stats = ({ allTutors, totalReviews, languageCount, totalUsers }) => {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 grid justify-center grid-cols-2 text-center lg:grid-cols-4">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp end={allTutors.length} duration={20} />+
          </p>
          <p className="text-sm sm:text-base">Tutors</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp end={totalReviews} duration={20} />+
          </p>
          <p className="text-sm sm:text-base">Reviews</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp end={languageCount} duration={20} />+
          </p>
          <p className="text-sm sm:text-base">Languages</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">
            <CountUp end={totalUsers} duration={20} />+
          </p>
          <p className="text-sm sm:text-base">Users</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
