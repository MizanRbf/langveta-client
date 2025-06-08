import React from "react";
import Banner from "../../Shared/Banner";
import Stats from "./Stats";
import TutorCategories from "./TutorCategories";
import TopRatedTutors from "./TopRatedTutors";
import { useLoaderData } from "react-router";

const HomePage = () => {
  const topRatedTutors = useLoaderData();
  return (
    <div className="">
      {/* Banner Section */}
      <Banner></Banner>

      {/* Stats Section */}
      <Stats></Stats>

      {/* Language Category Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary mb-10">Language Category</h1>
        <TutorCategories></TutorCategories>
      </div>
      {/* Top Rated Tutors Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary">Top Rated Tutors</h1>
        <TopRatedTutors
          key={topRatedTutors._id}
          topRatedTutors={topRatedTutors}
        ></TopRatedTutors>
      </div>

      {/* Extra - 2 */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary">Extra - 2</h1>
      </div>
    </div>
  );
};

export default HomePage;
