import React from "react";
import Stats from "./Stats";
import Rechart from "./Rechart";

const RightSection = ({
  bookedTutors,
  myTutorials,
  totalUsers,
  languageCount,
  totalReviews,
  allTutors,
}) => {
  return (
    <div className="mx-auto w-full">
      <div className="lg:block justify-center hidden pt-4">
        <h1 className="text-center border inline-block px-4 bg-secondary text-white rounded-sm mb-8">
          User Dashboard
        </h1>
      </div>

      <div className="">
        {/* Stats Section */}
        <Stats
          allTutors={allTutors}
          totalReviews={totalReviews}
          languageCount={languageCount}
          totalUsers={totalUsers}
          myTutorials={myTutorials}
          bookedTutors={bookedTutors}
        ></Stats>
        <Rechart bookedTutors={bookedTutors} />

        {/* Empty data notification */}
        <div
          className={`bg-slate-100 rounded-lg m-4 mb-20 py-30 ${
            bookedTutors.length > 0 ? "hidden" : "block"
          }`}
        >
          <h1 className="text-center text-black">Chart is not shown!</h1>
          <h4 className="text-center mt-8 text-black">
            You have not added any task yet.Go to Add Task for posting your
            task.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
